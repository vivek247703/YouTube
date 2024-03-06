import React from 'react'

const VideoCard =({item}) =>{
  return (
    <div className='m-2 w-72 h-72 bg-gray-100 rounded-lg cursor-pointer shadow-lg hover:bg-slate-300'>
     <img src={item?.snippet?.thumbnails?.default?.url} alt='' className='w-72 h-44 rounded-lg'/>
      <ul>
       <li className='font-bold truncate text-lg'>{item?.snippet?.title}</li>
       <li className='truncate white-space: nowrap'>{item?.snippet?.description}</li>
       <li className='truncate white-space: nowrap'>{(item?.statistics?.viewCount)/1000}M Views ┃{item?.statistics?.commentCount} Comments</li>
       <li className='truncate white-space: nowrap text-sm'>{item?.snippet?.publishedAt}</li>
      </ul>
    </div>
  )
}

export default VideoCard;
