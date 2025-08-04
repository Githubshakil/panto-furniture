import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'
import Expriences from './Expriences'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <WhyChoose/>
    <Products headline={"Best Selling Products"}/>
    <Expriences/>
    </>
  )
}

export default HomePage