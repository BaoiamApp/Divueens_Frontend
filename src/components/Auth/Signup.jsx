import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Signup = ({ move, setMove }) => {
  const [generateOTP, setGenerateOTP] = useState(false);
  const [otpText, setOtpText] = useState(false);
  const [otpV, setOtpV] = useState("");
  const [count, setCount] = useState(60);
  const [resendOTP, setResendOTP] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (generateOTP) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
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
    }, 5000);
    setOtpText(true);
    setCount(60);
    setResendOTP(false);
  };

  return (
    <>
      <form
        action="#"
        className="w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)]"
      >
        <h1 className='font-semibold text-[25px] text-center mt-[10px]'>Verify Your OTP</h1>
        <div className="h-[50px] mb-[60px] w-full mt-[50px] flex items-center">
          <div className="flex space-x-6">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                className="h-[4rem] w-[4rem] text-center font-bold outline-none rounded-[15px] border-[2px] border-[solid] border-[#5c5b5b] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
                inputMode="numeric"
                maxLength={1}
                required
              />
            ))}
          </div>
        </div>
        <div className="flex items-center mb-[30px]">
          <input
            type="checkbox"
            id="acceptTerms"
            className="mr-2"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="acceptTerms" className="text-[16px]">I have read and agree to the Privacy Policy and Terms of Service.</label>
        </div>
        <div className="flex">
          <div className='border mt-2 mr-[30px] w-[45%] px-4 py-2 text-black border-rose-400 bg-white rounded-[15px] text-center text-[20px] font-medium cursor-pointer'>
            <button type="button" onClick={() => setMove(true)}>
              <span>Back</span>
            </button>
          </div>
          <div className='border mt-2 w-[45%] px-4 py-2 text-white bg-gradient-to-l from-rose-700 to-rose-300 rounded-[15px] text-center text-[20px] font-medium cursor-pointer'>
            <button type="submit" disabled={!acceptTerms}>
              <span>Verify</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
