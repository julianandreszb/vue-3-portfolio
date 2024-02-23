<script setup lang="ts">
import NavHeaderToggleButton from '@/components/NavHeaderToggleButton.vue'
</script>

<template>
  <header>
    <div class="container">
      <NavHeaderToggleButton />
    </div>
    <nav>
      <a class="text-md-semibold" href="/">Home</a>
      <a class="text-md-semibold" href="/about">About</a>
      <a class="text-md-semibold" href="/services">Services</a>
      <a class="text-md-semibold" href="/contact">Contact</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    height: 7.2rem;
    display: flex;
    justify-content: end;
    padding-inline-start: var(--container-padding-mobile);
    padding-inline-end: var(--spacing-lg);
    padding-block: 0;
    align-items: center;
  }
}

nav {
  display: flex;
  flex-direction: column;
  padding-block: var(--spacing-3xl);
  gap: var(--spacing-md);

  a {
    color: var(--text-primary-900);
    padding-block: var(--spacing-lg);
    padding-inline: var(--spacing-xl);
    text-decoration: none;

    &:hover {
      background-color: var(--bg-primary_hover);
    }
  }
}

//nav {
//  position: sticky;
//  top: 0;
//  display: flex;
//  justify-content: end;
//  padding-block: 2.4rem;
//  padding-inline: 2.4rem;
//  min-height: 6rem;
//  z-index: 100;
//}
</style>
