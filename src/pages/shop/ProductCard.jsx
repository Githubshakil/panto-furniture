import React from 'react'
import { getImgUrl } from '../../utils/getImageUrl'
import Rating from '../../components/Rating'
import { FaPlus } from 'react-icons/fa'

const ProductCard = ({product}) => {
  return (
    <div>
        <div className='bg-[#fafafa]'>
                <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
        </div>
        <div className='p-6 bg-white dark:bg-black shadow-sm'>
            <h4 className='font-poppins text-base mb-1'>{product.category}</h4>
            <h3 className='font-poppins font-semibold text-xl mb-2'>{product.name}</h3>
            <Rating rating={product.rating}/>
            <div className='mt-5 flex justify-between items-center'>
                <p className='font-poppins text-secondary dark:text-white font-bold text-lg'><sup>$</sup><span>{product.price}</span></p>
                <button className='bg-secondary text-white p-2 rounded-full hover:bg-black/50 transition duration-300 cursor-pointer'><FaPlus /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard