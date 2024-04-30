<script lang="ts" setup>
import type { IButton } from '@/typescriptDefinitions/IButton'
import { reactive } from 'vue'

const props = withDefaults(defineProps<IButton>(), {
  isLoading: false,
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
  'btn-2xl': props.size === '2xl',

  disabled: props.isLoading
})
</script>

<template>
  <a :class="classObject">
    <svg
      v-if="props.isLoading"
      viewBox="0 0 100 100"
      x="0px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
    >
      <path
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        fill="#fff"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="1s"
          from="0 50 50"
          repeatCount="indefinite"
          to="360 50 50"
          type="rotate"
        />
      </path>
    </svg>
    <slot name="icon"></slot>
    <!-- span v-if="!props.isLoading"><slot></slot></span-->
    <slot v-if="!props.isLoading"></slot>
    <slot name="end-icon"></slot>
  </a>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';
@use 'src/assets/styles/helper';

.btn {
  @include helper.disable-text-selection;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    cursor: pointer;
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

svg {
  width: 4rem;
  height: 4rem;
}

.btn.disabled {
  cursor: default;
  opacity: 0.5;
  transform: scale(1);
}
</style>
