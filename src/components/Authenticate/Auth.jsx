
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
export default function Auth() {
  const [toggle,settoggle]=useState(true)
  return (
    <>
      <div className="wrapper h-[550px] w-[400px] bg-white rounded-xl flex flex-col gap-10 ">
        <div className="w-[300px] h-12 ml-[50px] p-2 mr-[35px] mb-[35px] rounded-lg border-2 border-gray-400 text-2xl relative">
          <div className='absolute top-0 left-0 w-40 h-[100%] bg-gradient-to-r from-rose-400 to-rose-800 rounded-lg'></div>
          <button type="button" onClick={()=>settoggle(true)} className=" pt-[2px] px-[30px] cursor-pointer bg-transparent border-spacing-0 outline-none relative text-white">Log in</button>
          <button type="button" onClick={()=>settoggle(false)} className=" pt-[2px] px-[30px] cursor-pointer bg-transparent border-spacing-0 text-black outline-none relative ">Sign Up</button>
        </div>
        { toggle?<Login />:<Signup />
        }
        
      </div>
    </>
  )
}