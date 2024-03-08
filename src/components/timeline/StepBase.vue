<script setup lang="ts">
import ProgressStep from '@/components/timeline/StepProgress.vue'
</script>

<template>
  <section class="step-base">
    <ProgressStep />
    <div class="step-content-wrapper">
      <div class="step-headers-container">
        <h2 class="heading">Full-stack Web Developer</h2>
        <span class="subheading">LifeFile LLC • Full-time</span>
        <span class="subheading-date-range">2014 - 2024</span>
      </div>
      <div class="step-text-container">
        <p class="supporting-text">
          Lorem ipsum dolor sit amet consectetur. Pharetra feugiat morbi vel odio mauris arcu
          turpis. Mi varius ante vel enim id ornare nam.
        </p>
        <span class="text-items">Skill One, Skill Two and 3+ Skills</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/text-styles';

.step-base {
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

.heading {
  @include text-styles.text-md-semibold;
  margin-block-end: 0;
  color: var(--text-brand-secondary);
}

.subheading {
  @include text-styles.text-xs-semibold;
  margin-block-end: 0;
}

.subheading-date-range {
  @include text-styles.text-xs-semibold;
  margin-block-end: 0;
  color: var(--text-placeholder_subtle);
}

.step-text-container {
  display: flex;
  flex-direction: column;
}

.supporting-text {
  @include text-styles.text-sm-regular;
  margin-block-end: 0;
  max-width: 60ch;
}

.text-items {
  padding-block-start: var(--spacing-md);
  @include text-styles.text-xs-semibold;
}
</style>
