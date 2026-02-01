export interface ProductReview {
  id: string
  author: string
  rating: number
  text: string
  date: string
}

export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  image?: string
  composition?: string
  country?: string
  reviews?: ProductReview[]
}
