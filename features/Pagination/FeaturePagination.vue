<template>
  <nav class="flex items-center justify-center gap-2 py-6">
    <SharedButton
      variant="secondary"
      :disabled="currentPage <= 1"
      @click="$emit('prev')"
    >
      Назад
    </SharedButton>
    <span class="px-4 text-slate-400">
      Страница {{ currentPage }} из {{ totalPages }}
    </span>
    <SharedButton
      variant="secondary"
      :disabled="currentPage >= totalPages"
      @click="$emit('next')"
    >
      Вперёд
    </SharedButton>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()
defineEmits<{ prev: []; next: [] }>()
</script>
