<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white">
        Корзина
      </h1>
      <p class="mt-2 text-slate-400">
        Проверьте состав заказа перед оформлением.
      </p>
    </header>

    <section v-if="cartStore.items.length === 0" class="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-12 text-center" aria-live="polite">
      <p class="text-slate-400">
        Корзина пуста.
      </p>
      <NuxtLink
        to="/"
        class="mt-4 inline-block text-emerald-400 underline underline-offset-4 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
      >
        Перейти в магазин
      </NuxtLink>
    </section>

    <template v-else>
      <ul
        class="space-y-4"
        role="list"
        aria-label="Товары в корзине"
      >
        <li
          v-for="item in cartStore.items"
          :key="item.productId"
          class="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-700/80 bg-slate-800/60 p-5"
          role="listitem"
        >
          <div>
            <p class="font-medium text-white">{{ item.name }}</p>
            <p class="mt-1 text-sm text-slate-400">
              {{ formatPrice(item.price) }} × {{ item.quantity }}
            </p>
          </div>
          <div class="flex items-center gap-4">
            <span class="font-semibold text-emerald-400" aria-label="Сумма по позиции">
              {{ formatPrice(item.price * item.quantity) }}
            </span>
            <SharedButton
              variant="ghost"
              :aria-label="`Удалить из корзины: ${item.name}`"
              @click="cartStore.removeFromCart(item.productId)"
            >
              Удалить
            </SharedButton>
          </div>
        </li>
      </ul>

      <section class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-700/80 bg-slate-800/50 p-6" aria-label="Итого">
        <p class="text-lg font-semibold text-white">
          Итого: <span class="text-emerald-400">{{ formatPrice(cartStore.totalPrice) }}</span>
        </p>
        <NuxtLink to="/checkout">
          <SharedButton variant="primary" aria-label="Перейти к оформлению заказа">
            Оформить заказ
          </SharedButton>
        </NuxtLink>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '~/shared/utils/formatPrice'

const cartStore = useCartStore()

useSeoMeta({
  title: 'Корзина — ZooMir',
  description: 'Ваша корзина покупок',
})
</script>
