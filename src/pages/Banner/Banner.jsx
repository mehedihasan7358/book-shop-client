import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

import img1 from '../../assets/books/book1.webp';
import img2 from '../../assets/books/book2.jpg';
import img3 from '../../assets/books/book3.jpg';
import img4 from '../../assets/books/book4.webp';
import img5 from '../../assets/books/book5.webp';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div className='mt-24 mx-4 lg:mx-24 '>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Swiper 1 */}
                <SwiperSlide>
                    <div className='px-4 py-4 bg-teal-100 rounded-md lg:px-24 flex w-full justify-around items-center'>
                        <div className="w-1/2">
                            <div className="space-y-4">
                                <h2 className="text-6xl text-left font-bold text-blue-700">প্যারাডক্সিক্যাল সাজিদ</h2>
                                <p className='text-left'>উন্নত মানের সুইডিশ বোর্ডের ডায়রী বাইন্ডিং ৩০০ গ্রাম মেটাল প্রিন্টেড জ্যাকেট কভার দুই পাশে উন্নত মানের ৩০০ গ্রাম কালার কার্ডের এম্বোসড পোস্তানি কাগজের মান ও রং : ৮০ গ্রাম এর অফ হোয়াইট পেপার</p>
                                <div className="card-actions justify-start">
                                <button className="bg-blue-700 py-2 px-4 text-white rounded">অর্ডার করুন</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img src={img1} className='rounded' />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper 2 */}
                <SwiperSlide>
                    <div className='px-4 py-4 bg-teal-100 rounded-md lg:px-24 flex w-full justify-around items-center'>
                        <div className="w-1/2">
                            <div className="space-y-4">
                                <h2 className="text-6xl text-left font-bold text-blue-700">সালাসাতুল উসুল</h2>
                                <p className='text-left'>উন্নত মানের সুইডিশ বোর্ডের ডায়রী বাইন্ডিং ৩০০ গ্রাম মেটাল প্রিন্টেড জ্যাকেট কভার দুই পাশে উন্নত মানের ৩০০ গ্রাম কালার কার্ডের এম্বোসড পোস্তানি কাগজের মান ও রং : ৮০ গ্রাম এর অফ হোয়াইট পেপার</p>
                                <div className="card-actions justify-start">
                                <button className="bg-blue-700 py-2 px-4 text-white rounded">অর্ডার করুন</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img src={img2} className='rounded' />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper 3 */}
                <SwiperSlide>
                    <div className='px-4 py-4 bg-teal-100 rounded-md lg:px-24 flex w-full justify-around items-center'>
                        <div className="w-1/2">
                            <div className="space-y-4">
                                <h2 className="text-6xl text-left font-bold text-blue-700">প্রোডাক্টিভ রামাদান</h2>
                                <p className='text-left'>উন্নত মানের সুইডিশ বোর্ডের ডায়রী বাইন্ডিং ৩০০ গ্রাম মেটাল প্রিন্টেড জ্যাকেট কভার দুই পাশে উন্নত মানের ৩০০ গ্রাম কালার কার্ডের এম্বোসড পোস্তানি কাগজের মান ও রং : ৮০ গ্রাম এর অফ হোয়াইট পেপার</p>
                                <div className="card-actions justify-start">
                                <button className="bg-blue-700 py-2 px-4 text-white rounded">অর্ডার করুন</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img src={img3} className='rounded' />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper 4 */}
                <SwiperSlide>
                    <div className='px-4 py-4 bg-teal-100 rounded-md lg:px-24 flex w-full justify-around items-center'>
                        <div className="w-1/2">
                            <div className="space-y-4">
                                <h2 className="text-6xl text-left font-bold text-blue-700">এবার ভিন্ন কিছু হোক</h2>
                                <p className='text-left'>উন্নত মানের সুইডিশ বোর্ডের ডায়রী বাইন্ডিং ৩০০ গ্রাম মেটাল প্রিন্টেড জ্যাকেট কভার দুই পাশে উন্নত মানের ৩০০ গ্রাম কালার কার্ডের এম্বোসড পোস্তানি কাগজের মান ও রং : ৮০ গ্রাম এর অফ হোয়াইট পেপার</p>
                                <div className="card-actions justify-start">
                                <button className="bg-blue-700 py-2 px-4 text-white rounded">অর্ডার করুন</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img src={img4} className='rounded' />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper 5 */}
                <SwiperSlide>
                    <div className='px-4 py-4 bg-teal-100 rounded-md lg:px-24 flex w-full justify-around items-center'>
                        <div className="w-1/2">
                            <div className="space-y-4">
                                <h2 className="text-6xl text-left font-bold text-blue-700">টাইম ম্যানেজমেন্ট</h2>
                                <p className='text-left'>উন্নত মানের সুইডিশ বোর্ডের ডায়রী বাইন্ডিং ৩০০ গ্রাম মেটাল প্রিন্টেড জ্যাকেট কভার দুই পাশে উন্নত মানের ৩০০ গ্রাম কালার কার্ডের এম্বোসড পোস্তানি কাগজের মান ও রং : ৮০ গ্রাম এর অফ হোয়াইট পেপার</p>
                                <div className="card-actions justify-start">
                                <button className="bg-blue-700 py-2 px-4 text-white rounded">অর্ডার করুন</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img src={img5} className='rounded' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;