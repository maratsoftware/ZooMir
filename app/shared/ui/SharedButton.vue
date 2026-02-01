<template>
  <button
    :type="type"
    :class="[
      'rounded-xl px-5 py-2.5 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
      variant === 'primary' && 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-[0.98]',
      variant === 'secondary' && 'bg-slate-700/80 text-slate-200 hover:bg-slate-600 border border-slate-600',
      variant === 'ghost' && 'text-slate-300 hover:bg-slate-800 hover:text-white',
      variant === 'link' && 'text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline',
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    ]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-busy="ariaBusy"
    :aria-current="ariaCurrent"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'ghost' | 'link'
    disabled?: boolean
    ariaLabel?: string
    ariaBusy?: boolean
    ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | true | false
  }>(),
  { type: 'button', variant: 'primary', disabled: false }
)
defineEmits<{ click: [] }>()
</script>
