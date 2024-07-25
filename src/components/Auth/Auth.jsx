import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { LuX } from 'react-icons/lu';
export default function Auth({ show, changeView }) {
  const [togglePage, settoggle] = useState(true);
  return (
    <div className={`w-[100vw] h-[100vh] bg-black bg-opacity-50 overflow-hidden fixed top-0 z-50 ${show ? '' : 'hidden'}`}>
      <div className="w-[25em] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden max-w-[390px] bg-[#fff] p-[30px] rounded-[15px] [box-shadow:0px_15px_20px_rgba(0,0,0,0.1)]">
      <div onClick={() => changeView(false)} className="rounded-lg absolute top-[7%] right-[0%] -translate-x-[50%] -translate-y-[50%] bg-white  text-black cursor-pointer"><LuX className="w-6 h-6 m-1" /></div>
        {/* <div className="flex w-[200%]">
          <div className={`w-1/2 text-[35px] font-semibold text-center [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] ${togglePage ? 'ml-0' : 'ml-[-50%]'}`}>Login Form</div>
          <div className={`w-1/2 text-[35px] font-semibold text-center [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] signup`}>Signup Form</div>
        </div> */}
        <div className="w-full overflow-hidden">
          {/* <div className="relative flex h-[50px] w-full overflow-hidden ml-[0] mr-[0] my-[30px] justify-between border-[1px] border-[solid] border-[lightgrey] rounded-[15px]">
            <div className={`absolute h-full w-1/2 left-[0] z-0 rounded-[15px] bg-gradient-to-l from-[#881337] to-[#fb7185] [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] ${togglePage ? '' : 'left-[50%]'}`}></div>
            <label htmlFor="login" onClick={() => settoggle(true)} className={`h-full w-full text-[18px] z-10 font-medium text-center leading-[48px] cursor-pointer [transition:all_0.6s_ease] bg-transparent ${togglePage ? 'text-white' : 'text-black'}`}>Login</label>
            <label htmlFor="signup" onClick={() => settoggle(false)} className={`h-full w-full text-[18px] z-10 font-medium text-center leading-[48px] cursor-pointer [transition:all_0.6s_ease] bg-transparent ${togglePage ? 'text-black' : 'text-white'}`}>Signup</label>
          </div> */}
          <div className="flex w-[200%]">
            <Login move={togglePage} setMove={settoggle} />
            <Signup move={togglePage} setMove={settoggle}/>
          </div>
        </div>
      </div>
    </div>
  )
}
