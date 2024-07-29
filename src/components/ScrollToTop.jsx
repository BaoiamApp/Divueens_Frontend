import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    // function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // show or hide the button based on scroll position
    const handleScroll = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
    }

    // add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <button className={`scrollToTop fixed bottom-[5%] right-[5%] shadow-xl w-10 h-10 flex items-center justify-center bg-rose-400 rounded-full text-white border-none cursor-pointer z-50 hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-400 md:w-14 md:h-14 md:text-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
        <FaArrowUp />
    </button>
  )
}

export default ScrollToTop