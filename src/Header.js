import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './Utils/AppSlice';
import { YUOUTUBE_SUGGESTIONS } from './Utils/Constatnts';

export const Header = () => {

  const [SearchQuery, SetSearchQuery] = useState("");
  const [Suggestions, SetSuggestions] = useState("");
  const [ShwoSuggestion, SetShowSuggestion] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>getSuggestion(),200);
      return()=>{
        clearTimeout(timer);
      }
  },[SearchQuery]);

  const  getSuggestion = async ()=>{
    const data = await fetch(YUOUTUBE_SUGGESTIONS+SearchQuery);
    const json = await data.json();
    //console.log(json);
    SetSuggestions(json[1]);
  }
  const dispatch = useDispatch();

  const toggleHandler =()=>{
      dispatch(toggleMenu());
      }
  return (
    <div className="grid grid-flow-col p-5 shadow-lg rounded-lg">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 mx-36">
        <div className='flex'>
          <input
            className="px-5 w-9/12 border border-gray-400 p-2 rounded-l-full"
            placeholder='Search...'
            type="text"
            value={SearchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
            onFocus={()=>SetShowSuggestion(true)}
            onBlur={()=>SetShowSuggestion(false)}
           
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
          <img className='h-10 px-2 py-2  mx-4 bg-slate-300 rounded-full' alt='' src='https://static-00.iconduck.com/assets.00/mic-icon-358x512-o7rb029b.png'/>
        </div>
        {ShwoSuggestion && (<div className='bg-white  w-[31rem] h-72 fixed rounded-lg shadow-lg p-2'>
           <ul className='mt-2'>
           {
                Suggestions.map((e)=>(
                  <li className='hover:bg-slate-100 border border-gray-100 rounded-lg'>{e}</li>
                ))
            }
           </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  )
}
