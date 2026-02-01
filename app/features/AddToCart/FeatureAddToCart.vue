<template>
  <template v-if="isInCart">
    <NuxtLink
      to="/cart"
      class="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 font-medium text-white transition-all duration-200 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.98]"
      :aria-label="`Перейти в корзину. Товар «${product.name}» уже в корзине`"
    >
      Перейти в корзину
    </NuxtLink>
  </template>
  <SharedButton
    v-else
    variant="primary"
    :disabled="disabled"
    :aria-label="`Добавить в корзину: ${product.name}`"
    @click="add"
  >
    Добавить в корзину
  </SharedButton>
</template>

<script setup lang="ts">
import type { Product } from '~/entities/product/types'

const props = defineProps<{
  product: Product
  quantity?: number
  disabled?: boolean
}>()

const cartStore = useCartStore()

const isInCart = computed(() =>
  cartStore.items.some((item) => item.productId === props.product.id)
)

function add() {
  cartStore.addToCart(
    { id: props.product.id, name: props.product.name, price: props.product.price },
    props.quantity ?? 1
  )
}
</script>
