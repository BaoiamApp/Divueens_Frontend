import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = ({ move, setMove }) => {

  const [forgotPass, setForgotPass] = useState(false);
  const [generateOTP, setGenerateOTP] = useState(false);
  const [otpText, setOtpText] = useState(false);
  const [otpV, setOtpV] = useState('');
  const [count, setCount] = useState(60);
  const [resendOTP, setResendOTP] = useState(false);

  const togglePass = () => {
    setForgotPass(!forgotPass);
  };

  useEffect(() => {
    let timer;
    if (generateOTP) {
      timer = setInterval(() => {
        setCount(count - 1);
        if (count === 0) {
          clearInterval(timer);
          setResendOTP(true);
        }
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [generateOTP, count]);

  const otpGenerate = () => {
    setGenerateOTP(true);
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);
    setTimeout(() => {
      setOtpV(otp.toString());
    }, 5000)
    setOtpText(true);
    setCount(60);
    setResendOTP(false);
  };

  return (
    <>
      <form
        action="/"
        className={`w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] ${move ? 'ml-0' : 'ml-[-50%]'}`}>
          <h1 className='font-semibold text-[25px] text-center  mt-[10px]'>Login With Mobile</h1>
          <div
          className="h-[50px] w-full mt-[50px]">
          <input
            className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
            inputmode="text"
            placeholder="Name"
            required />
        </div>
        <div
          className="h-[50px] w-full mt-[30px] ">
          <input
            className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
            inputmode="numeric"
            placeholder="Phone Number"
            required />
        </div>
        {/* <div
          className="h-[50px] w-full mt-[20px]">
          {forgotPass ? (
            <input
              className="h-full w-full appearance-none outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
              inputmode="numeric"
              // because of value you can't type anything
            // remove it when the otp is send via message
              value={otpV}
              placeholder="OTP"
              required />
          ) : (
            <input
              className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
              type="password"
              placeholder="Password"
              required />
          )}
        </div> */}
        {/* <div
          className="mt-[5px]">
          <p
            onClick={togglePass}
            className='text-[#fb7185] no-underline hover:underline'>Forgot password?</p>
          {generateOTP && (
            <>
              {count > 0 ? (
                <p className='text-xs'>
                  OTP Sent! ({count} seconds remaining)
                </p>
              ) : (
                <p onClick={otpGenerate} className='text-xs text-[#fb7185] no-underline cursor-pointer hover:underline'>
                  Resend OTP
                </p>
              )}
            </>
          )}
        </div> */}

<div className='border mt-10 px-4 py-2 text-white bg-gradient-to-l from-[#881337] to-[#fb7185] rounded-[15px] text-center text-[20px] font-medium cursor-pointer'>
            
            <button onClick={() => setMove(false)}>
                <span>Send OTP</span>
            </button>
        </div >

        {/* <div className='border mt-24 px-4 py-2 text-white bg-gradient-to-l from-[#881337] to-[#fb7185] rounded-[15px] text-center text-[20px] font-medium cursor-pointer'>
          {forgotPass ? (
            <button onClick={<link to="/src/components/Auth/Signup.jsx"></link>}>
              {generateOTP ? (
                <Link to="/profile">Login</Link>
              ) : (
                <span>Send OTP</span>
              )}
            </button>
          ) : (
            <Link to="/src/components/Auth/Signup.jsx">Send Otp</Link>
          )}
        </div > */}
        {/* <div
          className="text-center mt-[20px]">Not a member?
          <span onClick={() => setMove(false)}
            className='text-[#fb7185] no-underline cursor-pointer hover:underline'> Signup now</span>
        </div> */}
        {/* <div
          className='h-[50px] w-full flex justify-center'>
          <button
            className="h-full w-3/4 text-center mt-[10px] border flex justify-evenly items-center font-semibold border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <FcGoogle className="w-6 h-6" /><span>Continue with Google</span>
          </button>
        </div> */}
      </form >
    </>
  )
}

export default Login
