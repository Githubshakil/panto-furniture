import React from 'react'
import btnIcon from '../assets/images/button-icon.png'
const ButtonComponent = ({text}) => {
  return (
    <button className="text-sm text-primary flex items-center gap-[7px] font-poppins cursor-pointer">
      {text}
      <img src={btnIcon} alt="" />
    </button>
  )
}

export default ButtonComponent