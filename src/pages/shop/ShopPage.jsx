import React from 'react'
import bannerImg from '../../assets/images/banner.png'
import Products from './Products'

const ShopPage = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1 className='font-poppins text-4xl font-bold'>Shop Our Products</h1>

      </div>
      <Products headline={"What's your Choice"}/>
    </section>
  )
}

export default ShopPage