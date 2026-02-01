<template>
  <SharedButton
    variant="primary"
    :disabled="disabled"
    @click="add"
  >
    Добавить в корзину
  </SharedButton>
</template>

<script setup lang="ts">
import type { Product } from '~~/entities/product/types'

const props = defineProps<{
  product: Product
  quantity?: number
  disabled?: boolean
}>()

const cartStore = useCartStore()

function add() {
  cartStore.addToCart(
    { id: props.product.id, name: props.product.name, price: props.product.price },
    props.quantity ?? 1
  )
}
</script>
