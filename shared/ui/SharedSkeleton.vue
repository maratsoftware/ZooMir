<template>
  <div
    class="animate-pulse rounded-lg bg-slate-700"
    :style="{ width, height }"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string
    height?: string
  }>(),
  { width: '100%', height: '1rem' }
)
</script>
