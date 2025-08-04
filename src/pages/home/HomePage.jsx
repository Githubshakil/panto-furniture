import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <WhyChoose/>
    <Products headline={"Best Selling Products"}/>
    </>
  )
}

export default HomePage