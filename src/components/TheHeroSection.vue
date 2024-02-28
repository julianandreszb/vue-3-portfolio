<script setup lang="ts">
import imagePath from '@/assets/images/img_1.png'
</script>

<template>
  <section>
    <img :src="imagePath" alt="" />
    <div class="hero-description-container">
      <h2>Clean code, beautiful design, Full-stack mastered</h2>
      <p>
        More than 10+ years of experience, fluent in JavaScript, Vue, PHP, and Rust. Bringing ideas
        to life through web development, from design to deployment.
      </p>
      <button>Download CV</button>
    </div>
  </section>
</template>

<style scoped></style>
