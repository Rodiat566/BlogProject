import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeaderNavBar() {
    const navigate= useNavigate()
    const menu = [
        {
           text: 'Home' ,
           link: '/'

        },
        {
            text: ' New Blog', 
            link: '/blog/add_new'
        },
        {
            text: ' Login', 
            link: '/blog/login'
        }
    ]
    
  return (
    <div className="shadow-lg px-20 h-[10vh] flex justify-between items-center">
        <div className="font-bold text-2xl text-white">
            My- <span className='text-red-400'>Blog</span>
        </div>
        <div className="">
            <ul className='flex'>
                {menu.map((item, index) =>(
                    <li onClick={() => navigate(item.link)}
                    key={index} 
                    className='uppercase text-sm text-gray-400 font-bold px-4 py-5 cursor-pointer hover:text-red-400'>
                        {item.text}
                    </li>
                )
                )}
            </ul>
        </div>
    </div>
  )
}
