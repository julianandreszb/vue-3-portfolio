<script lang="ts" setup>
import imagePath from '@/assets/images/imgHero.png'
import VueButton from '@/components/VueButton.vue'
</script>

<template>
  <section class="section-container hero-container">
    <section class="hero">
      <img :src="imagePath" alt="" class="hero-img" />
      <div class="hero-content-container">
        <div class="hero-content">
          <h2 class="hero-heading">Clean code, beautiful design, Full-stack mastered</h2>
          <p class="hero-supporting-text">
            More than 10+ years of experience, fluent in JavaScript, Vue, PHP, and Rust. Bringing
            ideas to life through web development, from design to deployment.
          </p>
        </div>
        <VueButton class="btn-download-cv" hierarchy="Primary" size="xl" state="Default"
          >Download CV
        </VueButton>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/flex';
@use '../assets/styles/text-styles';

.hero-container {
  container-type: inline-size;
  padding-block: var(--spacing-none);
}

.hero {
  @include flex.column;
  padding-block: var(--spacing-4xl);
  gap: var(--spacing-7xl);
}

.hero-content-container {
  @include flex.column-gap-32;
}

.hero-content {
  @include flex.column-gap-16;
}

.hero-heading {
  @include text-styles.display-md-semibold;
  color: var(--text-primary);
}

.hero-supporting-text {
  @include text-styles.text-lg-regular;
  color: var(--text-tertiary);
}

@container (min-width: 768px) {
  .hero {
    flex-direction: row-reverse;
  }

  .hero-img {
    max-width: 50%;
    object-fit: cover;
  }

  .hero-heading {
    @include text-styles.display-lg-semibold;
  }
}

@container (min-width: 1280px) {
  .hero-heading {
    @include text-styles.display-xl-semibold;
  }
}
</style>
