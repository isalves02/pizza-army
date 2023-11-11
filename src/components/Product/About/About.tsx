import { useContext } from 'react'
import pizza from '../../../assets/images/pizza.png'
import iconPizza from '../../../assets/icons/pizza.svg'
import { ProductsContext } from '../../../contexts/ProductsContext'


export function AboutProduct() {
  const { isCartActive } = useContext(ProductsContext)

  return (
    <>  
      <section className={`about py-6 lg:py-[11.6rem] ${isCartActive && 'blur-sm'}`}>
        <div className="container flex items-center justify-center flex-col lg:flex-row">
          <img src={pizza} alt="" className="relative z-10 lg:absolute" />

          <div className="flex items-center flex-col pt-3 text-center md:pt-6 lg:flex-row lg:text-start lg:justify-between">
            <div className="content lg:w-4/12">
              <h1 className="font-sans text-2xl leading-none tracking-wider md:text-4xl xl:text-5xl">Descubra o sabor <br className="max-lg:hidden" />da tradição</h1>
              <p className="text-xs leading-4 lg:w-9/12 py-2 lg:text-base lg:leading-6">
                Com receitas transmitidas à gerações, 
                ingredientes selecionados e forno a lenha, 
                garantimos uma experiência gastronômica memorável.
              </p>
            </div>

            <ul className="quality max-lg:w-full">
              <li className="relative flex items-center gap-2 text-sm font-bold tracking-wider leading-6 py-4 md:text-base lg:pl-80 border-b-solid border-b border-b-gray-300"><img src={iconPizza} alt="" width="24" height="24" />Queijos importados</li>
              <li className="relative flex items-center gap-2 text-sm font-bold tracking-wider leading-6 py-4 md:text-base lg:pl-80 border-b-solid border-b border-b-gray-300"><img src={iconPizza} alt="" width="24" height="24" />Catupiry de primeira qualidade</li>
              <li className="relative flex items-center gap-2 text-sm font-bold tracking-wider leading-6 py-4 md:text-base lg:pl-80 border-b-solid border-b border-b-gray-300"><img src={iconPizza} alt="" width="24" height="24" />Bastante recheio</li>
              <li className="relative flex items-center gap-2 text-sm font-bold tracking-wider leading-6 py-4 md:text-base lg:pl-80 border-b-solid border-b border-b-gray-300"><img src={iconPizza} alt="" width="24" height="24" />Forno à lenha</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}