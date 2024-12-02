import React, { useState } from 'react'
import HeaderNavBar from '../components/Header'

export default function Login() {
  const [email, setemail]  = useState()
  const [password, setpassword] = useState()

  const handleLogin = async(e)=>{
    e.preventDefault()
    const data = {
      email: email,
      password:password,
    };
    
    console.log(data);
      setemail("")
      setpassword("")
  }
  return (
    <div className='bg-gray-900 min-h-[100vh]    text-black'>
         <HeaderNavBar />
         
        <div className="form mt-10  h-[28vh]  w-[20vw] shadow-xl  p-4">
        <h1 className='text-white  text-center text-lg'>Login Page</h1>
        <form action=" " onSubmit={handleLogin} >
                 <div className="flex flex-col gap-9  m-5 ">
                 <div>
                <input type="email" name="" id=""  placeholder='Email' className='rounded-lg  h-[40px]'
                value={email}
                 onChange={(e) => setemail(e.target.value)}
                />
                </div>
                <div>
                <input type="password" name="" id=""  placeholder='Password' className='rounded-lg'
                value={password}
                 onChange={(e) => setpassword(e.target.value)}
                />
                </div>
                 </div>
                 <div>
                  <input type="button" value="login"  onClick={handleLogin} className='border rounded w-[30%]'/>
                 </div>
            </form>
        </div>
    </div>
  )
}
