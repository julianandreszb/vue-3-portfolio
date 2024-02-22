<script setup lang="ts"></script>

<template>
  <button class="menu-toggle">
    <svg
      class="icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<style scoped>
:root {
  --border-width: 3px;
}

.menu-toggle {
  align-items: center;
  background-color: var(--bg-primary);
  border-radius: var(--radius-md);
  border: var(--border-width) solid transparent;
  display: flex;
  height: 4rem;
  justify-content: center;
  padding-block: 0.8rem;
  padding-inline: 0.8rem;
  width: 4rem;

  &:focus,
  &:active {
    border: var(--border-width) solid var(--border-secondary);
  }

  .icon {
    color: var(--fg-secondary-700);
    cursor: pointer;
    min-height: 2.4rem;
    min-width: 2.4rem;

    &:hover {
      color: var(--fg-secondary_hover);
    }
  }
}
</style>
