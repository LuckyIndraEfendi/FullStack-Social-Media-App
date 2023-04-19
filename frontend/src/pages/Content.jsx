import React, { useRef, useState } from "react";
import SliderStatus from "../lib/sliderStatus";
import {
    Checkbox,
    Favorite,
    FavoriteBorder,
    BookmarkBorderIcon,
    BookmarkIcon,
    ShareIcon,
    ChatBubbleOutlineIcon
} from "../assets/icons"

import './App.css'

const Content = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className="sm:-mt-16">
                <SliderStatus />
                <div className="mt-24 px-3 z-10 relative pb-20">
                    <div className="content flex flex-col">
                        <div className="postCircle mt-[5vh]">
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <div className="image overflow-hidden rounded-full" style={{ border: "2px solid yellow", padding: '2px' }} >
                                        <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" width='40px' className="rounded-full" />
                                    </div>
                                    <div className="">
                                        <h1 className="text-white font-medium text-sm">Lucky Indra Efendi • <span className="text-slate-500">9h</span></h1>
                                        <p className="text-slate-200 text-sm mt-1">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <div className="share text-white">
                                    <svg aria-label="Opsi lainnya" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24" _mstaria-label="187018">
                                        <circle cx="12" cy="12" r="1.5"></circle>
                                        <circle cx="6" cy="12" r="1.5"></circle>
                                        <circle cx="18" cy="12" r="1.5"></circle>
                                    </svg>

                                </div>
                            </div>
                            <div className="postContent mt-5  ">
                                <div className="images ring-1 ring-slate-600">
                                    <img src="https://i.pinimg.com/originals/e4/35/34/e43534a227b41d9db980974e160b64ef.png" alt="" width="100%" />
                                </div>
                                <div className="">
                                    <div className="toats -ml-2 flex justify-between">
                                        <ul className="flex mt-1 items-center justify-between w-28">
                                            <li> <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{ color: 'gray', fontSize: '40px' }} /></li>
                                            <li><ChatBubbleOutlineIcon sx={{ color: 'gray' }} /></li>
                                            <li><ShareIcon sx={{ color: 'gray', marginLeft: '5px' }} /></li>
                                        </ul>
                                        <div className="">
                                            <Checkbox
                                                {...label}
                                                icon={<BookmarkBorderIcon />}
                                                checkedIcon={<BookmarkIcon />}
                                                sx={{ color: 'gray', fontSize: '40px' }} />
                                        </div>
                                    </div>
                                    <div className="likes mt-1">
                                        <h1 className="text-white font-sans font-medium text-sm
                                    ">1,253 suka</h1>
                                    </div>
                                </div>
                                <div className="description mt-2">
                                    <p className="text-white text-sm"> <span className="font-semibold">luckyindraefendi</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id quae earum soluta aperiam commodi accusantium molestias pariatur ipsum rerum?</p>
                                </div>
                                <div className="showComment mt-1">
                                    <p className="text-slate-400 text-sm ">Lihat semua 1.253 komentar</p>
                                </div>
                                <div className="postComment">
                                    <form action="" className=" flex gap-2 mt-3">
                                        <input type="tel" className="bg-transparent text-[13px] outline-none post  text-white w-full" placeholder="Add Comment" />
                                        <span className="text-blue-600 font-medium text-sm ">Post</span>
                                    </form>
                                </div>
                            </div>
                            <hr className="mt-2" />
                        </div>


                        <div className="postCircle mt-[5vh]">
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <div className="image overflow-hidden rounded-full" style={{ border: "2px solid yellow", padding: '2px' }} >
                                        <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" width='40px' className="rounded-full" />
                                    </div>
                                    <div className="">
                                        <h1 className="text-white font-medium text-sm">Lucky Indra Efendi • <span className="text-slate-500">9h</span></h1>
                                        <p className="text-slate-200 text-sm mt-1">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <div className="share text-white">
                                    <svg aria-label="Opsi lainnya" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24" _mstaria-label="187018">
                                        <circle cx="12" cy="12" r="1.5"></circle>
                                        <circle cx="6" cy="12" r="1.5"></circle>
                                        <circle cx="18" cy="12" r="1.5"></circle>
                                    </svg>

                                </div>
                            </div>
                            <div className="postContent mt-5  ">
                                <div className="images ring-1 ring-slate-600">
                                    <img src="https://i.pinimg.com/originals/c8/6f/3d/c86f3d0eb41df9d0d8ea5f38b0abf054.png" alt="" width="100%" height="100%" />
                                </div>
                                <div className="">
                                    <div className="toats -ml-2 flex justify-between">
                                        <ul className="flex mt-1 items-center justify-between w-28">
                                            <li> <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{ color: 'gray', fontSize: '40px' }} /></li>
                                            <li><ChatBubbleOutlineIcon sx={{ color: 'gray' }} /></li>
                                            <li><ShareIcon sx={{ color: 'gray', marginLeft: '5px' }} /></li>
                                        </ul>
                                        <div className="">
                                            <Checkbox
                                                {...label}
                                                icon={<BookmarkBorderIcon />}
                                                checkedIcon={<BookmarkIcon />}
                                                sx={{ color: 'gray', fontSize: '40px' }} />
                                        </div>
                                    </div>
                                    <div className="likes mt-1">
                                        <h1 className="text-white font-sans font-medium text-sm
                                    ">1,253 suka</h1>
                                    </div>
                                </div>
                                <div className="description mt-2">
                                    <p className="text-white text-sm"> <span className="font-semibold">luckyindraefendi</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id quae earum soluta aperiam commodi accusantium molestias pariatur ipsum rerum?</p>
                                </div>
                                <div className="showComment mt-1">
                                    <p className="text-slate-400 text-sm ">Lihat semua 1.253 komentar</p>
                                </div>
                                <div className="postComment">
                                    <form action="" className=" flex gap-2 mt-3">
                                        <input type="tel" className="bg-transparent text-[13px] outline-none post  text-white w-full" placeholder="Add Comment" />
                                        <span className="text-blue-600 font-medium text-sm ">Post</span>
                                    </form>
                                </div>
                            </div>
                            <hr className="mt-2" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Content;