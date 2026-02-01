<template>
  <div>
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
