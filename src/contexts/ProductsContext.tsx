import { useState, createContext } from 'react'
import { ProductAddedToCartProps, ProductChildrenContext, ProductsContextType } from '../interfaces/ProductProps'
import { products } from '../data/Products'



export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({children}:ProductChildrenContext) {
  const [quantity, setQuantity] = useState(1)
  const [quantityChanged, setQuantityChanged] = useState(false)

  const [isCartActive, setIsCartActive] = useState(false)
  const [currentSelectedFlavour, setCurrentSelectedFlavour] = useState('Margherita')

  const [flavourAddedToCart, setFlavourAddedToCart] = 
    useState<ProductAddedToCartProps[]>([{
      flavour: '',
      price: 0,
      quantity: 1  
		}]
  )

  function handleFlavourAddedToCart() {
    const isFlavourAlreadyAdded = flavourAddedToCart.some(product => product.flavour === currentSelectedFlavour);

    if (!isFlavourAlreadyAdded) {
      products.map(product => {
        if(product.flavour === currentSelectedFlavour) {
          setFlavourAddedToCart((state) => [
            ...state, 
            { price: product.price,
              flavour: product.flavour, 
              quantity: quantity
            },
          ])
        } 
      })
    } else {
      flavourAddedToCart.filter(product => {
        handleUpdateQuantity(product.flavour, product.quantity + quantity)
      })
    }

    handleSetCartActive()
  }

  function handleUpdateQuantity (flavour: string, quantity: number) {
    flavourAddedToCart.map(product => {
      if(product.flavour === flavour) {
        setFlavourAddedToCart((state) => 
          state.map((item) =>
          item.flavour === product.flavour ? { ...item, quantity: quantity } : item
        ))
      }
    })
  }

  function handleSetQuantity(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, quantity: number) {
    if (event.currentTarget.value === 'addItem') {
      setQuantity((state) => state + 1)
      
    } else {
      if (quantity > 1) {
        setQuantity((state) => state - 1)
      }
    }

    setQuantityChanged(true)
  }

  function handleSelectedFlavour (event: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentSelectedFlavour(event.target.value)
  }
  
  function removeProductFromCart (productToDelete: string) {
		const productWithoutDeletedOne = flavourAddedToCart.filter(product => {
			return product.flavour != productToDelete
		})
			
		setFlavourAddedToCart(productWithoutDeletedOne);
	}

  function handleSetCartActive() {
    setIsCartActive(true)
  }

  function handleSetCartDeactive() {
    setQuantity(1)
    setIsCartActive(false)
  }


  return (
    <ProductsContext.Provider 
      value={{
        quantity,
        isCartActive,
        flavourAddedToCart,
        quantityChanged,

        currentSelectedFlavour,
        handleSetCartActive,
        handleSetCartDeactive,
        handleFlavourAddedToCart,
        removeProductFromCart,
        
        setQuantityChanged,
        handleUpdateQuantity,
        handleSelectedFlavour: (event: React.ChangeEvent<HTMLSelectElement>) => handleSelectedFlavour(event),
        handleSetQuantity: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSetQuantity(event, quantity)
      }}>

      {children}
    </ProductsContext.Provider>
  )
}
