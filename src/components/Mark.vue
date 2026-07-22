<script setup lang="ts">
import { annotate } from 'rough-notation'
import type { RoughAnnotation } from 'rough-notation/lib/model'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket'
    color?: string
    strokeWidth?: number
    multiline?: boolean
  }>(),
  {
    type: 'underline',
    strokeWidth: 1.5,
    multiline: true,
  },
)

const el = ref<HTMLElement>()
let annotation: RoughAnnotation | undefined

onMounted(() => {
  annotation = annotate(el.value!, {
    type: props.type,
    strokeWidth: props.strokeWidth,
    multiline: props.multiline,
    animate: false,
    ...(props.color ? { color: props.color } : {}),
  })
  annotation.show()
})

onBeforeUnmount(() => {
  annotation?.remove()
})
</script>

<template>
  <span ref="el" :class="`mark-${type}`"><slot /></span>
</template>
