<template>
  <article v-if="product" class="mx-auto max-w-4xl px-4 py-8" aria-labelledby="product-name">
    <nav aria-label="Хлебные крошки" class="mb-6">
      <ol class="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        <li>
          <NuxtLink to="/" class="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded">
            Магазин
          </NuxtLink>
        </li>
        <li aria-hidden="true">/</li>
        <li class="text-white" aria-current="page">{{ product.name }}</li>
      </ol>
    </nav>

    <div class="grid gap-8 lg:grid-cols-2">
      <div class="relative aspect-square overflow-hidden rounded-2xl bg-slate-800/80">
        <img
          v-if="product.image"
          :src="product.image"
          :alt="`Фото товара: ${product.name}`"
          width="600"
          height="600"
          class="h-full w-full object-cover"
          fetchpriority="high"
        />
        <div v-else class="flex h-full w-full items-center justify-center text-slate-500" aria-hidden="true">
          <Icon name="lucide:package" class="size-24" />
        </div>
        <span
          class="absolute left-4 top-4 rounded-full bg-slate-900/90 px-3 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm"
          aria-hidden="true"
        >
          {{ product.category }}
        </span>
      </div>

      <div class="flex flex-col">
        <h1 id="product-name" class="text-2xl font-bold text-white sm:text-3xl">
          {{ product.name }}
        </h1>
        <p class="mt-4 text-2xl font-bold text-emerald-400" aria-label="Цена">
          {{ formatPrice(product.price) }}
        </p>
        <p class="mt-6 text-slate-300 leading-relaxed">
          {{ product.description }}
        </p>
        <div class="mt-8">
          <FeatureAddToCart :product="product" />
        </div>
      </div>
    </div>

    <!-- Состав и страна производитель -->
    <section class="mt-12 grid gap-8 border-t border-slate-700/80 pt-10 sm:grid-cols-2">
      <div v-if="product.composition" class="rounded-xl border border-slate-700/80 bg-slate-800/50 p-6" aria-labelledby="composition-heading">
        <h2 id="composition-heading" class="flex items-center gap-2 text-lg font-semibold text-white">
          <Icon name="lucide:list-checks" class="size-5 text-emerald-500" aria-hidden="true" />
          Состав
        </h2>
        <p class="mt-3 text-slate-300 leading-relaxed">
          {{ product.composition }}
        </p>
      </div>
      <div v-if="product.country" class="rounded-xl border border-slate-700/80 bg-slate-800/50 p-6" aria-labelledby="country-heading">
        <h2 id="country-heading" class="flex items-center gap-2 text-lg font-semibold text-white">
          <Icon name="lucide:globe" class="size-5 text-emerald-500" aria-hidden="true" />
          Страна производитель
        </h2>
        <p class="mt-3 text-slate-300">
          {{ product.country }}
        </p>
      </div>
    </section>

    <!-- Отзывы -->
    <section v-if="product.reviews?.length" class="mt-12 border-t border-slate-700/80 pt-10" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" class="flex items-center gap-2 text-xl font-semibold text-white">
        <Icon name="lucide:message-circle" class="size-5 text-emerald-500" aria-hidden="true" />
        Отзывы покупателей
        <span class="text-slate-400 font-normal">({{ product.reviews.length }})</span>
      </h2>
      <ul class="mt-6 space-y-6" role="list" aria-label="Список отзывов">
        <li
          v-for="review in product.reviews"
          :key="review.id"
          class="rounded-xl border border-slate-700/80 bg-slate-800/50 p-5"
          role="listitem"
        >
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="font-medium text-white">{{ review.author }}</span>
            <span class="inline-flex items-center gap-1 rounded bg-slate-700/80 px-2 py-1 text-sm font-medium text-amber-400" aria-label="Оценка: {{ review.rating }} из 5">
              <Icon name="lucide:star" class="size-4 text-amber-400" aria-hidden="true" />
              {{ review.rating }} из 5
            </span>
          </div>
          <p class="mt-2 text-slate-300 leading-relaxed">
            {{ review.text }}
          </p>
          <time :datetime="review.date" class="mt-2 block text-sm text-slate-500">
            {{ formatReviewDate(review.date) }}
          </time>
        </li>
      </ul>
    </section>
  </article>

  <div v-else-if="pending" class="mx-auto max-w-4xl px-4 py-8" role="status" aria-live="polite">
    <div class="grid gap-8 lg:grid-cols-2">
      <SharedSkeleton height="400px" />
      <div class="space-y-4">
        <SharedSkeleton height="2.5rem" width="80%" />
        <SharedSkeleton height="2rem" width="120px" />
        <SharedSkeleton height="8rem" />
        <SharedSkeleton height="3rem" width="200px" />
      </div>
    </div>
  </div>

  <p v-else class="mx-auto max-w-4xl px-4 py-12 text-center text-slate-400" role="alert">
    Товар не найден. <NuxtLink to="/" class="text-emerald-400 underline underline-offset-4 hover:text-emerald-300">Вернуться в каталог</NuxtLink>.
  </p>
</template>

<script setup lang="ts">
import type { Product } from '~/entities/product/types'
import { formatPrice } from '~/shared/utils/formatPrice'

const route = useRoute()
const id = route.params.id as string

const { data: products, pending } = await useFetch<Product[]>('/api/products')

const product = computed(() =>
  products.value?.find((p) => p.id === id) ?? null
)

function formatReviewDate(dateStr: string): string {
  const d = new Date(dateStr)
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}

useSeoMeta({
  title: () => (product.value ? `${product.value.name} — ZooMir` : 'Товар — ZooMir'),
  description: () => product.value?.description ?? '',
})
</script>
