import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const handleDelete = (_id, name) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-book/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Success!',
                                `${name} has been deleted.`,
                                'success'
                            )
                            const remaining = books.filter(items => items._id !== _id);
                            setBooks(remaining)
                        }
                    })
            }
        })
    }
    console.log(books);
    return (
        <div>
            <div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-base">
                                <th>ক্রমিক</th>
                                <th>বইয়ের ছবি</th>
                                <th>বইয়ের নাম</th>
                                <th>লেখক</th>
                                <th>বইয়ের দাম</th>
                                <th>সম্পাদন</th>
                                <th>ডিলিট</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, index) => <tr key={book._id}>
                                    <th>{index + 1}</th>
                                    <th>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={book.imageUrl} />
                                        </div>
                                    </th>
                                    <th>{book.bookTitle}</th>
                                    <th>{book.authorName.length > 20 ? `${book.authorName.slice(0, 20)}...` : book.authorName}</th>
                                    <th>{book.price}</th>
                                    <th className="text-center">
                                        <Link to={`/dashboard/edit-book/${book._id}`}>
                                            <button>
                                                <RiEditBoxLine className="text-lg" />
                                            </button>
                                        </Link>
                                    </th>
                                    <th className="text-center">
                                        <button onClick={() => handleDelete(book._id, book.bookTitle)}>
                                            <AiOutlineDelete className="text-lg" />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;