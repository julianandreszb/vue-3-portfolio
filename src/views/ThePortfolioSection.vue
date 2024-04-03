<script lang="ts" setup>
import BlogCard from '@/components/portfolio/BlogCard.vue'
import appConfig from '../../app.config'
import type { IBlogCard } from '@/typescriptDefinitions/IBlogCard'
import { computed, type ComputedRef, reactive, ref } from 'vue'
import type { IBadge } from '@/typescriptDefinitions/IBadge'

const filterSelector = ref('most-recent')
const isViewAllBadgesActive = ref(true)
const portfolioBadges = reactive<{ [key: string]: IBadge }>({})
const filteredItems: ComputedRef<IBlogCard[]> = computed(() => {
  let items = [...portfolioItems]

  if (filterSelector.value === 'older-first') {
    items.sort(
      (a: IBlogCard, b: IBlogCard) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )
  }

  if (filterSelector.value === 'most-recent') {
    items.sort(
      (a: IBlogCard, b: IBlogCard) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }

  if (filterSelector.value === 'featured') {
    items = items.filter((item: IBlogCard) => item?.featured)
  }

  if (!isViewAllBadgesActive.value && Object.keys(portfolioBadges).length) {
    items = items.filter((item: IBlogCard) => {
      return item.badges.some((badge) => portfolioBadges[badge.name].active)
    })
  }

  return items
})
const portfolioItems: IBlogCard[] = appConfig.sections.portfolio.items

portfolioItems.forEach((item: IBlogCard) => {
  item.badges.forEach((badge) => {
    if (!Object.prototype.hasOwnProperty.call(portfolioBadges, badge.name)) {
      portfolioBadges[badge.name] = badge
    }
  })
})

function toggleBadge(badge: IBadge) {
  badge.active = !badge.active

  isViewAllBadgesActive.value = !isAtLeastOneBadgeActive()
}

function toggleViewAll() {
  isViewAllBadgesActive.value = true

  Object.values(portfolioBadges).forEach((badge) => {
    badge.active = false
  })
}

function isAtLeastOneBadgeActive() {
  return Object.values(portfolioBadges).some((badge) => badge.active)
}
</script>

<template>
  <section class="section-container portfolio-container">
    <h2 class="portfolio-heading">Portfolio</h2>
    <section class="portfolio">
      <section class="portfolio-tabs-sort">
        <ul class="portfolio-horizontal-tabs">
          <li :class="{ active: isViewAllBadgesActive }" class="tab" @click="toggleViewAll">
            View all
          </li>
          <li
            v-for="badge in portfolioBadges"
            :key="badge.id"
            :class="{ active: badge.active }"
            class="tab"
            @click="toggleBadge(badge)"
          >
            {{ badge.name }}
          </li>
        </ul>
        <select v-model="filterSelector" class="portfolio-sort-cards-selector">
          <option value="most-recent">Most Recent</option>
          <option value="older-first">Older First</option>
          <option value="featured">Featured</option>
        </select>
      </section>
      <div class="portfolio-cards-container">
        <BlogCard
          v-for="blogCard in filteredItems"
          :key="blogCard.id"
          :blog-card="blogCard"
        ></BlogCard>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/styles/text-styles';
@use 'src/assets/styles/flex';
.portfolio-container {
  container-type: inline-size;
}

.portfolio-heading {
  @include text-styles.display-sm-semibold;
  color: var(--text-primary);
}

.portfolio {
  @include flex.column-gap-48;
}

.portfolio-tabs-sort {
  @include flex.column-gap-32;
}

.portfolio-horizontal-tabs {
  @include flex.row-gap-16;
  overflow: auto;

  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.portfolio-horizontal-tabs::-webkit-scrollbar {
  display: none;
}

.portfolio-sort-cards-selector {
  @include text-styles.text-md-medium;
  background-color: var(--bg-primary);
  border-color: var(--border-primary);
  border-radius: 8px;
  color: var(--text-primary);
  outline: none;
  padding-block: 10px;
  padding-inline: 14px;
  min-width: 34.3rem;

  &:focus {
    box-shadow:
      0 0 0 0.2rem var(--border-brand-solid),
      0 0 0 0.6rem color-mix(in srgb, var(--bg-brand-primary) 50%, transparent);
  }

  option {
    padding-block: var(--spacing-2xl);
    padding-inline: var(--spacing-2xl);
  }
}

.tab {
  @include text-styles.text-md-semibold;
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ */
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  color: var(--text-quaternary);
  cursor: pointer;
  padding-block: var(--spacing-lg);
  padding-inline: var(--spacing-xs);
  user-select: none;
  white-space: nowrap;

  &.active {
    color: var(--text-brand-secondary);
    border-bottom: 0.2rem solid var(--fg-brand-primary_alt);
  }
}

@container (min-width: 768px) {
  .portfolio-heading {
    @include text-styles.display-md-semibold;
  }
}

.portfolio-cards-container {
  border-radius: var(--radius-2xl);
  column-gap: var(--spacing-xl);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  row-gap: var(--spacing-4xl);
}

@container (min-width: 1280px) {
  .portfolio {
    @include flex.column-gap-64;
  }

  .portfolio-tabs-sort {
    @include flex.row-gap-32;
    justify-content: space-between;
  }
}
</style>
