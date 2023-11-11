import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

import logo   from '../../assets/icons/logo.svg'
import cart   from '../../assets/icons/cart.svg'
import login  from '../../assets/icons/login.svg'
import expand from '../../assets/icons/arrow-down.svg'

export function Header () {
  const { isCartActive } = useContext(ProductsContext)
  
  return (
    <>
      <header className={`fixed inset-x-0 bg-white z-40 ${isCartActive && 'blur-sm'}`}>
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <button type="button" className="menuMobile ml-3 lg:hidden" aria-label="Abrir menu">
              <i className="w-[18px] h-[2px] bg-gray-900 block"></i>
              <i className="w-[18px] h-[2px] bg-gray-900 block my-[3px]"></i>
              <i className="w-[18px] h-[2px] bg-gray-900 block"></i>
            </button>

            <span className="text-sm font-medium text-gray-900 flex items-center pl-2 gap-x-1 max-lg:hidden">
                Comprar
                <img src={expand} alt="Expandir" />
            </span>

            <img src={logo} alt="Pizza Army" width="104" height="31" />

            <div className="flex items-center gap-x-10 h-6">
                <span className="text-sm text-gray-900 font-medium tracking-wide max-lg:hidden">A segunda pizza com <span className="font-detail font-medium text-green">20% OFF</span></span>

                <div className="flex items-center gap-x-6">
                  <button type="button" disabled aria-label="Fazer login" className="max-lg:hidden">
                      <img src={login} alt="" />
                  </button>

                  <button type="button" aria-label="Visualizar carrinho" disabled>
                      <img src={cart} alt="" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}