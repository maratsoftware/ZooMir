<template>
  <button
    :type="type"
    :class="[
      'rounded-lg px-4 py-2 font-medium transition-colors',
      variant === 'primary' && 'bg-slate-600 text-white hover:bg-slate-500',
      variant === 'secondary' && 'bg-slate-700 text-slate-200 hover:bg-slate-600 border border-slate-600',
      variant === 'ghost' && 'text-slate-300 hover:bg-slate-800',
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'ghost'
    disabled?: boolean
  }>(),
  { type: 'button', variant: 'primary', disabled: false }
)
defineEmits<{ click: [] }>()
</script>
