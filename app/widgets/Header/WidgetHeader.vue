<template>
  <header class="sticky top-0 z-50 border-b border-zinc-700/80 bg-zinc-900/95 backdrop-blur-sm">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <NuxtLink
        to="/"
        class="text-xl font-bold tracking-tight text-white transition-colors hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
        aria-label="ZooMir — на главную"
      >
        ZooMir
      </NuxtLink>
      <nav
        class="flex items-center gap-6"
        aria-label="Основная навигация"
      >
        <NuxtLink
          to="/"
          class="text-zinc-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1"
          :aria-current="route.path === '/' ? 'page' : undefined"
        >
          Магазин
        </NuxtLink>
        <NuxtLink
          to="/cart"
          class="flex items-center gap-2 text-zinc-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1"
          :aria-label="`Корзина, товаров: ${cartStore.itemCount}`"
        >
          <Icon name="lucide:shopping-cart" class="size-5 shrink-0" aria-hidden="true" />
          <span>Корзина</span>
          <span
            v-if="cartStore.itemCount"
            class="flex min-w-6 items-center justify-center rounded-full bg-emerald-600 px-2 py-0.5 text-sm font-medium text-white"
            aria-hidden="true"
          >
            {{ cartStore.itemCount }}
          </span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
const route = useRoute()
</script>
