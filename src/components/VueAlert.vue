<script lang="ts" setup>
import VueButton from '@/components/VueButton.vue'
import { AlertColor } from '@/typescriptDefinitions/enums/AlertColor'
import type { IAlert } from '@/typescriptDefinitions/IAlert'
import { reactive } from 'vue'

const props = withDefaults(defineProps<IAlert>(), {
  color: AlertColor.Default
})

const model = defineModel()
const classObject = reactive({
  alert: true,
  error: props.color === AlertColor.Error,
  success: props.color === AlertColor.Success
})
</script>

<template>
  <div v-if="model" :class="classObject">
    <span class="alert-icon">
      <svg
        v-if="props.color === AlertColor.Success"
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25008 9.99996L8.75008 12.5L13.7501 7.49996M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
          stroke="#079455"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.66667"
        />
      </svg>
      <svg
        v-else
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0001 6.66663V9.99996M10.0001 13.3333H10.0084M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
          stroke="#D92D20"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.66667"
        />
      </svg>
    </span>
    <div class="alert-content-wrap">
      <div class="alert-text-container">
        <p class="title">{{ props.title }}</p>
        <p class="message">{{ props.message }}</p>
      </div>
      <div class="alert-actions">
        <VueButton hierarchy="Link gray" size="sm" state="Default" @click="model = false"
          >Dismiss</VueButton
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/text-styles';

.alert {
  display: flex;
  width: 100%;
  align-items: center;
  padding-inline: var(--spacing-xl);
  padding-block: var(--spacing-xl);
  border-radius: var(--spacing-lg);
  border: 1px solid var(--border-primary);
  gap: var(--spacing-xl);
  background-color: var(--bg-primary_alt);
}

.title {
  @include text-styles.text-sm-semibold;
  color: var(--text-secondary);
}

.message {
  @include text-styles.text-sm-regular;
  color: var(--text-tertiary);
}

.alert-content-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  //justify-content: space-between;
  width: 100%;
}

.alert-text-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.alert-icon {
  width: 24px;
  height: 24px;
  border: 0.2rem solid var(--bg-primary_alt);
  border-radius: var(--radius-full);
  display: inline-block;
}

.alert.error > .alert-icon {
  box-shadow:
    0 0 0 0.2rem color-mix(in srgb, var(--fg-error-primary) 30%, transparent),
    0 0 0 0.4rem var(--bg-primary_alt),
    0 0 0 0.6rem color-mix(in srgb, var(--fg-error-primary) 10%, transparent);
}

.alert.success > .alert-icon {
  box-shadow:
    0 0 0 0.2rem color-mix(in srgb, var(--fg-success-primary) 30%, transparent),
    0 0 0 0.4rem var(--bg-primary_alt),
    0 0 0 0.6rem color-mix(in srgb, var(--fg-success-primary) 10%, transparent);
}

.alert-actions {
  display: flex;
  justify-content: start;
}
</style>
