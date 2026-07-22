<script setup lang="ts">
import rough from 'roughjs'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{ sections: { id: string; label: string }[] }>()

const active = ref(props.sections[0]?.id)
const svgs: (SVGSVGElement | null)[] = []

const draw = () => {
  svgs.forEach((svg, i) => {
    if (!svg) return
    svg.replaceChildren()
    const rc = rough.svg(svg)
    const isActive = props.sections[i].id === active.value
    svg.appendChild(
      rc.line(2, 5, 2 + (isActive ? 34 : 16), 5, {
        stroke: 'currentColor',
        strokeWidth: isActive ? 2 : 1.5,
        roughness: 1.3,
        bowing: 1.8,
        seed: i * 7 + 3,
      }),
    )
  })
}

const spy = () => {
  let current = props.sections[0]?.id
  for (const s of props.sections) {
    const el = document.getElementById(s.id)
    if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) current = s.id
  }
  if (innerHeight + scrollY >= document.body.scrollHeight - 4)
    current = props.sections[props.sections.length - 1].id
  active.value = current
}

watch(active, draw)

onMounted(() => {
  spy()
  draw()
  addEventListener('scroll', spy, { passive: true })
  addEventListener('resize', spy, { passive: true })
})

onBeforeUnmount(() => {
  removeEventListener('scroll', spy)
  removeEventListener('resize', spy)
})
</script>

<template>
  <nav class="scrollspy" aria-label="Sections">
    <a
      v-for="(s, i) in sections"
      :key="s.id"
      :href="`#${s.id}`"
      :aria-label="s.label"
      :class="{ active: s.id === active }"
    >
      <svg
        :ref="(el) => (svgs[i] = el as SVGSVGElement | null)"
        width="40"
        height="10"
        viewBox="0 0 40 10"
        aria-hidden="true"
      ></svg>
    </a>
  </nav>
</template>
