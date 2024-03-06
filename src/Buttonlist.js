import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export const Buttonlist = ()=> {
  const list = ['Bitcoin','Movies','Sports','Music','Arts','Reels']
  
  return (
    <div className='flex'>
      {
        list.map((e)=>(
          
            <Button key={e.indexOf(list)} name={e} />
          
        ))
      }
    </div>
  )
}
