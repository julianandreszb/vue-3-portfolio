<script setup lang="ts">
import StepIconBase from '@/components/timeline/StepIconBase.vue'
import StepConnector from '@/components/timeline/StepConnector.vue'
</script>

<template>
  <div class="progress-step-container">
    <StepIconBase state="Default" size="sm" status="Current" />
    <StepConnector />
  </div>
</template>

<style scoped lang="scss">
.progress-step-container {
  display: flex;
  flex-direction: column;
}
</style>
