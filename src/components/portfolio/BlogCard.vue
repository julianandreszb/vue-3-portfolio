<script lang="ts" setup>
import type { IBlogCard } from '@/typescriptDefinitions/IBlogCard'
import VueButton from '@/components/VueButton.vue'

const props = defineProps<{ blogCard: IBlogCard }>()
const projectDate = props.blogCard.date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
})
</script>

<template>
  <article class="card">
    <div class="card-image-container">
      <img
        :alt="props.blogCard.image.alt"
        :src="props.blogCard.image.src"
        class="card-image"
        loading="lazy"
      />
      <div class="card-banner">
        <h2 class="card-heading">{{ props.blogCard.heading }}</h2>
        <h3 class="card-subheading-date-range">{{ props.blogCard.company }} • {{ projectDate }}</h3>
      </div>
    </div>
    <div class="card-content">
      <ul class="card-categories">
        <li v-for="badge in props.blogCard.badges" :key="badge.id" class="badge">
          {{ badge.name }}
        </li>
      </ul>
    </div>
    <div class="card-buttons-container">
      <VueButton
        :href="props.blogCard.links.github"
        class="card-link-details"
        hierarchy="Link gray"
        size="md"
        state="Default"
        target="_blank"
        >Github</VueButton
      >
      <VueButton
        :href="props.blogCard.links.live"
        class="card-link-details"
        hierarchy="Link gray"
        size="md"
        state="Default"
        target="_blank"
        >Demo</VueButton
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/flex';
@use 'src/assets/styles/text-styles';
@use 'src/assets/styles/helper';
@use 'src/assets/styles/shadow';

.card {
  container-type: inline-size;
  width: 100%;
  @include flex.column-gap-20;
  padding-block-end: var(--spacing-lg);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  @include shadow.shadow-xs;

  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    @include shadow.shadow-md;

    .card-image {
      filter: brightness(60%);
    }
  }
}
.card-image-container {
  position: relative;
  overflow: hidden;
}

.card-banner {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-xl);
  border-top: 2px solid var(--alpha-white-30);
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
}

.card-image {
  aspect-ratio: 16/9;
  border-top-left-radius: var(--radius-md);
  border-top-right-radius: var(--radius-md);
  object-fit: cover; /* To maintain aspect ratio */
  transition: all ease-in-out 0.4s;
  width: 100%;
}

.card-content {
  @include flex.column-gap-24;
  padding-inline: var(--spacing-lg);
}

.card-subheading-date-range {
  @include text-styles.text-sm-regular;
  color: var(--text-white);
}

.card-heading {
  @include text-styles.text-sm-semibold;
  color: var(--text-white);
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
  @include text-styles.text-sm-medium;
  @include helper.disable-text-selection;
  border: 1px solid var(--colors-gray-dark-mode-600);
  border-radius: var(--radius-full);
  padding-inline: var(--spacing-md);
  padding-block: var(--spacing-xxs);
  color: var(--text-primary);
}

.card-link-details {
  align-self: start;
}

.card-buttons-container {
  @include flex.row-gap-16;
  padding-inline: var(--spacing-2xl);
  justify-content: end;
}

@media (prefers-color-scheme: dark) {
  :root {
    .card {
      @include shadow.shadow-xs-dark;
      &:hover {
        @include shadow.shadow-md-dark;
      }
    }
  }
}
</style>
