import { useContext } from 'react'
import { products   } from '../../../data/Products'

import uuid from 'react-uuid';
import star from '../../../assets/icons/star.svg'
import check from '../../../assets/icons/check.svg'
import { ProductsContext } from '../../../contexts/ProductsContext';


export function OrderProduct() {
  const { 
    quantity,
    isCartActive,
    currentSelectedFlavour, 
    handleSetQuantity,  
    handleSelectedFlavour, 
    handleFlavourAddedToCart,
  } = useContext(ProductsContext)

  
  return (
    <>
      <section className={`max-sm:container lg:container product py-16 ${isCartActive && 'blur-sm'}`}>
        {products.map(product => {
          if(product.flavour === currentSelectedFlavour) {
            return (
              <div className="flex flex-wrap items-start lg:flex-nowrap" key={uuid()}>
                <div className="gallery w-full flex gap-6 columns-3xl mt-2 ml-0 sm:ml-4 lg:grid lg:grid-cols-2 lg:ml-[-2vw] xl:ml-[-4vw] overflow-x-auto">
                  {product.images.map(image => (
                    <img key={image.url} className="w-full h-80 object-cover rounded" src={image.url} alt={image.altText} />
                    )
                  )}
                </div>

                <div className="content w-full sm:px-4 pt-5 lg:columns-3xl">
                  <div className="flex items-center justify-between font-sans">
                    <h1 className="text-2md leading-10 md:text-xl tracking-wider">{product.flavour}</h1>

                    <div className="reviews flex items-center gap-2">
                      <div className="flex items-center">
                        <img src={star} alt="" className="w-2 h-2 sm:w-4 sm:h-4"/>
                        <img src={star} alt="" className="w-2 h-2 sm:w-4 sm:h-4"/>
                        <img src={star} alt="" className="w-2 h-2 sm:w-4 sm:h-4"/>
                        <img src={star} alt="" className="w-2 h-2 sm:w-4 sm:h-4"/>
                        <img src={star} alt="" className="w-2 h-2 sm:w-4 sm:h-4"/>
                      </div>
                      <span className="tracking-wider text-yellow text-2xs leading-4 sm:text-sm sm:leading-6">{product.productTotalReview} avaliações</span>
                    </div>
                  </div>

                  <p className="description font-light pb-5 text-2xs leading-4 sm:text-sm sm:leading-6">
                    {product.description}
                  </p>

                  <div className="choose-flavour flex flex-col relative">
                    <label 
                      htmlFor="flavour" 
                      className="text-xs text-gray-200 tracking-wider font-regular pb-2 pl-2">Sabor</label>
                   
                    <select 
                      name="flavour" 
                      id="flavour" 
                      className="px-4 py-3 border border-solid font-body
                      border-gray-200 rounded cursor-pointer 
                        text-xs leading-5 md:text-sm md:p-4" 
                      value={currentSelectedFlavour} 
                      onChange={(event) => handleSelectedFlavour(event)}>

                      <option value="Margherita" className="text-xs leading-5 md:text-sm">Margherita</option>
                      <option value="Pepperoni" className="text-xs leading-5 md:text-sm">Pepperoni</option>
                      <option value="Portuguesa" className="text-xs leading-5 md:text-sm">Portuguesa</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between pt-6 px-4 pb-2">
                    <div className="quantity flex items-center gap-3">
                      <button 
                        type="button" 
                        value="removeItem" 
                        aria-label="Remover item" 
                        onClick={(event) => handleSetQuantity(event, quantity)}
                        className="flex items-center justify-center text-white w-6 h-6 text-2md md:w-8 md:h-8 bg-gray-300 rounded-full">
                          -
                      </button>
                      
                      <span className="text-sm">{quantity}</span>

                      <button 
                        type="button" 
                        value="addItem" 
                        aria-label="Adicionar item" 
                        onClick={(event) => handleSetQuantity(event, quantity)}
                        className="flex items-center justify-center text-2md w-6 h-6 md:text-lg md:w-8 md:h-8 bg-green rounded-full text-white">
                        +
                      </button>
                    </div>

                    <p className="subtotal flex items-center gap-2 tracking-wider text-2sm md:text-md leading-6">
                      Subtotal:
                      <span className="font-bold">R${(product.price * quantity).toFixed(2)}</span>
                    </p>
                  </div>

                  <button 
                    type="button" 
                    className="flex justify-center 
                      w-full py-3 font-sans 
                      text-sm tracking-widest 
                      bg-yellow rounded-3xl" 
                      onClick={() => handleFlavourAddedToCart()}>
                    
                    Adicionar ao carrinho
                  </button>

                  <ul className="quality pt-5">
                    <li className="flex items-center gap-2 text-xs font-light leading-6"><img src={check} alt="" width="24" height="24" />Queijos importados</li>
                    <li className="flex items-center gap-2 text-xs font-light leading-6"><img src={check} alt="" width="24" height="24" />Catupiry de primeira qualidade</li>
                    <li className="flex items-center gap-2 text-xs font-light leading-6"><img src={check} alt="" width="24" height="24" />Bastante recheio</li>
                    <li className="flex items-center gap-2 text-xs font-light leading-6"><img src={check} alt="" width="24" height="24" />Forno à lenha</li>
                  </ul>
                </div>
              </div>  
            )
          }
        })}

      </section>
    </>
  )
}