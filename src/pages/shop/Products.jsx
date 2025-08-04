import React from 'react'
import { products } from '../../utils/products'

const Products = ({headline}) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"]
  return (
    <div>
      <div className='section-container'>
        <h2 className='font-poppins text-4xl font-bold text-center my-8'>{headline}</h2>

        {/* category tabs */}
        <div className='bg-[#eeeeee] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
          <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
              {
                categories.map((category,index)=>(
                  <button key={index} className={`py-1 sm:px-5  px-8 rounded-full hover:bg-primary text-[#1e1e1e] font-semibold text-[18px] hover:text-white transition-colors font-poppins cursor-pointer`}>{category}</button>
                ))
              }
          </div>
        </div>

        {/* product grid */}
        <div>
          {
            products.map((product,index)=>(
                <div>{product.name}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products