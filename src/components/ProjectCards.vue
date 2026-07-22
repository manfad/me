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
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.card-link {
  border: none;
  display: block;
}

.card {
  height: 100%;
}

.tags {
  color: var(--fg-soft);
}
</style>
