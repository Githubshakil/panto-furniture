import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'
import Expriences from './Expriences'
import Materials from './Materials'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <WhyChoose/>
    <Products headline={"Best Selling Products"}/>
    <Expriences/>
    <Materials/>
    </>
  )
}

export default HomePage