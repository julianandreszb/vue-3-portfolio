<script lang="ts" setup>
import imageCard from '@/assets/images/imgCard.png'
</script>

<template>
  <section class="card">
    <img :src="imageCard" alt="" class="card-image" />
    <div class="card-content">
      <div class="card-text-container">
        <h3 class="card-subheading-date-range">LifeFile • 20 Jan 2024</h3>
        <h2 class="card-heading">UX review presentations</h2>
        <p class="step-supporting-text">
          How do you create compelling presentations that wow your colleagues and impress your How
          do you create compelling presentations that wow your colleagues and impress your managers?
        </p>
      </div>
      <ul class="card-categories">
        <li class="badge">Vue</li>
        <li class="badge">UI/UX</li>
        <li class="badge">Laravel</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/flex';
@use 'src/assets/styles/text-styles';
.card {
  container-type: inline-size;
  /*max-width: 38.4rem;*/
  width: 100%;
  @include flex.column-gap-20;
}

.card-image {
  border-radius: var(--radius-2xl);
}

.card-content {
  @include flex.column-gap-24;
}

.card-text-container {
  @include flex.column-gap-8;
}

.card-subheading-date-range {
  @include text-styles.text-sm-semibold;
  color: var(--text-brand-secondary);
}

.card-heading {
  @include text-styles.text-xl-semibold;
  color: var(--text-primary);
}

.step-supporting-text {
  @include text-styles.text-md-regular;
  color: var(--text-tertiary);

  /* Truncate text after 2 lines - modern browsers */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-categories {
  @include flex.row-gap-8;
}

.badge {
  border: 1px solid var(--colors-gray-dark-mode-600);
  border-radius: var(--radius-full);
  padding-inline: var(--spacing-md);
  padding-block: var(--spacing-xxs);
  @include text-styles.text-sm-medium;
}
</style>
