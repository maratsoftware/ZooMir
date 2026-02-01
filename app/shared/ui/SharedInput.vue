<template>
  <input
    :id="inputId"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :aria-invalid="ariaInvalid"
    :aria-describedby="ariaDescribedby"
    :autocomplete="autocomplete"
    class="w-full rounded-xl border border-zinc-600 bg-zinc-800/80 px-4 py-3 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 disabled:opacity-50 transition-colors"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    type?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    inputId?: string
    ariaInvalid?: boolean
    ariaDescribedby?: string
    autocomplete?: string
  }>(),
  { type: 'text', placeholder: '', disabled: false, required: false }
)
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
