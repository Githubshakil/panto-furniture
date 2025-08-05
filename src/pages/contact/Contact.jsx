import React from 'react'
import contactBgImg from '../../assets/images/contact-background.jpg'
import Materials from '../home/Materials'
import Testimonial from '../home/Testimonial'
const Contact = () => {
  return (
     <section>
        {/* banner */}
        <div className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white' style={{backgroundImage:`url(${contactBgImg})`}}>
          <div>
            <h1 className='text-5xl font-poppins font-bold underline-offset-4'>Contact Page</h1>
          </div>
        </div>
        <Materials/>
        <Testimonial/>
    </section>
  )
}

export default Contact