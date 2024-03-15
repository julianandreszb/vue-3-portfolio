<script lang="ts" setup>
import BlogCard from '@/components/portfolio/BlogCard.vue'
</script>

<template>
  <section class="section-container portfolio-container">
    <section class="portfolio">
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
.portfolio-container {
  container-type: inline-size;
}

.portfolio-cards-container {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  border-radius: 16px;
}
</style>
