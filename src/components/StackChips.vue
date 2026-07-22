<script setup lang="ts">
import { RButton, RSpace } from 'roughness'

defineProps<{
  items: { label: string; icon?: string; inv?: boolean; href?: string }[]
  label?: string
}>()
</script>

<template>
  <div class="chip-group">
    <p v-if="label" class="row-label">{{ label }}</p>
    <RSpace class="chip-row" align="center">
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
  </div>
</template>

<style scoped>
.chip-group {
  margin: 0.9rem 0;
}

.row-label {
  color: var(--fg-soft);
  margin: 0 0 0.4rem;
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
