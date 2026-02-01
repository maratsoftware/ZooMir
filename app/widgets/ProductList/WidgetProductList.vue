<template>
  <ul
    class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    role="list"
    aria-label="Список товаров"
  >
    <li
      v-for="product in products"
      :key="product.id"
      role="listitem"
    >
      <article
        class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-800/60 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-950/50 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
        :aria-labelledby="`product-title-${product.id}`"
      >
        <div class="relative aspect-square w-full overflow-hidden bg-slate-700/50">
          <img
            v-if="product.image"
            :src="product.image"
            :alt="`Фото: ${product.name}`"
            width="500"
            height="500"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center text-slate-500"
            aria-hidden="true"
          >
            <Icon name="lucide:package" class="size-16" />
          </div>
          <span
            class="absolute left-3 top-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
            aria-hidden="true"
          >
            {{ product.category }}
          </span>
        </div>
        <div class="flex flex-1 flex-col p-5">
          <h2 :id="`product-title-${product.id}`" class="text-lg font-semibold text-white">
            <NuxtLink
              :to="`/product/${product.id}`"
              class="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset rounded"
              :aria-label="`Перейти к товару: ${product.name}`"
            >
              {{ product.name }}
            </NuxtLink>
          </h2>
          <p class="mt-2 line-clamp-2 text-sm text-slate-400">
            {{ product.description }}
          </p>
          <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p class="text-xl font-bold text-emerald-400" aria-label="Цена">
              {{ formatPrice(product.price) }}
            </p>
            <SharedButton
              variant="secondary"
              :aria-label="`Перейти к товару: ${product.name}`"
              @click="goToProduct(product.id)"
            >
              Подробнее
            </SharedButton>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Product } from '~/entities/product/types'
import { formatPrice } from '~/shared/utils/formatPrice'

defineProps<{
  products: Product[]
}>()

const router = useRouter()

function goToProduct(id: string) {
  router.push(`/product/${id}`)
}
</script>
