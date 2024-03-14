<script lang="ts" setup>
import ProgressStep from '@/components/timeline/StepProgress.vue'
</script>

<template>
  <section class="step-base">
    <ProgressStep />
    <div class="step-content-wrapper">
      <div class="step-headers-container">
        <h2 class="step-heading">Full-stack Web Developer</h2>
        <span class="step-subheading">LifeFile LLC • Full-time</span>
        <span class="step-subheading-date-range">2014 - 2024</span>
      </div>
      <div class="step-text-container">
        <p class="step-supporting-text">
          Lorem ipsum dolor sit amet consectetur. Pharetra feugiat morbi vel odio mauris arcu
          turpis. Mi varius ante vel enim id ornare nam.
        </p>
        <span class="step-text-items">Skill One, Skill Two and 3+ Skills</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/text-styles';

.step-base {
  container-type: inline-size;
  display: flex;
  gap: var(--spacing-lg);
}

.step-content-wrapper {
  padding-block-end: var(--spacing-3xl);
}

.step-headers-container {
  display: flex;
  flex-direction: column;
  margin-block-end: var(--spacing-xl);
}

.step-heading {
  @include text-styles.text-md-semibold;
  color: var(--text-brand-secondary);
}

.step-subheading {
  @include text-styles.text-xs-semibold;
  color: var(--text-tertiary);
}

.step-subheading-date-range {
  @include text-styles.text-xs-regular;
  color: var(--text-quaternary);
}

.step-text-container {
  display: flex;
  flex-direction: column;
}

.step-supporting-text {
  @include text-styles.text-sm-regular;
  color: var(--text-secondary);
  max-width: 60ch;
}

.step-text-items {
  padding-block-start: var(--spacing-md);
  color: var(--text-tertiary);
  @include text-styles.text-xs-semibold;
}

@container (min-width: 768px) {
  .step-heading {
    @include text-styles.text-lg-semibold;
  }

  .step-subheading {
    @include text-styles.text-sm-semibold;
  }

  .step-subheading-date-range {
    @include text-styles.text-sm-regular;
  }

  .step-supporting-text {
    @include text-styles.text-md-regular;
  }
}

@container (min-width: 1280px) {
}
</style>
