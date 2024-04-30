<script lang="ts" setup>
import VueButton from '@/components/VueButton.vue'
import emailjs from '@emailjs/browser'
import { reactive, ref } from 'vue'
import appConfig from '../../app.config'
import VueClientRecaptcha from 'vue-client-recaptcha'
import VueAlert from '@/components/VueAlert.vue'
import { AlertColor } from '@/typescriptDefinitions/enums/AlertColor'

const isCaptchaValid = ref(false)
const isSendingMessage = ref(false)
const contactForm = ref<HTMLFormElement | null>(null)
const vueAlert = reactive({
  color: AlertColor.Default,
  message: '',
  title: '',
  isOpen: false
})

emailjs.init({
  publicKey: import.meta.env.VITE_API_EMAILJS_PUBLIC_KEY
})

const emailMessage = reactive({
  fromName: '',
  userLastName: '',
  userFirstName: '',
  userEmail: '',
  message: '',
  captcha: ''
})

function resetForm() {
  emailMessage.fromName = ''
  emailMessage.userLastName = ''
  emailMessage.userFirstName = ''
  emailMessage.userEmail = ''
  emailMessage.message = ''
  emailMessage.captcha = ''
}

async function sendEmail() {
  isSendingMessage.value = true
  const templateParams = {
    to_name: import.meta.env.VITE_API_TEMPLATE_TO_NAME,
    from_name: emailMessage.fromName.replace(/\b\w/g, (char) => char.toUpperCase()),
    user_email: emailMessage.userEmail,
    message: emailMessage.message
  }

  emailjs
    .send(
      import.meta.env.VITE_API_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then(
      function (response) {
        resetForm()
        if (response.status === 200) {
          vueAlert.color = AlertColor.Success
          vueAlert.message = 'Your message has been sent successfully!'
          vueAlert.title = 'Success'
          vueAlert.isOpen = true
        }
      },
      function (err) {
        resetForm()

        vueAlert.color = AlertColor.Error
        vueAlert.message = err.text
        vueAlert.title = 'Error'
        vueAlert.isOpen = true
      }
    )
    .finally(() => {
      isSendingMessage.value = false
    })
}

function submitContactForm() {
  if (!contactForm.value) {
    return
  }

  // Check if the form is valid
  if (contactForm.value.checkValidity()) {
    if (!isCaptchaValid.value) {
      return
    }

    return sendEmail()
  } else {
    // Trigger HTML5 validation
    contactForm.value.reportValidity()
  }
}
</script>

<template>
  <section id="contact" class="contact section-container">
    <h2 class="contact-heading">{{ appConfig.sections.contact.heading }}</h2>
    <div class="contact-content-container">
      <form ref="contactForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="emailMessage.fromName"
            :disabled="isSendingMessage"
            class="form-control"
            placeholder="Your name"
            required
            type="text"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="emailMessage.userEmail"
            :disabled="isSendingMessage"
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
            :disabled="isSendingMessage"
            class="form-control"
            placeholder="Leave us a message..."
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="captcha">Captcha Code</label>
          <input
            id="captcha"
            v-model="emailMessage.captcha"
            :disabled="isSendingMessage"
            class="form-control"
            placeholder="Enter captcha code"
            required
            type="text"
          />
          <VueClientRecaptcha
            :value="emailMessage.captcha"
            @isValid="(isValid: boolean) => (isCaptchaValid = isValid)"
          />
        </div>
        <VueAlert
          v-model="vueAlert.isOpen"
          :color="vueAlert.color"
          :message="vueAlert.message"
          :title="vueAlert.title"
        />
        <div class="form-group form-group-actions">
          <VueButton
            :is-loading="isSendingMessage"
            hierarchy="Primary"
            size="xl"
            state="Default"
            @click="submitContactForm"
          >
            Send message</VueButton
          >
        </div>
      </form>
      <img
        :alt="appConfig.sections.contact.image.alt"
        :src="appConfig.sections.contact.image.src"
        class="contact-img"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';
@use 'src/assets/styles/flex';
@use 'sass:color';

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
  /* max-width: 500px;*/
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-group-actions {
  margin-block-start: auto;
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

  &:disabled {
    color: var(--text-disabled);
    background-color: var(--bg-disabled_subtle);
  }
}

.vue_client_recaptcha {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
}

:deep(.vue_client_recaptcha_icon) {
  width: 2.4rem;
  height: 2.4rem;
}
</style>
