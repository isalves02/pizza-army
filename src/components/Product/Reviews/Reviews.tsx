import { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'

import star from '../../../assets/icons/star.svg'
import verified from '../../../assets/icons/verified.svg'


export function Reviews() {
  const { isCartActive } = useContext(ProductsContext)

  return (
    <>
      <section className={`reviews pt-2 pb-6 ${isCartActive && 'blur-sm'}`}>
        <div className="container">
          <ul className="review-list flex items-center gap-6 overflow-x-auto">
            <li className="flex flex-col w-full min-w-[15rem] items-center justify-center text-center py-3">
              <div className="flex pb-3">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              
              <p className="text-2xs leading-4 font-light md:text-sm md:leading-6">
                Pizza incrível. Queijo de qualidade, 
                bem recheada e crocante. Vou pedir mais 
                e indicar pra todo mundo, com certeza!
              </p>

              <div className="author flex gap-1 pt-3">
                <img src={verified} alt="" />
                <p className="text-2xs font-bold md:text-sm leading-6">Pedro B. - consumidor verificado</p>
              </div>
            </li>
          
            <li className="flex flex-col w-full min-w-[15rem] items-center justify-center text-center py-3">
              <div className="flex pb-3">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              
              <p className="text-2xs leading-4 font-light md:text-sm md:leading-6">
                Pizza incrível. Queijo de qualidade, 
                bem recheada e crocante. Vou pedir mais 
                e indicar pra todo mundo, com certeza!
              </p>

              <div className="author flex gap-1 pt-3">
                <img src={verified} alt="" />
                <p className="text-2xs font-bold md:text-sm leading-6">Pedro B. - consumidor verificado</p>
              </div>
            </li>

            <li className="flex flex-col w-full min-w-[15rem] items-center justify-center text-center py-3">
              <div className="flex pb-3">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              
              <p className="text-2xs leading-4 font-light md:text-sm md:leading-6">
                Pizza incrível. Queijo de qualidade, 
                bem recheada e crocante. Vou pedir mais 
                e indicar pra todo mundo, com certeza!
              </p>

              <div className="author flex gap-1 pt-3">
                <img src={verified} alt="" />
                <p className="text-2xs font-bold md:text-sm leading-6">Pedro B. - consumidor verificado</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}