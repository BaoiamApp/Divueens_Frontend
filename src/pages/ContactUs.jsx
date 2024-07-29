// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useState} from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [value,setValue] = useState(0); 
    const [selectedFile, setSelectedFile] = useState("No file chosen"); 
    const cancel = ()=>{
        setSelectedFile("No file chosen")
    }
    const createTicket = (e) => {
        e.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const helpType = document.querySelector('select[name="helpType"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const description = document.querySelector('textarea[name="description"]').value;
        const file = document.querySelector('input[type="file"]').value;
      
        if (email === '' || helpType === '' || subject === '' || description === '' || file === '') {
          Swal.fire({
            icon:"error",
            text:"Please fill in all the fields"});
        } else {
          Swal.fire({
            title: "Thank you for connecting with us!",
            icon: "success",
            confirmButtonText: "OK"
          });
        }
      };

  return (
    <>
    <div className="flex flex-col-reverse items-start md:flex lg:flex lg:flex-row-reverse  md:flex-col justify-center m-4 lg:mt-[5rem] min-h-screen py-10">

        <div className="w-full max-w-lg bg-rose-50  lg:w-[40%] p-8 md:max-w-[90%] rounded-2xl shadow-2xl mt-6 md:mt-0 sm:ml-[3rem] md:ml-10">
            <h2 className="text-rose-700 text-[1.5rem] lg:text-[1.9rem] md:text-[1.8rem] xl:text-[2rem]  sm:text-[1.6rem] font-bold mb-6 underline underline-offset-8">Write to us</h2>
             <form onSubmit={createTicket} id="contact-form" className="space-y-4">
            <div>
                <label htmlFor="email" className="block mb-1 text-[1rem] md:mt-8 lg:text-[1.3rem] sm:text-[1.1rem] xl:text-[1.4rem] md:text-[1.3rem]">Email Address</label>

                <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-1 border md:h-[2.4rem] border-rose-300 rounded"
                />
            </div>
            <div>

                <label htmlFor="helpType" className="block md:mt-6 lg:mt-4 lg:text-[1.3rem] text-[1rem] xl:text-[1.4rem] sm:text-[1.1rem] md:text-[1.3rem] mb-1">What do you need help with?</label>

                <select
                id="helpType"
                name="helpType"
                required
                className="w-full p-1 border md:h-[2.4rem] border-rose-300 rounded">
                <option value="" disabled selected className='lg:text-[1.3rem]
                  md:text-[1.2rem] xl:text-[1.4rem] sm:text-[1.1rem]'>Select an option</option>
                <option value="Order related issue" className="lg:text-[1.3rem]
                  md:text-[1.2rem] font-medium xl:text-[1.3rem] sm:text-[1.1rem]">Order related issue</option>
                <option value="Payments/Refund" className="lg:text-[1.3rem]
                 font-medium sm:text-[1.1rem] xl:text-[1.3rem] md:text-[1.2rem]">Payments/Refund</option>
                <option value="Offers, Discounts, Coupons" className=" lg:text-[1.3rem] xl:text-[1.3rem]
                font-medium sm:text-[1.1rem] md:text-[1.2rem]">Offers, Discounts, Coupons</option>
                <option value="Gift card" className="lg:text-[1.3rem]
                 font-medium md:text-[1.2rem] xl:text-[1.3rem] sm:text-[1.1rem]">Gift card</option>
                <option  value="Account related" className="lg:text-[1.3rem]
                 font-medium md:text-[1.2rem] xl:text-[1.3rem] sm:text-[1.1rem]">Account related</option>
                <option value="Other" className="lg:text-[1.3rem]
                 font-medium md:text-[1.2rem] xl:text-[1.3rem] sm:text-[1.1rem]">Other</option>
                </select>
            </div>
            <div>

                <label htmlFor="subject" className="block mb-1  lg:mt-4 lg:text-[1.3rem] md:mt-6 text-[1rem] xl:text-[1.4rem] sm:text-[1.1rem] md:text-[1.3rem]">Subject</label>

                <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-1 border md:h-[2.4rem] border-rose-300 rounded"/>
            </div>
            <div>
                <label htmlFor="description" className="block  lg:mt-4 lg:text-[1.3rem] md:mt-6 text-[1rem] xl:text-[1.4rem] sm:text-[1.1rem] md:text-[1.3rem] mb-1">Description</label>
                <textarea
                id="description"
                name="description"
                required 
                className="w-full p-2 border md:h-[5rem] lg:mb-0.5 border-rose-300 rounded"
                maxLength="200" onChange={(e)=>setValue(e.target.value.length)}
                ></textarea>
                <div className="text-right text-sm text-gray-500"><span id="char-count">{value}</span>/200</div>
            </div>
            <div>
        <input
          type="file"
          id="custom-input"
          onChange={(e) => setSelectedFile(e.target.files[0].name)}
          hidden
        />
        <div className="flex items-center"><label

          htmlFor="custom-input"
          className="block text-sm sm:text-[1rem] lg:text-[1.2rem] md:text-[1.2rem] text-slate-500 mr-4 py-2 px-4

            rounded-md border-0  font-semibold bg-pink-50
             hover:bg-pink-100 cursor-pointer"
        >
          Upload
        </label>

        <label className="text-sm text-slate-500 md:text-[1.2rem]">{selectedFile}</label>
        <div className="ml-3 text-2xl text-gray-700 cursor-pointer" onClick={cancel}>&times;</div>
</div>


                <p className="text-sm md:text-[1.2rem]  sm:text-[1rem] lg:text-[1.1rem] lg:my-4 md:my-7 xl:text-[1.2rem] text-gray-500 mt-[1rem]">Allowed formats: PNG, JPG, JPEG. Maximum file size: 8MB</p>
            </div>
            <button type="submit" className="w-full xl:text-[1.3rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.2rem] bg-rose-500 text-white p-2 rounded hover:bg-rose-600">Create ticket</button>
            </form>
        </div>







        <div className="w-full pt-5 md:w-sm md:mt-14 lg:w-[45%] lg:ml-0 sm:ml-6 md:ml-0 px-4 md:px-8">
            <h1 className="text-rose-700 text-[1.6rem] lg:text-[1.9rem] xl:text-[2rem]  md:text-[1.8rem] sm:text-[1.6rem] font-bold ">Contact us for more <h1 className=" text-rose-700 xl:text-[2rem] lg:text-[1.9rem]  sm:text-[1.6rem] md:text-[1.8rem]  text-[1.6rem] font-bold mb-5 underline underline-offset-8">information!</h1></h1>
            <p className="mb-6 lg:text-[1.3rem] xl:text-[1.5rem] sm:text-[1.2rem] md:text-[1.3rem] text-[1rem]">Do you have any queries? Reach out to us and we are happy to help you!</p>
            <div className="flex items-center mb-4">
                <div className="text-rose-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
                </div>
                <div>
                    <span className=' text-[0.9rem] sm:text-[1.1rem] xl:text-[1.4rem] md:text-[1.2rem] lg:text-[1.2rem] '>Call now:</span>
                    <span className="text-rose-600 xl:text-[1.4rem]  md:text-[1.2rem] sm:text-[1.1rem] text-[0.9rem] ml-3 lg:text-[1.2rem]  font-semibold">+917423739126</span>
                </div>
            </div>
            <div className="flex items-center mb-4">
                <div className="text-rose-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 00-8 0v1a4 4 0 004 4h0a4 4 0 004-4v-1zm-4 1h0m0 4h.01M4 12h0v8a2 2 0 002 2h12a2 2 0 002-2v-8h0M4 8h16M10 4h4" /></svg>
                </div>
                <div>
                    <span className='sm:text-[1.1rem] xl:text-[1.4rem] lg:text-[1.2rem] text-[0.9rem] md:text-[1.2rem]'>Email:</span>
                    <span className="text-rose-600 ml-3 lg:text-[1.2rem]  md:text-[1.2rem] text-[0.9rem] sm:text-[1.1rem] xl:text-[1.4rem]  font-semibold">support@divueens.com</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default ContactUs

