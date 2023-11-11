import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Product } from "./components/Product/Product";
import { ProductsContextProvider } from "./contexts/ProductsContext";

export function App() {

  return (
    <>
      <ProductsContextProvider>
        <Header />
        <Product />
        <Cart />
      </ProductsContextProvider> 
    </>
  )
}

