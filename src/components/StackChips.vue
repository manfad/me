<script setup lang="ts">
import { RButton, RSpace } from 'roughness'

defineProps<{
  items: { label: string; icon?: string; inv?: boolean; href?: string }[]
  label?: string
}>()
</script>

<template>
  <RSpace class="chip-row" align="center">
    <span v-if="label" class="row-label">{{ label }} —</span>
    <RButton
      v-for="it in items"
      :key="it.label"
      :tag="it.href ? 'a' : 'span'"
      :href="it.href"
      :target="it.href ? '_blank' : undefined"
      :rel="it.href ? 'noopener' : undefined"
      class="chip"
    >
      <img
        v-if="it.icon"
        :class="{ inv: it.inv }"
        :src="it.icon"
        alt=""
        width="18"
        height="18"
      />
      {{ it.label }}
    </RButton>
  </RSpace>
</template>

<style scoped>
.chip-row {
  margin: 0.9rem 0;
}

.row-label {
  color: var(--fg-soft);
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.chip img {
  display: block;
}
</style>
