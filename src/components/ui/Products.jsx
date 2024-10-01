import React, { useState } from 'react'
import Headline from '../shared/Headline'
import { products } from '../../utils/products'
import ProductsCart from './ProductsCart'

const Products = ({headline}) => {
    const categories =["Chair","Sofa","Lamp","Beds"]
    const [categoryfilter,setCategoryfilter] = useState("Chair")
    const filltering = products.filter(pr => pr.category === categoryfilter )
    
    
  return (
    <div>
      <div className='section-container'>
        <h1 className='font-bannerfont text-3xl font-bold text-center my-8'>{headline}</h1>
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2 py-5 mb-16'> 
           <div className='flex flex-col sm:flex-row items-center md:justify-between sm:justify-center gap-4 duration-500 transition-all'>
            {categories.map((item,idx)=>(
                <button onClick={()=>setCategoryfilter(item)} key={idx} className={`py-1.5 sm:px-5 px-8 hover:bg-primary hover:text-white transition-colors rounded-full ${categoryfilter===item ? 'bg-white text-primary' : 'text-secondary'}`}>{item}</button>
            ))}
           </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'> 
            {filltering.map((item,idx)=><ProductsCart products={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Products
