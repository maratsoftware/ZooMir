import { defineStore } from 'pinia'
import type { CartItem } from '../../cart/types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalPrice(state): number {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    itemCount(state): number {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
  },

  actions: {
    addToCart(product: { id: string; name: string; price: number }, quantity = 1) {
      const existing = this.items.find((i) => i.productId === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
        })
      }
    },

    removeFromCart(productId: string) {
      this.items = this.items.filter((i) => i.productId !== productId)
    },

    updateQuantity(productId: string, quantity: number) {
      const item = this.items.find((i) => i.productId === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }
    },

    clearCart() {
      this.items = []
    },
  },

  persist: {
    key: 'zoomir-cart',
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  },
})
