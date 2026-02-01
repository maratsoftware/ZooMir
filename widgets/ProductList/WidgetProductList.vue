<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <NuxtLink
      v-for="product in products"
      :key="product.id"
      :to="`/product/${product.id}`"
      class="rounded-xl border border-slate-700 bg-slate-800 p-4 transition-colors hover:border-slate-600 hover:bg-slate-700/80"
    >
      <h3 class="font-medium text-white">{{ product.name }}</h3>
      <p class="mt-1 text-sm text-slate-400">{{ product.category }}</p>
      <p class="mt-2 text-lg font-semibold text-white">
        {{ formatPrice(product.price) }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~~/entities/product/types'
import { formatPrice } from '~~/shared/utils/formatPrice'

defineProps<{
  products: Product[]
}>()
</script>
