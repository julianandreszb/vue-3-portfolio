<script lang="ts" setup>
import ProgressStep from '@/components/timeline/StepProgress.vue'
import type { IStepBase } from '@/typescriptDefinitions/IStepBase'
/*import type { ISkill } from '@/TypescriptDefinitions/ISkill'*/
import { formatSkills } from '@/utils/UtilsArray'

defineProps<{ stepBase: IStepBase }>()

/*const formatSkills = (skills: ISkill[]) => {
  const skillsLength = skills.length
  let formattedSkills = ''
  if (skillsLength) {
    if (skillsLength > 3) {
      const remainingSkills = skillsLength - 3
      const remainingSkillsWord = remainingSkills > 1 ? 'Skills' : 'Skill'
      formattedSkills = `${skills.slice(0, 3).join(',')} and ${remainingSkills}+ ${remainingSkillsWord}`
    } else {
      formattedSkills = `${skills.join(', ')}`
    }
  }
  return formattedSkills
}*/
</script>

<template>
  <section class="step-base">
    <ProgressStep />
    <div class="step-content-container">
      <div class="step-headers-container">
        <h2 class="step-heading">{{ stepBase.heading }}</h2>
        <span class="step-subheading">{{
          `${stepBase.company} • ${stepBase.employmentForm}`
        }}</span>
        <span class="step-subheading-date-range">{{ stepBase.employmentDate }}</span>
      </div>
      <div class="step-text-container">
        <p class="step-supporting-text">{{ stepBase.description }}</p>
        <span class="step-text-items">{{ formatSkills(stepBase.skills, 3, ', ') }}</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/text-styles';

.step-base {
  container-type: inline-size;
  display: flex;
  gap: var(--spacing-lg);
}

.step-content-container {
  padding-block-end: var(--spacing-3xl);
}

.step-headers-container {
  display: flex;
  flex-direction: column;
  margin-block-end: var(--spacing-xl);
}

.step-heading {
  @include text-styles.text-md-semibold;
  color: var(--text-brand-secondary);
}

.step-subheading {
  @include text-styles.text-xs-semibold;
  color: var(--text-tertiary);
}

.step-subheading-date-range {
  @include text-styles.text-xs-regular;
  color: var(--text-quaternary);
}

.step-text-container {
  display: flex;
  flex-direction: column;
}

.step-supporting-text {
  @include text-styles.text-sm-regular;
  color: var(--text-secondary);
  max-width: 60ch;
}

.step-text-items {
  padding-block-start: var(--spacing-md);
  color: var(--text-tertiary);
  @include text-styles.text-xs-semibold;
}

@container (min-width: 768px) {
  .step-heading {
    @include text-styles.text-lg-semibold;
  }

  .step-subheading {
    @include text-styles.text-sm-semibold;
  }

  .step-subheading-date-range {
    @include text-styles.text-sm-regular;
  }

  .step-supporting-text {
    @include text-styles.text-md-regular;
  }
}
</style>
