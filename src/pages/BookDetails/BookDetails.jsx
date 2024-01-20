import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const { bookTitle, price, imageUrl, authorName, category, bookDescription } = useLoaderData()
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='mt-20 mx-4 lg:mx-24'>
            <div className="flex justify-center gap-10">
                <div className="flex justify-center h-96">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="flex-1 space-y-2">
                    <h1 className="text-3xl font-bold">{bookTitle}</h1>
                    <hr />
                    <p className="text-blue-700 text-lg"><span className="text-gray-700">লেখক:</span> {authorName}</p>
                    <p className="text-blue-700 text-lg"><span className="text-gray-700">বিষয়:</span> {category}</p>
                    <hr />
                    <p className="text-justify">{bookDescription.length > 472 ? `${bookDescription.slice(0, 472)}...` : bookDescription}</p>
                    <hr />
                    <p className="text-2xl text-blue-700">{price} ৳ <span className="text-gray-400 line-through">{parseFloat(price) / 100 * 20 + parseFloat(price)} ৳</span> <span>(20% ছাড়ে)</span></p>
                    <div className="flex justify-start gap-5">
                        <button className="bg-blue-700 py-2 px-4 text-white rounded">অর্ডার করুন</button>
                        <button className="bg-green-500 py-2 px-4 text-white rounded">একটু পড়ে দেখুন</button>
                    </div>
                </div>
                <div className="border">
                    <h1 className="text-2xl font-bold p-3 border-t-2 border-blue-700">আরো দেখুন…</h1>
                    <hr />
                    <div>
                        {
                            books.map(book => <Link to={`/book/${book._id}`} key={book._id}>
                                    <div  className="flex items-center gap-2 p-3 border-t">
                                        <img src={book.imageUrl} alt="" className="w-14" />
                                        <div>
                                            <h1>{book.bookTitle}</h1>
                                            <p className="text-sm">{book.authorName.length > 30 ? `${book.authorName.slice(0, 30)}...` : book.authorName}</p>
                                            <p className="text-sm">{book.category.length > 20 ? `${book.category.slice(0, 20)}...` : book.category}</p>
                                            <p className="text-blue-700"><span className="text-gray-400 line-through">{parseFloat(book.price) / 100 * 20 + parseFloat(book.price)} ৳</span> {book.price} ৳</p>
                                        </div>
                                    </div>
                                </Link>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;