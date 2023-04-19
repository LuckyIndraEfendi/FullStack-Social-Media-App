import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import RightBar from './RightBar';
import {
    HomeIcon,
    DensityMediumIcon,
    ExploreIcon,
    SearchIcon,
    SmartDisplayIcon,
    EmailIcon,
    NotificationsIcon,
    AddBoxIcon,
    AccountCircleIcon
} from "../assets/icons"
const Main = () => {
    return (
        <>
            <Navbar />
            <div className="sidebar md:grid md:grid-cols-5">
                <div className="sidebar__header hidden md:block md:ring-2 md:ring-gray-600  px-3 py-5 col-span-1">
                    <div className=" mt-4  fixed z-20">
                        <div className="md:px-3 md:h-screen ">
                            <div className="sidebar__header__logo text-white text-2xl">Instagram</div>
                            <ul className='mt-8 m-0 p-0'>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><HomeIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Home</span> </li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><SearchIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Search</span></li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><ExploreIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Explore</span></li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><SmartDisplayIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Reels</span> </li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><EmailIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Message</span> </li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><NotificationsIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Notification</span> </li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><AddBoxIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Create</span> </li>
                                <li className='text-white text-lg hover:bg-slate-500 py-[13px] flex items-center gap-3 px-3 rounded-md '><AccountCircleIcon sx={{ fontSize: '30px' }} /><span className='font-normal'>Profile</span> </li>
                                <li className='text-white text-lg hover:bg-slate-500 py-3 mt-4 flex items-center gap-3 px-3 rounded-md'> <DensityMediumIcon /> <span>More</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="sidebar__content col-span-2 px-5 ">
                    <Content />
                </div>
                <div className="sidebar__left ring-1 ring-gray-600 col-span-2">
                    <div className="md:px-2 md:py-3 md:mt-8 hidden md:block  ">
                        <RightBar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;