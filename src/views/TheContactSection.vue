<script lang="ts" setup>
import VueButton from '@/components/VueButton.vue'
import emailjs from '@emailjs/browser'
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue'
import imagePath from '@/assets/images/imgHero.png'

emailjs.init({
  publicKey: import.meta.env.VITE_API_EMAILJS_PUBLIC_KEY
})

const reCaptchaKey = import.meta.env.VITE_API_GOOGLE_RE_CAPTCHA_SITE_KEY

const emailMessage = reactive({
  fromName: '',
  userLastName: '',
  userFirstName: '',
  userEmail: '',
  message: ''
})

function sendEmail() {
  const captchaToken = grecaptcha.getResponse()

  const templateParams = {
    to_name: import.meta.env.VITE_API_TEMPLATE_TO_NAME,
    from_name: emailMessage.fromName.replace(/\b\w/g, (char) => char.toUpperCase()),
    user_email: emailMessage.userEmail,
    message: emailMessage.message,
    'g-recaptcha-response': captchaToken
  }

  emailjs
    .send(
      import.meta.env.VITE_API_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (err) {
        console.log('FAILED...', err)
      }
    )
}

const recaptchaContainer = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js'
  script.async = true
  script.defer = true
  script.onload = () => {
    const intervalId = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        clearInterval(intervalId)
        // Check if the reCAPTCHA widget has already been rendered in the element
        if (!recaptchaContainer.value.firstChild) {
          grecaptcha.render(recaptchaContainer.value, {
            sitekey: reCaptchaKey,
            theme: preferColorScheme
          })
        }
      }
    }, 100)
  }
  document.head.appendChild(script)
})

const preferColorScheme = computed(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
})

function submitContactForm(event: Event) {
  const form = event.target as HTMLFormElement

  // Check if the form is valid
  if (form.checkValidity()) {
    const captchaToken = grecaptcha.getResponse()
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA')
      return
    }

    return sendEmail()
  } else {
    // Trigger HTML5 validation
    form.reportValidity()
  }
}
</script>

<template>
  <section class="contact section-container">
    <h2 class="contact-heading">Contact</h2>
    <div class="contact-content-container">
      <form action="" class="contact-form" @submit.prevent="submitContactForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="emailMessage.fromName"
            class="form-control"
            placeholder="Your name"
            required
            type="text"
          />
        </div>
        <div class="form-group">
          <label for="email">Email {{ emailMessage.userEmail }}</label>
          <input
            id="email"
            v-model="emailMessage.userEmail"
            class="form-control"
            placeholder="example@company.com"
            required
            type="email"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="emailMessage.message"
            class="form-control"
            placeholder="Leave us a message..."
            required
          ></textarea>
        </div>

        <!-- div :data-sitekey="reCaptchaKey" :data-theme="preferColorScheme" class="g-recaptcha"></div-->
        <div
          ref="recaptchaContainer"
          :data-sitekey="reCaptchaKey"
          :data-theme="preferColorScheme"
          class="g-recaptcha"
        ></div>
        <div class="form-group">
          <VueButton hierarchy="Primary" size="xl" state="Default" type="submit"
            >Send message</VueButton
          >
        </div>
      </form>
      <img :src="imagePath" alt="" class="contact-img" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';
@use 'src/assets/styles/flex';

.contact {
  container-type: inline-size;
}

.contact-img {
  display: none;
}

.contact-heading {
  @include text-styles.display-sm-semibold;
  color: var(--text-primary);
}

.contact-form {
  flex: 1;
}

@container (min-width: 768px) {
  .contact-content-container {
    @include flex.row;
    gap: var(--spacing-7xl);
    justify-content: space-between;
  }

  .contact-heading {
    @include text-styles.display-md-semibold;
  }

  .contact-img {
    display: block;
    max-width: 50%;
    object-fit: cover;
  }
}

label {
  @include text-styles.text-sm-medium;
  color: var(--text-secondary);
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  max-width: 400px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-control {
  @include text-styles.text-md-regular;
  background-color: var(--bg-primary);
  border-radius: 0.8rem;
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
  height: 4.4rem;
  padding-block: 1rem;
  padding-inline: 1.4rem;

  &:focus {
    border: 1px solid var(--border-brand);
    box-shadow: 0 0 0 0.3rem color-mix(in srgb, var(--border-brand) 40%, transparent);
    outline: transparent;
  }

  &::placeholder {
    color: var(--text-placeholder);
  }
}
</style>
