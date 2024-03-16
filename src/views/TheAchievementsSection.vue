<script lang="ts" setup>
import iconGitPath from '@/assets/icons/iconGit.png'
import VueButton from '@/components/VueButton.vue'
</script>

<template>
  <section class="section-container achievements">
    <h2 class="portfolio-heading">Education/Certifications</h2>
    <section>
      <article class="achievement-card">
        <img :src="iconGitPath" alt="Git Icon" class="achievement-icon" />
        <div class="achievement-text-container">
          <h2 class="achievement-heading">Clean Code</h2>
          <h3 class="achievement-subheading">Udemy</h3>
          <h3 class="achievement-subheading-date-range">Issued Jul 2021</h3>
          <VueButton hierarchy="Secondary color" size="sm" state="Default"
            >Show credential</VueButton
          >
        </div>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/flex';
@use 'src/assets/styles/text-styles';

.achievement-icon {
  height: 2.4rem;
}
.achievement-card {
  @include flex.row-gap-12;
}

.achievement-heading {
  @include text-styles.text-sm-semibold;
  color: var(--text-secondary);
}

.achievement-subheading {
  @include text-styles.text-xs-medium;
  color: var(--text-secondary);
}

.achievement-subheading-date-range {
  @include text-styles.text-xs-regular;
  color: var(--text-quaternary);
}

.achievement-text-container {
  @include flex.column-gap-6;
}
</style>
