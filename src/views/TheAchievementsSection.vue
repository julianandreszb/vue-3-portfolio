<script lang="ts" setup>
import iconGitPath from '@/assets/icons/iconGit.png'
</script>

<template>
  <section class="section-container achievements">
    <h2 class="portfolio-heading">Education/Certifications</h2>
    <section>
      <article>
        <img :src="iconGitPath" alt="Git Icon" />
        <div>
          <h2 class="achievement-heading">Clean Code</h2>
          <h3 class="achievement-subheading">Udemy</h3>
          <h3 class="achievement-subheading-date-range">Issued Jul 2021</h3>
          <button>Show credential</button>
        </div>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
