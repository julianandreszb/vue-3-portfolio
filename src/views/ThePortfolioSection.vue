<script lang="ts" setup>
import BlogCard from '@/components/portfolio/BlogCard.vue'
</script>

<template>
  <section class="section-container portfolio-container">
    <h2 class="portfolio-heading">Portfolio</h2>
    <section class="portfolio">
      <section class="portfolio-tabs-sort">
        <ul>
          <li>View all</li>
          <li>Vue</li>
          <li>Laravel</li>
          <li>Software Engineering</li>
          <li>Vanilla JavaScript</li>
        </ul>
        <select>
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
.portfolio-container {
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

.portfolio-cards-container {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  border-radius: 16px;
}
</style>
