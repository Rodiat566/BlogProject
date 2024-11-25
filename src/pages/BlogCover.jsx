import React from 'react'
import Home from './Home'

export default function BlogCover() {
  return (
    <div className='bg-gray-900 min-h-[100vh]'>
        <Home />
        <div className="text-center m-10">
            <button className='text-gray-300 uppercase fon-bold text-xs border hover:border-none hover:bg-blue-400 cursor-pointer py-2 px-5 rounded-[15px]'>read more</button>
        </div>
        <div className="text-white text-center shadow-2xl shadow-gray-900 p-5">
            <p className='text-xs letter tracking-[1px] font-bold'>
                &copy;2024 Parach ICT Academy Web OCT Front-End
            </p>
        </div>
    </div>
  )
}
