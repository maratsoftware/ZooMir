<template>
  <div class="mx-auto max-w-2xl px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white">
        Оформление заказа
      </h1>
      <p class="mt-2 text-zinc-400">
        Укажите данные для доставки. Мы свяжемся с вами для подтверждения.
      </p>
    </header>

    <section v-if="cartStore.items.length === 0" class="rounded-2xl border border-zinc-700/80 bg-zinc-800/50 p-12 text-center" aria-live="polite">
      <p class="text-zinc-400">
        Корзина пуста.
      </p>
      <NuxtLink
        to="/"
        class="mt-4 inline-block text-emerald-400 underline underline-offset-4 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
      >
        Перейти в магазин
      </NuxtLink>
    </section>

    <section v-else class="rounded-2xl border border-zinc-700/80 bg-zinc-800/50 p-8" aria-labelledby="checkout-section-heading">
      <h2 id="checkout-section-heading" class="sr-only">
        Форма оформления
      </h2>
      <FeatureCheckoutForm />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/entities/cart/store/useCartStore';

const cartStore = useCartStore()

useSeoMeta({
  title: 'Оформление заказа — ZooMir',
  description: 'Оформление заказа',
})
</script>
