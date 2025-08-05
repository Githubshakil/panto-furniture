import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FooterSection = () => {
  return (
    <footer className='bg-secondary-bgColor text-black dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5'>
      <div className='section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8'>
          {/* logo and details */}
          <div className='md:col-span-2 '>
            <h2><Link to={"/"} className='text-2xl font-bold mb-4 sm:mb-6 font-poppins'>Panto</Link></h2>
            <p className='font-poppins md:mr-12 text-[15px] text-[#1e1e1e] sm:w-1/2 mt-6 dark:text-white '>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
           {/* services div */}
            <div>
              <h2 className='text-xl font-semibold font-poppins mb-4 text-primary text-[17px]'>Services</h2>
              <ul className=' space-y-2 font-poppins text-[15px] text-[#1e1e1e] dark:text-white'>
                <li>
                  <Link to={"/"} className='hover:text-primary'>Email Marketing</Link>
                  </li>
                <li>
                  <Link to={"/"} className='hover:text-primary'>Campaigns</Link>
                  </li>
                <li>
                  <Link to={"/"} className='hover:text-primary'>Branding</Link>
                  </li>
              </ul>
            </div>
           {/* Furniture div */}
            <div>
              <h2 className='text-xl font-semibold font-poppins mb-4 text-primary text-[17px]'>Furniture</h2>
              <ul className=' space-y-2 font-poppins text-[15px] text-[#1e1e1e] dark:text-white'>
                <li>
                  <Link to={"/"} className='hover:text-primary'>Beds</Link>
                  </li>
                <li>
                  <Link to={"/"} className='hover:text-primary'>Chair</Link>
                  </li>
                <li>
                  <Link to={"/shop"} className='hover:text-primary'>All</Link>
                  </li>
              </ul>
            </div>
           {/* Follow Us div */}
            <div>
              <h2 className='text-xl font-semibold font-poppins mb-4 text-primary text-[17px]'>Follow Us </h2>
              <ul className=' space-y-2 font-poppins text-[15px] text-[#1e1e1e] dark:text-white'>
                <li >
                  <Link to={"/"} className='hover:text-primary flex items-center space-x-2 duration-300'><FaFacebook/> <span>Facebook</span></Link>
                  </li>
                <li>
                  <Link to={"/"} className='hover:text-primary flex items-center space-x-2 duration-300'><FaTwitter/> <span>Twitter</span></Link>
                  </li>
                <li>
                  <Link to={"/"} className='hover:text-primary flex items-center space-x-2 duration-300'><FaInstagram/><span>Instagram</span></Link>
                  </li>
              </ul>
            </div>
           
      </div>

      {/* copyright */}
      <div className='mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4'>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className='flex items-center gap-4'>
          <Link to={'/'}>Terms & Conditions</Link>
          <Link to={'/'}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection