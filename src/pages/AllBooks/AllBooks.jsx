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
            <div className="flex justify-center items-center flex-col lg:grid lg:grid-cols-5 gap-5">
                {
                    books.map(book => <div key={book._id} className="h-full">
                        
                            <div className='max-h-72'>
                                <img src={book.imageUrl} alt="" className='h-72 w-full' />

                            </div>
                            <div className="w-full text-white rounded bg-blue-700 py-2 px-2 flex justify-center items-center">
                                <button className='flex justify-center items-center gap-2'><FaShoppingCart />অর্ডার করুন</button>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-xl font-bold">{book.bookTitle}</h1>
                                <p>{book.authorName.length > 30 ? `${book.authorName.slice(0, 30)}...`: book.authorName}</p>
                                <p className="text-red-500 text-xl font-medium">{book?.price}৳</p>
                            </div>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBooks;