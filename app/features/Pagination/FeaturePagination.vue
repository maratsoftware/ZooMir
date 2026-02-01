<template>
  <nav
    class="flex flex-wrap items-center justify-center gap-4 py-8"
    aria-label="Навигация по страницам каталога"
  >
    <SharedButton
      variant="secondary"
      :disabled="currentPage <= 1"
      aria-label="Предыдущая страница"
      :aria-current="currentPage <= 1 ? undefined : undefined"
      @click="$emit('prev')"
    >
      Назад
    </SharedButton>
    <span class="px-2 text-slate-400" aria-live="polite">
      Страница <strong>{{ currentPage }}</strong> из {{ totalPages }}
    </span>
    <SharedButton
      variant="secondary"
      :disabled="currentPage >= totalPages"
      aria-label="Следующая страница"
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
