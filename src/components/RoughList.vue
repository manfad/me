<script setup lang="ts">
import { RList, RListItem } from 'roughness'

defineProps<{ items: string[] }>()
</script>

<template>
  <RList class="soft rough-list">
    <RListItem v-for="(item, i) in items" :key="i">
      <span v-html="item"></span>
    </RListItem>
  </RList>
</template>

<style scoped>
.rough-list {
  margin: 0.9rem 0;
}
</style>
