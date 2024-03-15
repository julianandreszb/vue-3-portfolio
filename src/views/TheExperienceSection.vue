<script lang="ts" setup>
import StepBase from '@/components/timeline/StepBase.vue'
</script>

<template>
  <section class="experience section-container">
    <h2 class="portfolio-heading">Experience</h2>
    <div>
      <StepBase></StepBase>
      <StepBase></StepBase>
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

@container (min-width: 1280px) {
  /*.experience-heading {
    @include text-styles.display-md-semibold;
  }*/
}
</style>
