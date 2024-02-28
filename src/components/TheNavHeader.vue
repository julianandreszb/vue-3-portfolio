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
$nav-header-height: 7.2rem;

.toggle-button {
  --animation-timing: 200ms ease-in-out;
  --background: white;
  --bar-height: 0.24rem;
  --bar-width: 2.4rem;
  --foreground: #333;
  --hamburger-gap: 0.5rem;
  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
  --hamburger-margin: 0.8rem;
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
  background-color: var(--fg-secondary-700);
  border-radius: var(--radius-full);
  content: '';
  height: var(--bar-height);
  transform-origin: left center;
  width: var(--bar-width);

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
  transition: transform 500ms;
  transform: translateY(0);
}

.nav-heaver {
  background-color: var(--bg-primary);
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
}

.container-toggle-button {
  background-color: var(--bg-primary);
  align-items: center;
  display: flex;
  height: $nav-header-height;
  justify-content: end;
  padding-block: 0;
  padding-inline-end: var(--spacing-lg);
  padding-inline-start: var(--container-padding-mobile);
  z-index: 1000;
}

.nav-menu {
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding-block: var(--spacing-3xl);
  position: absolute;
  top: $nav-header-height;
  transition: transform 500ms;
  transform: translateY(-100%);
  width: 100%;
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
    align-items: center;
    flex-direction: row;
    gap: var(--spacing-4xl);
    height: 8rem;
    justify-content: end;
    padding-inline: var(--container-padding-desktop);
    position: sticky;
    top: 0;
    transform: translateY(0);
  }

  .nav-menu-item {
    color: var(--button-tertiary-fg);
    margin-block: var(--spacing-none);
    margin-inline: var(--spacing-none);
    padding-block: var(--spacing-none);
    padding-inline: var(--spacing-none);

    &:hover {
      background-color: transparent;
      color: var(--button-tertiary-fg_hover);
    }
  }
}
</style>
