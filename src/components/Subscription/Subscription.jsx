// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (!email || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            Swal.fire({
                icon:"error",
                text:"Please enter a valid email address"});
        } else {
            Swal.fire({
                icon:"success",
                text:"Thank You For Subscribing"});
        }
    };

    return (
        <div className='max-md:ml-[10%]'>
            <form onSubmit={handleClick}>
                <fieldset>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-black w-[80%] mt-14 px-4 py-2 text-sm lg:p-4 max-md:mt-12'
                    />
                    <button type='submit' className='w-[80%] bg-rose-700 text-white text-sm lg:text-lg rounded-lg hover:bg-rose-600 font-[600] py-2 lg:py-4 my-4'>
                        Subscribe
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Subscription;