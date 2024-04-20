<script lang="ts" setup>
import VueButton from '@/components/VueButton.vue'
import type { IAchievementCard } from '@/typescriptDefinitions/IAchievementCard'
import { formatSkills } from '@/utils/UtilsArray'
import { openPage } from '@/utils/Functions'
const props = defineProps<{ achievementCard: IAchievementCard }>()
</script>

<template>
  <article class="achievement-card">
    <img
      :alt="props.achievementCard.icon.alt"
      :src="props.achievementCard.icon.src"
      class="achievement-icon"
    />
    <div class="achievement-text-container">
      <h2 class="achievement-heading">{{ props.achievementCard.heading }}</h2>
      <h3 class="achievement-subheading">{{ props.achievementCard.certificationProvider }}</h3>
      <h3 class="achievement-subheading-date-range">{{ props.achievementCard.date }}</h3>
      <VueButton
        class="achievement-show-credential-button"
        hierarchy="Secondary color"
        size="sm"
        state="Default"
        type="button"
        @click="openPage(props.achievementCard.certificateLink)"
        >Show credential</VueButton
      >
      <p class="achievement-skills-text">
        <span class="achievement-skills-label">Skills: </span
        >{{ formatSkills(props.achievementCard.skills, 4, ' • ') }}
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/flex';
@use 'src/assets/styles/text-styles';

.achievement-card {
  container-type: inline-size;
  @include flex.row-gap-12;
}

.achievement-icon {
  padding-block: var(--spacing-md);
  padding-inline: var(--spacing-md);
  width: var(--spacing-6xl);
  height: var(--spacing-6xl);
  border: var(--spacing-xxs) solid var(--featured-icon-modern-border);
  border-radius: var(--radius-md);
}

.achievement-heading {
  @include text-styles.text-sm-semibold;
  color: var(--text-secondary);
}

.achievement-subheading {
  @include text-styles.text-xs-medium;
  color: var(--text-secondary);
}

.achievement-subheading-date-range {
  @include text-styles.text-xs-regular;
  color: var(--text-quaternary);
}

.achievement-show-credential-button {
  width: 13.8rem;
}

.achievement-text-container {
  @include flex.column-gap-6;
  padding-block: var(--spacing-xs) var(--spacing-xl);
}

.achievement-skills-text {
  @include text-styles.text-xs-regular;
  color: var(--text-secondary);
  margin-block-start: var(--spacing-xl);
}

.achievement-skills-label {
  @include text-styles.text-xs-semibold;
  color: var(--text-secondary);
}

@container (min-width: 768px) {
  .achievement-icon {
    padding-block: var(--spacing-lg);
    padding-inline: var(--spacing-lg);
    width: var(--spacing-7xl);
    height: var(--spacing-7xl);
  }

  .achievement-heading {
    @include text-styles.text-md-semibold;
  }

  .achievement-subheading {
    @include text-styles.text-sm-medium;
  }

  .achievement-subheading-date-range {
    @include text-styles.text-sm-regular;
  }

  .achievement-show-credential-button {
    width: 14.2rem;
  }

  .achievement-skills-text {
    @include text-styles.text-sm-regular;
  }

  .achievement-skills-label {
    @include text-styles.text-sm-semibold;
  }
}
</style>
