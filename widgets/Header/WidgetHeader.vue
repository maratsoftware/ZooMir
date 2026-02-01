<template>
  <header class="border-b border-slate-700 bg-slate-900 px-4 py-3">
    <div class="mx-auto flex max-w-6xl items-center justify-between">
      <NuxtLink to="/" class="text-xl font-semibold text-white">
        ZooMir
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <NuxtLink to="/" class="text-slate-300 hover:text-white">
          Магазин
        </NuxtLink>
        <NuxtLink to="/cart" class="flex items-center gap-1 text-slate-300 hover:text-white">
          <Icon name="lucide:shopping-cart" class="size-5" />
          Корзина
          <span v-if="cartStore.itemCount" class="rounded bg-slate-600 px-1.5 text-sm">
            {{ cartStore.itemCount }}
          </span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
</script>
