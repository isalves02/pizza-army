import { ReactNode } from "react"

export interface ProductProps {
  flavour: string,
  images: ProductImageProps[],
  price: number,
  description: string,
  quantity?: number,
  productTotalReview: number,
}

export interface ProductImageProps {
  url: string,
  altText?: string
}

export interface ProductAddedToCartProps {
  price: number,
  flavour: string,
  quantity: number,
}

export interface ProductsContextType {
  quantity: number,
  isCartActive: boolean,
  quantityChanged: boolean,
  
  currentSelectedFlavour: string,
  flavourAddedToCart: ProductAddedToCartProps[]
  
  handleSetCartActive: () => void,
  handleSetCartDeactive: () => void,
  handleFlavourAddedToCart: () => void,
  setQuantityChanged: (state: boolean) => void,
  removeProductFromCart: (productToDelete: string) => void,
  handleUpdateQuantity: (flavour: string, quantity: number) => void,
  handleSelectedFlavour: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  handleSetQuantity: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, quantity: number) => void
}

export interface ProductChildrenContext {
  children: ReactNode
}