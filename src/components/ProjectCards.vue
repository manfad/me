<script setup lang="ts">
import { RCard, RSpace, RText } from 'roughness'

interface Project {
  name: string
  description: string
  tags: string[]
  link?: string
}

defineProps<{ projects: Project[] }>()

const palette = ['primary', 'info', 'success', 'warning']
</script>

<template>
  <div class="cards">
    <component
      :is="project.link ? 'a' : 'div'"
      v-for="(project, index) in projects"
      :key="project.name"
      :href="project.link"
      class="card-link"
      :target="project.link ? '_blank' : undefined"
      :rel="project.link ? 'noopener' : undefined"
    >
      <RCard header class="card" :color="palette[index % palette.length]">
        <template #title>{{ project.name }}</template>
        <RSpace vertical>
          <RText>{{ project.description }}</RText>
          <RText size="small" class="tags">{{ project.tags.join(' · ') }}</RText>
        </RSpace>
      </RCard>
    </component>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.card-link {
  border: none;
  display: block;
}

.card {
  height: 100%;
  --r-card-padding-block: 0.8rem;
  --r-card-padding-inline: 1rem;
}

.card :deep(.r-card__header) {
  justify-content: flex-start;
  margin-block-end: 0.3rem;
  inline-size: 100%;
}

.card :deep(.r-card__title) {
  --r-element-font-size: 1.02em;
}

.card :deep(.r-space) {
  gap: 0.35rem;
}

.card :deep(.r-text) {
  font-size: 0.92rem;
  line-height: 1.55;
}

.tags {
  color: var(--fg-soft);
}

.tags:deep(),
.card .tags {
  font-size: 0.8rem;
}
</style>
