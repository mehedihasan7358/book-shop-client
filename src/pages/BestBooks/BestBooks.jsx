// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaShoppingCart } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './BestBooks.css';

// import required modules
import { useEffect, useState } from 'react';

const BestBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='px-4 lg:px-24 mt-12'>
            <h1 className='text-3xl bg-blue-600 text-center mb-5 w-2/5 mx-auto text-white py-2 rounded-md'>জনপ্রিয় বই সমূহ</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                {
                    books.map(book => <SwiperSlide key={book._id}>
                        <div className='w-full '>
                            <div className='h-80'>
                                <div className='absolute bottom-0 hover:bg-opacity-100 bg-opacity-50 w-full text-white rounded bg-blue-700 py-2 px-2 flex justify-center items-center'>
                                    <button className='flex justify-center items-center gap-2'><FaShoppingCart />অর্ডার করুন</button>
                                </div>
                                <img src={book.imageUrl} alt="" className='rounded' />
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default BestBooks;