import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './BestBooks.css';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/books/book1.webp';
import img2 from '../../assets/books/book2.jpg';
import img3 from '../../assets/books/book3.jpg';
import img4 from '../../assets/books/book4.webp';
import img5 from '../../assets/books/book5.webp';

const BestBooks = () => {
    return (
        <div className='px-4 lg:px-24 mt-20'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BestBooks;