<script lang="ts" setup>
import VueButton from '@/components/VueButton.vue'
import appConfig from '../../app.config'
import { openPage } from '@/utils/Functions'
</script>

<template>
  <section id="home" class="section-container hero-container">
    <section class="hero">
      <img
        :alt="appConfig.sections.hero.image.alt"
        :src="appConfig.sections.hero.image.src"
        class="hero-img"
        fetchpriority="high"
        loading="eager"
      />
      <div class="hero-content-container">
        <div class="hero-content">
          <h2 class="hero-heading" v-html="appConfig.sections.hero.heading"></h2>
          <p class="hero-supporting-text">{{ appConfig.sections.hero.subheading }}</p>
        </div>
        <VueButton
          class="btn-download-cv"
          hierarchy="Primary"
          size="xl"
          state="Default"
          @click="openPage(appConfig.sections.hero.downloadCvButton.downloadCvUrl)"
          >{{ appConfig.sections.hero.downloadCvButton.downloadCvText }}
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

.hero-img {
  aspect-ratio: 16/9;
  object-fit: contain;
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
  .hero-content-container {
    justify-content: center;
  }

  .hero {
    flex-direction: row-reverse;
  }

  .hero-img {
    aspect-ratio: 1;
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
