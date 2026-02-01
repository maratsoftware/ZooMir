<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white">
        Корзина
      </h1>
      <p class="mt-2 text-zinc-400">
        Проверьте состав заказа перед оформлением.
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

    <template v-else>
      <ul
        class="space-y-4"
        role="list"
        aria-label="Товары в корзине"
      >
        <li
          v-for="item in cartStore.items"
          :key="item.productId"
          class="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-700/80 bg-zinc-800/60 p-5"
          role="listitem"
        >
          <div class="min-w-0 flex-1">
            <p class="font-medium text-white">{{ item.name }}</p>
            <p class="mt-1 text-sm text-zinc-400">
              {{ formatPrice(item.price) }} за шт.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="flex items-center gap-1 rounded-lg border border-zinc-600 bg-zinc-800/80"
              role="group"
              :aria-label="`Количество: ${item.name}`"
            >
              <button
                type="button"
                class="flex size-10 shrink-0 items-center justify-center rounded-l-lg text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset disabled:opacity-40 disabled:hover:bg-transparent"
                :aria-label="`Уменьшить количество ${item.name}`"
                :disabled="item.quantity <= 1"
                @click="changeQuantity(item.productId, item.quantity - 1)"
              >
                <Icon name="lucide:minus" class="size-4" aria-hidden="true" />
              </button>
              <span
                class="min-w-8 px-2 text-center font-medium text-white tabular-nums"
                aria-live="polite"
                aria-atomic="true"
              >
                {{ item.quantity }}
              </span>
              <button
                type="button"
                class="flex size-10 shrink-0 items-center justify-center rounded-r-lg text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset"
                :aria-label="`Увеличить количество ${item.name}`"
                @click="changeQuantity(item.productId, item.quantity + 1)"
              >
                <Icon name="lucide:plus" class="size-4" aria-hidden="true" />
              </button>
            </div>

            <span class="min-w-[5rem] text-right font-semibold text-emerald-400" aria-label="Сумма по позиции">
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

      <section class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-700/80 bg-zinc-800/50 p-6" aria-label="Итого">
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
import { useCartStore } from '~/entities/cart/store/useCartStore';
import { formatPrice } from '~/shared/utils/formatPrice'

const cartStore = useCartStore()

function changeQuantity(productId: string, newQuantity: number) {
  cartStore.updateQuantity(productId, newQuantity)
}

useSeoMeta({
  title: 'Корзина — ZooMir',
  description: 'Ваша корзина покупок',
})
</script>
