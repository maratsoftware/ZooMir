<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold text-white">Оформление</h1>

    <div v-if="cartStore.items.length === 0" class="rounded-xl border border-slate-700 bg-slate-800 p-8 text-center text-slate-400">
      Корзина пуста. <NuxtLink to="/" class="text-white underline">Перейти в магазин</NuxtLink>
    </div>

    <div v-else class="max-w-md">
      <FeatureCheckoutForm />
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()

useSeoMeta({
  title: 'Оформление заказа — ZooMir',
  description: 'Оформление заказа',
})
</script>
