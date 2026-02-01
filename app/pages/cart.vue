<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold text-white">Корзина</h1>

    <div v-if="cartStore.items.length === 0" class="rounded-xl border border-slate-700 bg-slate-800 p-8 text-center text-slate-400">
      Корзина пуста. <NuxtLink to="/" class="text-white underline">Перейти в магазин</NuxtLink>
    </div>

    <template v-else>
      <ul class="space-y-4">
        <li
          v-for="item in cartStore.items"
          :key="item.productId"
          class="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-4"
        >
          <div>
            <p class="font-medium text-white">{{ item.name }}</p>
            <p class="text-sm text-slate-400">
              {{ formatPrice(item.price) }} × {{ item.quantity }}
            </p>
          </div>
          <div class="flex items-center gap-4">
            <span class="font-semibold text-white">
              {{ formatPrice(item.price * item.quantity) }}
            </span>
            <SharedButton variant="ghost" @click="cartStore.removeFromCart(item.productId)">
              Удалить
            </SharedButton>
          </div>
        </li>
      </ul>

      <div class="mt-6 flex items-center justify-between border-t border-slate-700 pt-6">
        <p class="text-lg font-semibold text-white">Итого: {{ formatPrice(cartStore.totalPrice) }}</p>
        <NuxtLink to="/checkout">
          <SharedButton variant="primary">Оформить заказ</SharedButton>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '~~/shared/utils/formatPrice'

const cartStore = useCartStore()

useSeoMeta({
  title: 'Корзина — ZooMir',
  description: 'Ваша корзина покупок',
})
</script>
