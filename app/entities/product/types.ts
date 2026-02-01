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
  /** Состав продукта */
  composition?: string
  /** Страна производитель */
  country?: string
  reviews?: ProductReview[]
}
