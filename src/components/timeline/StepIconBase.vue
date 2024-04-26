<script lang="ts" setup>
import { reactive } from 'vue'

interface Props {
  status: 'Incomplete' | 'Current' | 'Complete'
  size: 'sm' | 'md' | 'lg'
  state: 'Default' | 'Hover' | 'Focus'
}

const props = withDefaults(defineProps<Props>(), {
  status: 'Current',
  size: 'md',
  state: 'Default'
})

const classWrapperObject = reactive({
  'wrapper-size-sm': props.size === 'sm',
  'wrapper-size-md': props.size === 'md',
  'wrapper-size-lg': props.size === 'lg'
})
</script>

<template>
  <!--  <div class="step-icon-wrapper" :class="classWrapperObject">-->
  <span :class="classWrapperObject" class="step-icon"></span>
  <!--  </div>-->
</template>

<style lang="scss" scoped>
@use '../../assets/styles/helper';
@use 'sass:color';

/*.step-icon-wrapper {
  background-color: var(--bg-brand-primary);
  border-radius: var(--radius-full);
}*/

.step-icon {
  background-color: var(--fg-white);
  border: 0.6rem solid var(--bg-brand-solid);
  border-radius: var(--radius-full);
  box-shadow:
    0 0 0 0.2rem var(--border-brand-solid),
    0 0 0 0.6rem color-mix(in srgb, var(--bg-brand-solid) 20%, transparent);
  display: inline-block;
}

@media (prefers-color-scheme: dark) {
  .step-icon {
    background-color: var(--fg-white);
    border: 0.6rem solid var(--bg-brand-solid);
    border-radius: var(--radius-full);
    box-shadow:
      0 0 0 0.2rem var(--border-brand-solid),
      0 0 0 0.6rem color-mix(in srgb, var(--bg-brand-primary) 50%, transparent);
    display: inline-block;
  }
}

.wrapper-size-sm {
  height: 2rem;
  width: 2rem;
}

/*.wrapper-size-md {
  height: 0.2rem;
  width: 0.2rem;
}*/
</style>
