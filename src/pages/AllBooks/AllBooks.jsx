import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="px-4 lg:px-24 mt-12">
            <h1 className='text-3xl bg-blue-600 text-center mb-5 w-2/5 mx-auto text-white py-2 rounded-md'>সকল বই সমূহ</h1>
            <div className="grid grid-cols-5 gap-5">
                {
                    books.map(book => <div key={book._id}>
                        <div className='w-full '>
                            <div className='h-80'>
                                
                                <img src={book.imageUrl} alt="" className='rounded' />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBooks;