<script lang="ts" setup>
import BlogCard from '@/components/portfolio/BlogCard.vue'
</script>

<template>
  <section class="section-container portfolio-container">
    <h2 class="portfolio-heading">Portfolio</h2>
    <section class="portfolio">
      <section class="portfolio-tabs-sort">
        <ul class="portfolio-horizontal-tabs">
          <li class="tab active">View all</li>
          <li class="tab">Vue</li>
          <li class="tab">Laravel</li>
          <li class="tab">Software Engineering</li>
          <li class="tab">Vanilla JavaScript</li>
        </ul>
        <select class="portfolio-sort-cards-selector">
          <option value="">Most Recent</option>
          <option value="older-first">Older First</option>
          <option value="featured">Featured</option>
        </select>
      </section>
      <div class="portfolio-cards-container">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';
@use 'src/assets/styles/flex';
.portfolio-container {
  container-type: inline-size;
}

.portfolio-heading {
  @include text-styles.display-sm-semibold;
  color: var(--text-primary);
}

.portfolio {
  @include flex.column-gap-48;
}

.portfolio-tabs-sort {
  @include flex.column-gap-32;
}

.portfolio-horizontal-tabs {
  @include flex.row-gap-16;
  overflow: auto;

  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.portfolio-horizontal-tabs::-webkit-scrollbar {
  display: none;
}

.portfolio-sort-cards-selector {
  @include text-styles.text-md-medium;
  background-color: var(--bg-primary);
  border-color: var(--border-primary);
  border-radius: 8px;
  color: var(--text-primary);
  outline: none;
  padding-block: 10px;
  padding-inline: 14px;
  min-width: 34.3rem;

  &:focus {
    box-shadow:
      0 0 0 0.2rem var(--border-brand-solid),
      0 0 0 0.6rem color-mix(in srgb, var(--bg-brand-primary) 50%, transparent);
  }

  option {
    padding-block: var(--spacing-2xl);
    padding-inline: var(--spacing-2xl);
  }
}

.tab {
  @include text-styles.text-md-semibold;
  color: var(--text-quaternary);
  padding-inline: var(--spacing-xs);
  padding-block: var(--spacing-lg);
  white-space: nowrap;

  &.active {
    color: var(--text-brand-secondary);
    border-bottom: 0.2rem solid var(--fg-brand-primary_alt);
  }
}

@container (min-width: 768px) {
  .portfolio-heading {
    @include text-styles.display-md-semibold;
  }
}

.portfolio-cards-container {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  border-radius: 16px;
}

@container (min-width: 1280px) {
  .portfolio {
    @include flex.column-gap-64;
  }

  .portfolio-tabs-sort {
    @include flex.row-gap-32;
    justify-content: space-between;
  }
}
</style>
