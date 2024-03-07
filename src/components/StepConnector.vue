<script setup lang="ts"></script>

<template>
  <div class="connector-container">
    <div class="connector"></div>
  </div>
</template>

<style scoped lang="scss">
.connector-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.connector {
  width: 0.2rem;
  height: 100%;
  background-color: var(--border-brand-solid);
  border-radius: var(--radius-full);
}
</style>
