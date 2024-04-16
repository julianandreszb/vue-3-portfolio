<script lang="ts" setup>
import AchievementCard from '@/components/achievements/AchievementCard.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import appConfig from '../../app.config'
</script>

<template>
  <section id="education" class="section-container achievements">
    <h2 class="achievements-heading">Education/Certifications</h2>
    <section class="achievements-cards-container">
      <template v-for="card in appConfig.sections.education.items" :key="card.id">
        <AchievementCard :achievement-card="card" />
        <SectionDivider />
      </template>
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
