import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './Utils/ChatSlice'
import { generateRandomName, makeRandomMessage } from './Utils/helper'

export const LiveChat=()=> {

  const dispatch = useDispatch()
  const chatMessages = useSelector((store)=> store.chat.messages)
  useEffect(()=>{

    
    const i = setInterval(()=>{

      dispatch(addMessage({
        name : generateRandomName(),
        message: makeRandomMessage(10),
      }))
    },2000)

    return ()=> clearInterval(i);
  },[])
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
    <div className='w-full h-[600px] ml-2 px-2 shadow-sm rounded-lg border border-black  overflow-y-scroll flex flex-col-reverse'>
      {
        chatMessages.map((c,i)=><ChatMessage key={c.i} name={c.name} message={c.message}/>)
      }
    </div>
    <div>
      <input className='border border-black' type='text'></input>
      <button className=' px-2 m-2 bg-black text-white'>Post</button>
    </div>
    </form>
    
    </>
    
  )
}
