<script lang="ts" setup>
import AchievementCard from '@/components/achievements/AchievementCard.vue'
import SectionDivider from '@/components/SectionDivider.vue'
</script>

<template>
  <section class="section-container achievements">
    <h2 class="achievements-heading">Education/Certifications</h2>
    <section class="achievements-cards-container">
      <AchievementCard />
      <SectionDivider />
      <AchievementCard />
      <SectionDivider />
      <AchievementCard />
      <SectionDivider />
      <AchievementCard />
      <SectionDivider />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/flex';
@use 'src/assets/styles/text-styles';

.achievements-heading {
  @include text-styles.display-sm-semibold;
  color: var(--text-primary);
}

.achievements-cards-container {
  @include flex.column-gap-12;
}
</style>
