<script setup lang="ts"></script>

<template>
  <header class="nav-heaver">
    <div class="container-toggle-button">
      <label class="toggle-button">
        <input type="checkbox" />
      </label>
    </div>
    <nav class="nav-menu">
      <a class="nav-menu-item text-md-semibold" href="/">Home</a>
      <a class="nav-menu-item text-md-semibold" href="/about">About</a>
      <a class="nav-menu-item text-md-semibold" href="/services">Services</a>
      <a class="nav-menu-item text-md-semibold" href="/contact">Contact</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.toggle-button {
  --bar-width: 2.4rem;
  --bar-height: 0.24rem;
  --hamburger-gap: 0.5rem;
  --foreground: #333;
  --background: white;
  --hamburger-margin: 0.8rem;
  --animation-timing: 200ms ease-in-out;
  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
  --x-width: calc(var(--hamburger-height) * 1.41421356237);

  background-color: var(--bg-primary);
  border-radius: var(--radius-md);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: var(--hamburger-gap);
  z-index: 2;
}

.toggle-button::before,
.toggle-button::after,
.toggle-button input {
  content: '';
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--fg-secondary-700);
  border-radius: var(--radius-full);
  transform-origin: left center;

  transition:
    opacity var(--animation-timing),
    width var(--animation-timing),
    rotate var(--animation-timing),
    translate var(--animation-timing),
    background-color var(--animation-timing);
}

.toggle-button input {
  appearance: none;
  outline: none;
  pointer-events: none;
}

.toggle-button:has(input:checked)::before {
  rotate: 45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height) / -2);
}

.toggle-button:has(input:checked)::after {
  rotate: -45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height) / 2);
}

.toggle-button input:checked {
  opacity: 0;
  width: 0;
}

.container-toggle-button:has(input:checked) + .nav-menu {
  transition: translate 500ms ease-in-out;
  translate: 0;
}

.nav-heaver {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-toggle-button {
  height: 7.2rem;
  display: flex;
  justify-content: end;
  padding-inline-start: var(--container-padding-mobile);
  padding-inline-end: var(--spacing-lg);
  padding-block: 0;
  align-items: center;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  padding-block: var(--spacing-3xl);
  gap: var(--spacing-md);
  transition: translate 500ms ease-in-out;
  translate: -100%;
}

.nav-menu-item {
  color: var(--text-primary-900);
  padding-block: var(--spacing-lg);
  padding-inline: var(--spacing-xl);
  text-decoration: none;

  &:hover {
    background-color: var(--bg-primary_hover);
  }
}

@container (min-width: 768px) {
  .container-toggle-button {
    display: none;
  }

  .nav-menu {
    translate: 0;

    flex-direction: row;
    height: 8rem;
    align-items: center;
    justify-content: end;
    padding-inline: var(--container-padding-desktop);
    gap: var(--spacing-4xl);
  }

  .nav-menu-item {
    padding-block: var(--spacing-none);
    padding-inline: var(--spacing-none);
    margin-block: var(--spacing-none);
    margin-inline: var(--spacing-none);
    color: var(--button-tertiary-fg);

    &:hover {
      background-color: transparent;
      color: var(--button-tertiary-fg_hover);
    }
  }
}
</style>
