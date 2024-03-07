<script setup lang="ts">
import StepIconBase from '@/components/StepIconBase.vue'
import StepConnector from '@/components/StepConnector.vue'
</script>

<template>
  <div class="progress-step-container">
    <StepIconBase state="Default" size="sm" status="Current" />
    <StepConnector />
  </div>
</template>

<style scoped lang="scss">
.progress-step-container {
  width: max-content;
  height: 100%;
}
</style>
