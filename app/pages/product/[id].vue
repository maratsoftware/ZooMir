<template>
  <div v-if="pending" class="space-y-4">
    <SharedSkeleton height="2rem" width="60%" />
    <SharedSkeleton height="4rem" />
    <SharedSkeleton height="2rem" width="120px" />
  </div>

  <div v-else-if="product" class="max-w-2xl">
    <NuxtLink to="/" class="mb-4 inline-block text-slate-400 hover:text-white">
      ← Назад в каталог
    </NuxtLink>
    <h1 class="text-2xl font-bold text-white">{{ product.name }}</h1>
    <p class="mt-2 text-slate-400">{{ product.category }}</p>
    <p class="mt-4 text-slate-300">{{ product.description }}</p>
    <p class="mt-4 text-xl font-semibold text-white">
      {{ formatPrice(product.price) }}
    </p>
    <div class="mt-6">
      <FeatureAddToCart :product="product" />
    </div>
  </div>

  <div v-else class="text-slate-400">
    Товар не найден.
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~~/entities/product/types'
import { formatPrice } from '~~/shared/utils/formatPrice'

const route = useRoute()
const id = route.params.id as string

const { data: products, pending } = await useFetch<Product[]>('/api/products')

const product = computed(() =>
  products.value?.find((p) => p.id === id) ?? null
)

useSeoMeta({
  title: () => (product.value ? `${product.value.name} — ZooMir` : 'Товар — ZooMir'),
  description: () => product.value?.description ?? '',
})
</script>
