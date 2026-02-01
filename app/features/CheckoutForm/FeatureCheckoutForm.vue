<template>
  <form
    class="space-y-5"
    aria-labelledby="checkout-heading"
    @submit.prevent="submit"
  >
    <h2 id="checkout-heading" class="sr-only">
      Данные для доставки
    </h2>
    <div>
      <label for="checkout-name" class="mb-1.5 block text-sm font-medium text-zinc-300">
        Имя
      </label>
      <SharedInput
        input-id="checkout-name"
        v-model="form.name"
        placeholder="Имя"
        required
        autocomplete="name"
        aria-required="true"
      />
    </div>
    <div>
      <label for="checkout-address" class="mb-1.5 block text-sm font-medium text-zinc-300">
        Адрес
      </label>
      <SharedInput
        input-id="checkout-address"
        v-model="form.address"
        placeholder="Адрес доставки"
        required
        autocomplete="street-address"
        aria-required="true"
      />
    </div>
    <div>
      <label for="checkout-phone" class="mb-1.5 block text-sm font-medium text-zinc-300">
        Телефон
      </label>
      <SharedInput
        input-id="checkout-phone"
        v-model="form.phone"
        type="tel"
        placeholder="+7 (999) 123-45-67"
        required
        autocomplete="tel"
        aria-required="true"
      />
    </div>
    <SharedButton
      type="submit"
      variant="primary"
      :aria-busy="isSubmitting"
      aria-label="Подтвердить заказ"
    >
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

const isSubmitting = ref(false)
const emit = defineEmits<{ success: [] }>()

function submit() {
  isSubmitting.value = true
  setTimeout(() => {
    alert('Заказ успешно оформлен! Спасибо за покупку.')
    useCartStore().clearCart()
    emit('success')
    navigateTo('/')
    isSubmitting.value = false
  }, 300)
}
</script>
