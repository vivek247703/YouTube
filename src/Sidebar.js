import React from 'react'
import { useSelector } from 'react-redux'
import { IconSidebar } from './IconSidebar';

export const Sidebar = () => {

  const isMenuOpens = useSelector((store)=>store.app.isMenuOpen);

  if(!isMenuOpens) return <IconSidebar />;
  return (
    <div className='shadow-lg p-5 w-48'>
      <ul className='p-4'>
        <li className='hover:bg-gray-300 cursor-pointer my-3 py-1 rounded-lg w-36'><span className='pr-4'>🏛️</span>Home</li>
        <li className='hover:bg-gray-300 cursor-pointer my-3 py-1  rounded-lg w-36'><span className='pr-4'>🎥</span>Videos</li>
        <li className='hover:bg-gray-300 cursor-pointer my-3 py-1  rounded-lg w-36'><span className='pr-4'>🎞️</span>Shorts</li>
        <li className='hover:bg-gray-300 cursor-pointer my-3 py-1  rounded-lg w-36'><span className='pr-4'>🔴</span>Live</li>
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul className='p-4'>
        <li><span className='pr-4'>⚽</span>Sports</li>
        <li><span className='pr-4'>🎓</span>Learning</li>
        <li><span className='pr-4'>🎧</span>Music</li>
        <li><span className='pr-4'>🎬</span>Movies</li>
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul className='p-4'>
        <li><span className='pr-4'>⚽</span>Sports</li>
        <li><span className='pr-4'>🎓</span>Learning</li>
        <li><span className='pr-4'>🎧</span>Music</li>
        <li><span className='pr-4'>🎬</span>Movies</li>
      </ul>
    </div>
  )
}
