import { useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import uuid from 'react-uuid';
import pizza from '../../assets/images/pizza.png'
import closeMenu from '../../assets/icons/close.svg';


export function Cart() {
  const { 
    isCartActive,
    flavourAddedToCart,
    quantityChanged,
    setQuantityChanged,
    
    handleUpdateQuantity,
    handleSetCartDeactive,
    removeProductFromCart,
  } = useContext(ProductsContext)

  
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let total = 0;

    flavourAddedToCart.map((product) => {
      if (product.flavour !== '') {
        total += product.price * product.quantity;
      }
    });

    setTotal(total);

  }, [flavourAddedToCart, quantityChanged, handleUpdateQuantity]); 



  function handleSetQuantity (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, flavour: string, quantity: number) {
    if (event.currentTarget.value === 'addItem') {
      handleUpdateQuantity(flavour, quantity + 1)

    } else {
      if (quantity > 1) {
        handleUpdateQuantity(flavour, quantity - 1)
      }
    }

    setQuantityChanged(true)
  }

  function handleRemoveProductFromCart (productToRemove: string) {
    removeProductFromCart(productToRemove)
  }



  return (
    <>
      <section className={`fixed inset-0 bg-black/40 z-50 h-full ${isCartActive ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`
          cart flex flex-col 
          fixed inset-y-0 right-0
          bg-white w-[24.5rem] 
          pb-8 box-shadow-l-menu 
          transition-transform delay-75 ease-in 
          ${isCartActive ? 'translate-x-0' : 'translate-x-full'}`
          }>

          <div className="
            header fixed py-4
            border-b border-b-solid
            inset-x-0 bg-white 
            border-gray-300 
            mb-12">
            <h1 className="font-sans text-2md text-green tracking-wider text-center">Carrinho</h1>

            <button 
              type="button" 
              onClick={handleSetCartDeactive}
              aria-label="Fechar o carrinho" 
              className="absolute top-[50%] translate-y-[-50%] right-4">
                
              <img src={closeMenu} alt="" />
            </button>
          </div>

          <ul className="orders pt-20 px-4 overflow-y-auto">
            { flavourAddedToCart.map(product => {
              if (product.flavour != '') {
                return (
                  <li className="flex justify-between items-end relative mb-10" key={uuid()}>
                    <div className="flex items-center">
  
                      <div className="mr-4 border border-gray-300 border-solid rounded-full relative">
                        <img src={pizza} alt="Imagem ilustrativa do sabor da pizza escolhido" className="w-19 h-19 p-1" />
                        
                        <span 
                          className="current-quantity 
                            absolute top-[-.5rem] left-0 
                            flex items-center justify-center 
                            w-5 h-5 text-xs text-white 
                            bg-red rounded-full font-detail font-bold">
                              {product.quantity}
                        </span>
                      </div>
  
                      <div>
                        <h2 className="font-sans text-base leading-none tracking-wider">{product.flavour}</h2>
                        <p className="text-sm font-detail font-light text-gray-900 py-2 leading-none">Grande - 8 fatias</p>
                        <p className="text-sm font-detail font-light text-gray-900 tracking-wide">R${product.price.toFixed(2)}</p>
                      </div>
                    </div>
  
                    <div className="quantity flex items-center gap-2">
                        <button 
                          type="button" 
                          value="removeItem" 
                          aria-label="Remover item" 
                          onClick={(event) => handleSetQuantity(event, product.flavour, product.quantity)}
                          className="flex items-center justify-center text-white text-md w-6 h-6 bg-gray-300 rounded-full">
                            -
                        </button>
                        
                        <span className="text-sm"> {product.quantity} </span>
  
                        <button 
                          type="button" 
                          value="addItem" 
                          aria-label="Adicionar item"
                          onClick={(event) => handleSetQuantity(event, product.flavour, product.quantity)}
                          className="flex items-center justify-center text-md w-6 h-6 bg-green rounded-full text-white">
                          +
                        </button>
                      </div>
  
                    <button 
                      type="button" 
                      aria-label="Fechar o carrinho" 
                      className="absolute top-0 right-0 path"
                      onClick={() => handleRemoveProductFromCart(product.flavour)}>
                      <svg id="close_black_24dp_1_" data-name="close_black_24dp (1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="Caminho_6567" data-name="Caminho 6567" d="M0,0H16V16H0Z" fill="none"/>
                        <path id="Caminho_6568" data-name="Caminho 6568" d="M14,5.609a.664.664,0,0,0-.94,0L9.8,8.863,6.543,5.6a.665.665,0,0,0-.94.94L8.863,9.8,5.6,13.063a.665.665,0,0,0,.94.94l3.26-3.26L13.063,14a.665.665,0,0,0,.94-.94L10.743,9.8,14,6.543A.668.668,0,0,0,14,5.609Z" transform="translate(-1.802 -1.802)" fill="#E2E2E2"/>
                      </svg>
                    </button>
                  </li>
                )
              }
              
            }) }
            
          </ul>

          <ul className="resume border-t border-t-solid border-gray-300 mt-auto px-4 py-5">
            <li className="flex justify-between">
              <p className="text-sm leading-8">Produtos</p>
              <span className="text-sm leading-8 tracking-wide">R$ {total.toFixed(2)}</span>
            </li>
            
            <li className="flex justify-between">
              <p className="text-sm leading-8">Frete</p>
              <span className="text-sm leading-8 tracking-wide">Grátis</span>
            </li>
            
            <li className="flex justify-between font-bold">
              <p className="text-sm leading-8">Total</p>
              <span className="text-sm leading-8 tracking-wide">R$ {total.toFixed(2)}</span>
            </li>
          </ul>

          <div className="pl-4 pr-2">
            <button 
              type="button" 
              onClick={handleSetCartDeactive}
              className="flex w-full py-3 
                justify-center font-sans 
                text-sm tracking-widest 
                bg-green text-white 
                rounded-3xl">
                  Finalizar Pedido

            </button>
          </div>

        </div>
        
      </section>
    </>
  )
}