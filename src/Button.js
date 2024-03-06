import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Button = ({name,SetCcategory})=> {

  
  
  return (
    <div className=' text-black'>
      <button className='px-4 py-2 ml-4 mt-4 rounded-lg bg-gray-200 hover:text-white'>{name}</button>
    </div>
  )
}
