import React from 'react'
import HeaderNavBar from '../components/Header'

export default function Login() {
  return (
    <div className='bg-gray-900 min-h-[100vh]    text-black'>
         <HeaderNavBar />
         
        <div className="form mt-10  h-[28vh]  w-[20vw] shadow-xl border  p-4">
        <h1 className='text-white  text-center text-lg'>Login Page</h1>
        <form action="  ">
                 <div className="flex flex-col gap-9  m-5 ">
                 <div>
                <input type="email" name="" id=""  placeholder='Email' className='rounded-lg'/>
                </div>
                <div>
                <input type="password" name="" id=""  placeholder='Password' className='rounded-lg'/>
                </div>
                 </div>
            </form>
        </div>
    </div>
  )
}
