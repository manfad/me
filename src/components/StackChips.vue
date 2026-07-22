<script setup lang="ts">
import { RButton, RSpace } from 'roughness'

defineProps<{ items: { label: string; icon?: string; inv?: boolean }[] }>()
</script>

<template>
  <RSpace class="chip-row">
    <RButton v-for="it in items" :key="it.label" tag="span" class="chip">
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

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  cursor: default;
}

.chip img {
  display: block;
}
</style>
