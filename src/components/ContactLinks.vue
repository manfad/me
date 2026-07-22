<script setup lang="ts">
import { RButton, RSpace } from 'roughness'
</script>

<template>
  <RSpace>
    <RButton tag="a" href="https://github.com/manfad" target="_blank" rel="noopener" class="cbtn">
      <img class="inv" src="/icons/github.svg" alt="" width="18" height="18" /> GitHub
    </RButton>
    <RButton
      tag="a"
      href="https://www.linkedin.com/in/manfred-tham-4b951025a/"
      target="_blank"
      rel="noopener"
      class="cbtn"
    >
      <img class="inv" src="/icons/linkedin.svg" alt="" width="18" height="18" /> LinkedIn
    </RButton>
    <RButton tag="a" href="https://x.com/manfad" target="_blank" rel="noopener" class="cbtn">
      <img class="inv" src="/icons/x.svg" alt="" width="18" height="18" /> X
    </RButton>
    <RButton tag="a" href="mailto:manfad99@gmail.com" class="cbtn">
      <img class="inv" src="/icons/mail.svg" alt="" width="18" height="18" /> Email
    </RButton>
  </RSpace>
</template>

<style scoped>
.cbtn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.cbtn img {
  display: block;
}
</style>
