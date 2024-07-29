import React from 'react';
import company from '../../assets/CareersPage/ourcompany.png';
import { Amazon , Flipkart , PhonePe , SnapInc} from '../../assets/assets'
import { PiLightbulbFilamentBold , PiHandshakeBold , PiWindmillBold} from "react-icons/pi";
import { TbScreenshot } from "react-icons/tb";
import { FaCompressArrowsAlt } from "react-icons/fa";
import '../../index.css'

const companyData = {
    title: "Company Overview",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sint quaerat, reiciendis nulla amet vitae quos quis architecto fuga, distinctio eos! Impedit, a fugiat voluptate iusto maxime quos animi, voluptatibus temporibus reprehenderit cum ut. Beatae vero nisi aliquam nesciunt aperiam sed a alias hic natus excepturi distinctio, debitis pariatur expedita.",
    img: company,
}
const partnersData = [
    {
        id: 1,
        title: 'Amazon',
        image: Amazon,
    },
    {
        id: 2,
        title: 'Flipkart',
        image: Flipkart,
    },
    {
        id: 3,
        title: 'PhonePe',
        image: PhonePe,
    },
    {
        id: 4,
        title: 'SnapInc.',
        image: SnapInc,
    },
]

const iconMap = {
    PiHandshakeBold,
    PiLightbulbFilamentBold,
    PiWindmillBold,
    FaCompressArrowsAlt,
    TbScreenshot
}
const ourCoreData = [
    {
        id:1,
        title:'Innovation',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        logo:'PiLightbulbFilamentBold',
    },
    {
        id:2,
        title:'Collaboration',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        logo: 'PiHandshakeBold',
    },
    {
        id:3,
        title:'Integrity',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        logo: 'TbScreenshot',
    },
    {
        id:4,
        title:'Inclusivity',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        logo: 'FaCompressArrowsAlt',
    },
    {
        id:5,
        title:'Sustainability',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        logo : 'PiWindmillBold',
    },
]


const CompanyOverviewAndMore = () => {
    return (
        <div className='my-10 w-full'>
            {/* Company Overview */}
            <div className="w-full flex flex-col-reverse md:flex-row md:justify-between gap-4 md:p-10 shadow-md">
                <div className="md:w-1/2 w-full flex flex-col gap-5 justify-center py-4 px-8">
                    <p className='font-semibold md:text-3xl text-rose-900 text-2xl text-center'>{companyData.title}</p>
                    <p className='font-medium text-lg text-justify md:leading-9'>{companyData.description}</p>
                </div>
                <img src={companyData.img} className='md:w-1/2 rounded-md'/>
            </div>
            {/* Our Partnership */}
            <div className="w-full my-20 bg-rose-900 p-10 flex-col flex gap-10">
                <p className='font-semibold text-white text-4xl text-center'>Our Partnerships</p>
                <div className='grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 md:gap-x-24 gap-x-14 gap-y-5 place-content-center mx-auto'>
                    {partnersData.map((data) => (
                        <img src={data.image} alt={data.title} key={data.id} className='w-20 hover:shadow-2xl transform ease-in duration-300 shadow-white rounded-[50%]' />
                    ))}
                </div>
            </div>
            {/* Our Core Values */}
            <div className="w-[95%] flex flex-col mx-auto shadow-2xl gap-7 justify-center items-center">
                <div className='flex flex-col gap-8 text-center p-10'>
                    <p className='text-2xl font-semibold md:text-3xl'>Our Core Values</p>
                    <p className='text-xl text-justify font-medium w-[80%] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis esse amet accusantium officia autem consectetur accusamus incidunt fugit veritatis!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 w-full ">
                    {ourCoreData.map((data) => (
                        <div className="flex flex-col gap-2 coreItem place-content-center md:place-content-start" key={data.id}>
                            <div className='w-[50px] h-[50px] rounded-xl bg-rose-200 flex items-center justify-center'>{iconMap[data.logo]({size:30})}</div>
                            <div className=" flex flex-col gap-2">
                                <p className='font-semibold text-xl'>{data.title}</p>
                                <p className='text-xs'>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompanyOverviewAndMore;
