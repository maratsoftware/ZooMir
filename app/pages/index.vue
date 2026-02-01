<template>
  <div>
    <section
      class="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 px-4 py-16 sm:py-24"
      aria-labelledby="hero-heading"
    >
      <div class="mx-auto max-w-6xl">
        <h1 id="hero-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Магазин кормов для питомцев
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-400">
          Качественные корма и лакомства для кошек и собак. Доставка по всей России. Консультация ветеринара при первом заказе.
        </p>
        <div class="mt-8 flex flex-wrap gap-4" role="group" aria-label="Преимущества">
          <span class="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300">
            <Icon name="lucide:truck" class="size-4 text-emerald-500" aria-hidden="true" />
            Быстрая доставка
          </span>
          <span class="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300">
            <Icon name="lucide:shield-check" class="size-4 text-emerald-500" aria-hidden="true" />
            Сертифицировано
          </span>
          <span class="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300">
            <Icon name="lucide:heart" class="size-4 text-emerald-500" aria-hidden="true" />
            Забота о питомцах
          </span>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-10" aria-labelledby="catalog-heading">
      <h2 id="catalog-heading" class="sr-only">
        Каталог товаров
      </h2>

      <div v-if="pending" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="status" aria-live="polite">
        <SharedSkeleton v-for="i in 9" :key="i" height="320px" />
      </div>

      <template v-else>
        <WidgetProductList :products="paginatedProducts" />
        <FeaturePagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @prev="currentPage = Math.max(1, currentPage - 1)"
          @next="currentPage = Math.min(totalPages, currentPage + 1)"
        />
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
const ITEMS_PER_PAGE = 6

const { data: products, pending } = await useFetch<Array<{ id: string; name: string; description: string; category: string; price: number; image?: string }>>('/api/products')

const currentPage = ref(1)

const totalPages = computed(() =>
  products.value ? Math.ceil(products.value.length / ITEMS_PER_PAGE) : 0
)

const paginatedProducts = computed(() => {
  if (!products.value) return []
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  return products.value.slice(start, start + ITEMS_PER_PAGE)
})

useSeoMeta({
  title: 'Магазин — ZooMir',
  description: 'Корм и лакомства для кошек и собак. Доставка по России.',
})
</script>
