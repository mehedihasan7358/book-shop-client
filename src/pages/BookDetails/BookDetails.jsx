import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const { _id, bookTitle, } = useLoaderData()
    return (
        <div className='mt-20 mx-4 lg:mx-24'>
            <h1>{bookTitle}</h1>
        </div>
    );
};

export default BookDetails;