<template>
  <form class="space-y-4" @submit.prevent="submit">
    <div>
      <label class="mb-1 block text-sm text-slate-400">Имя</label>
      <SharedInput v-model="form.name" placeholder="Имя" required />
    </div>
    <div>
      <label class="mb-1 block text-sm text-slate-400">Адрес</label>
      <SharedInput v-model="form.address" placeholder="Адрес" required />
    </div>
    <div>
      <label class="mb-1 block text-sm text-slate-400">Телефон</label>
      <SharedInput v-model="form.phone" type="tel" placeholder="Телефон" required />
    </div>
    <SharedButton type="submit" variant="primary">
      Подтвердить
    </SharedButton>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  address: '',
  phone: '',
})

const emit = defineEmits<{ success: [] }>()

function submit() {
  // Mock: show success and clear cart
  alert('Заказ успешно оформлен! Спасибо за покупку.')
  useCartStore().clearCart()
  emit('success')
  navigateTo('/')
}
</script>
