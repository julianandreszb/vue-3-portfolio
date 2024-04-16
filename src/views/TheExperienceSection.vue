<script lang="ts" setup>
import StepBase from '@/components/timeline/StepBase.vue'
import appConfig from '../../app.config'
</script>

<template>
  <section id="experience" class="experience section-container">
    <h2 class="portfolio-heading">{{ appConfig.sections.experience.heading }}</h2>
    <div>
      <StepBase
        v-for="stepBase in appConfig.sections.experience.items"
        :key="stepBase.id"
        :step-base="stepBase"
      ></StepBase>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';

.experience {
  container-type: inline-size;
}

.portfolio-heading {
  @include text-styles.display-sm-semibold;
  color: var(--text-primary);
}

@container (min-width: 768px) {
  .portfolio-heading {
    @include text-styles.display-md-semibold;
  }
}
</style>
