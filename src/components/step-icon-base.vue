<script setup lang="ts">
import { type Prop, reactive, ref } from 'vue'

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
  <div class="step-icon-wrapper" :class="classWrapperObject">
    <span class="step-icon"></span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-size-md {
  height: 3.2rem;
  width: 3.2rem;

  .step-icon {
    height: 2.4rem;
    width: 2.4rem;
  }
}
.step-icon-wrapper {
  background-color: var(--bg-brand-primary);
  border-radius: var(--radius-full);
}

.step-icon {
  background-color: var(--bg-bra);
  border: 2 solid var(--border-brand-solid);
  display: inline-block;
}
</style>
