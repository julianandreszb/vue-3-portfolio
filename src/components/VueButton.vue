<script lang="ts" setup>
import type { IButton } from '@/typescriptDefinitions/IButton'
import { reactive } from 'vue'

const props = withDefaults(defineProps<IButton>(), {
  size: 'md',
  hierarchy: 'Primary',
  state: 'Default'
})

const classObject = reactive({
  btn: true,

  'btn-primary': props.hierarchy === 'Primary',
  'btn-secondary': props.hierarchy === 'Secondary color',
  'btn-link-gray': props.hierarchy === 'Link gray',

  'btn-sm': props.size === 'sm',
  'btn-md': props.size === 'md',
  'btn-lg': props.size === 'lg',
  'btn-xl': props.size === 'xl',
  'btn-2xl': props.size === '2xl'
})
</script>

<template>
  <a :class="classObject">
    <slot name="icon"></slot>
    <slot></slot>
    <slot name="end-icon"></slot>
  </a>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';

.btn {
  border-radius: var(--radius-md);
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

.btn-primary {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-fg);
  border: 0.1rem solid var(--button-primary-border);

  &:hover {
    background-color: var(--button-primary-bg_hover);
    color: var(--button-primary-fg_hover);
    border: 0.1rem solid var(--button-primary-border_hover);
  }
}

.btn-secondary {
  background-color: var(--button-secondary-color-bg);
  color: var(--button-secondary-color-fg);
  border: 0.1rem solid var(--button-secondary-color-border);

  &:hover {
    background-color: var(--button-secondary-color-bg_hover);
    color: var(--button-secondary-color-fg_hover);
    border: 0.1rem solid var(--button-secondary-color-border_hover);
  }

  &:focus {
    background-color: var(--button-secondary-color-bg_hover);
    color: var(--button-secondary-color-fg_hover);
    border: 0.1rem solid var(--button-secondary-color-border);
    box-shadow:
      0 0 0 0.2rem var(--border-brand-solid),
      0 0 0 0.6rem color-mix(in srgb, var(--bg-brand-primary) 50%, transparent);
  }
}

.btn.btn-link-gray {
  color: var(--button-tertiary-fg);
  padding-inline: 0;

  &:hover {
    color: var(--button-tertiary-fg_hover);
  }
}

.btn-sm {
  @include text-styles.text-sm-semibold;
  height: 3.6rem;
  padding-block: 0.8rem;
  padding-inline: 1.2rem;
}

.btn-md,
.btn-lg,
.btn-xl {
  @include text-styles.text-md-semibold;
}

.btn-md {
  height: 4rem;
  padding-block: 1rem;
  padding-inline: 1.4rem;
}

.btn-lg {
  height: 4.4rem;
  padding-block: 1rem;
  padding-inline: 1.6rem;
}

.btn-xl {
  height: 4.8rem;
  padding-block: 1.2rem;
  padding-inline: 1.8rem;
}

.btn-2xl {
  @include text-styles.text-lg-semibold;
  height: 6rem;
  padding-block: 1.6rem;
  padding-inline: 2.2rem;
}
</style>
