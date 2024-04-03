<script lang="ts" setup>
import type { IBlogCard } from '@/typescriptDefinitions/IBlogCard'

const props = defineProps<{ blogCard: IBlogCard }>()

const projectDate = props.blogCard.date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
})
</script>

<template>
  <article class="card">
    <img :alt="props.blogCard.image.alt" :src="props.blogCard.image.src" class="card-image" />
    <div class="card-content">
      <div class="card-text-container">
        <h3 class="card-subheading-date-range">{{ props.blogCard.company }} • {{ projectDate }}</h3>
        <h2 class="card-heading">{{ props.blogCard.heading }}</h2>
        <p class="step-supporting-text">{{ props.blogCard.description }}</p>
      </div>
      <ul class="card-categories">
        <li v-for="badge in props.blogCard.badges" :key="badge.id" class="badge">
          {{ badge.name }}
        </li>
      </ul>
    </div>
  </article>
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
  object-fit: cover; /* To maintain aspect ratio */
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
  flex-wrap: wrap;
}

.badge {
  border: 1px solid var(--colors-gray-dark-mode-600);
  border-radius: var(--radius-full);
  padding-inline: var(--spacing-md);
  padding-block: var(--spacing-xxs);
  @include text-styles.text-sm-medium;
  color: var(--text-primary);
}
</style>
