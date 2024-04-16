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
    <div class="card-image-container">
      <img :alt="props.blogCard.image.alt" :src="props.blogCard.image.src" class="card-image" />
      <div class="card-buttons">
        <a
          :href="props.blogCard.links.live"
          class="icon-card icon-demo"
          target="_blank"
          title="Demo"
        >
          <svg
            class="icon-svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon-path"
              d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
            />
          </svg>
        </a>
        <a
          :href="props.blogCard.links.github"
          class="icon-card icon-github"
          target="_blank"
          title="GitHub Repository"
        >
          <svg
            class="icon-svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon-path"
              clip-rule="evenodd"
              d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
              fill="white"
              fill-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
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
@use 'src/assets/styles/helper';
@use 'src/assets/styles/shadow';

.card {
  container-type: inline-size;
  width: 100%;
  @include flex.column-gap-20;
  padding-block-end: var(--spacing-lg);
  border-radius: var(--radius-2xl);
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    @include shadow.shadow-md;

    .card-image {
      transform: scale(1.02);
      filter: brightness(60%);
    }
  }
}
.card-image-container {
  position: relative;
  overflow: hidden;
}

.card-buttons {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.icon-card {
  position: absolute;
  bottom: 0.5rem;
  z-index: 2;
  //right: 1rem;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs);
}

.icon-demo {
  right: 5rem;
}

.icon-github {
  right: 1rem;
}

.icon-svg {
  margin: 0.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}

.icon-path {
  fill: var(--icon-color-default);
}

.card-image {
  border-top-left-radius: var(--radius-2xl);
  border-top-right-radius: var(--radius-2xl);
  object-fit: cover; /* To maintain aspect ratio */
  transition: all ease-in-out 0.4s;
  width: 100%;
}

.card-content {
  @include flex.column-gap-24;
  padding-inline: var(--spacing-lg);
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
  @include text-styles.text-sm-medium;
  @include helper.disable-text-selection;
  border: 1px solid var(--colors-gray-dark-mode-600);
  border-radius: var(--radius-full);
  padding-inline: var(--spacing-md);
  padding-block: var(--spacing-xxs);
  color: var(--text-primary);
}
</style>
