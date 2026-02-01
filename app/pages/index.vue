<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold text-white">Магазин</h1>

    <div v-if="pending" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <SharedSkeleton v-for="i in 9" :key="i" height="120px" />
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
  </div>
</template>

<script setup lang="ts">
const ITEMS_PER_PAGE = 6

const { data: products, pending } = await useFetch<Array<{ id: string; name: string; description: string; category: string; price: number }>>('/api/products')

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
  description: 'Корм и лакомства для кошек и собак',
})
</script>
