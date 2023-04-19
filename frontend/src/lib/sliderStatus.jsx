import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

export default function SliderStatus() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}

                modules={[Pagination, Navigation]}
                className="mySwiper top-24 "
            >
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">Lucky....</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">lucz.code.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">bintangbudii</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">zulkifli.dev</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">dekorf.rrr</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">smktelkomjkt</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">dea.afrizal</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="image shadow-white px-[2px] py-[2px] rounded-full overflow-hidden" style={{ border: '2px solid #ad0445' }}>
                            <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className="rounded-full" />
                        </div>
                        <p className="text-white text-[11px] text-center mt-1">impacnationjkt</p>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
}
