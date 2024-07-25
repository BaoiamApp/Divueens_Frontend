import React from 'react'
import { Pic60 } from '../../../assets/assets'
import { Link } from 'react-router-dom'

const BlogCards = () => {

    const blog = [
        {
            id: 1,
            img: 'https://i.pinimg.com/originals/75/53/5b/75535b41afb92264d8fbf0a30f1a4ca5.jpg',
            title: 'Do consectetur',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            img: 'https://blackhealthmatters.com/wp-content/uploads/2014/01/AdobeStock_251064401.jpeg',
            title: 'Consequat labore',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            img: 'https://www.richbeganyphoto.com/wp-content/uploads/2017/04/BrushKit2-060-11x14.jpg',
            title: 'Laboris nulla',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            img: 'https://i.pinimg.com/736x/d9/f4/85/d9f48595c43a8a109c2100e0be7364db.jpg',
            title: 'Do consectetur',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" />
                <h2 className="text-nowrap">Blogs</h2>
                <hr className="bg-gradient-to-r from-rose-700" />
            </div>
            <div className="grid max-[321px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-4">
                {blog.map((b) => {
                    return <div key={b.id} className="group w-full h-72 lg:w-56 xl:w-72 lg:h-96 overflow-hidden rounded-xl relative">
                        <img src={b.img} className="w-full h-[95%] object-cover rounded-xl" alt="" />
                        <div className="w-full backdrop-blur-sm bg-rose-400/60 absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer group-hover:max-h-full h-full max-h-[40px] flex flex-col items-center justify-center text-center">
                            <p className="text-sm md:text-lg font-semibold text-white">{b.title}</p>
                            <p className="text-xs md:text-sm px-2 font-semibold text-white hidden group-hover:flex">{b.desc}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className='text-center mx-auto w-full mt-8'>
                <Link to={'/blogs'} className='px-4 py-2 text-white bg-rose-700 rounded-full w-fit border hover:border hover:border-rose-700 hover:text-rose-700 hover:bg-white'>View More</Link>
            </div>
        </>
    )
}

export default BlogCards