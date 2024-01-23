import Swal from 'sweetalert2'

const UploadBook = () => {
    const handleUploadBook = event => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.name.value;
        const authorName = form.author.value;
        const imageUrl = form.photoUrl.value;
        const category = form.category.value;
        const bookPdfUrl = form.pdfLink.value;
        const price = form.price.value;
        const bookDescription = form.description.value;

        const book = { bookTitle, authorName, imageUrl, category, bookPdfUrl, price, bookDescription };
        console.log(book);
        fetch('http://localhost:5000/upload-book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "অভিনন্দন",
                        text: "ডাটাবেসে আপনার বই যুক্ত হয়েছে।",
                        icon: "success"
                    });
                    form.reset()
                }
            })

    }
    return (
        <div className="">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">নতুন বই যুক্ত করুন</h1>
                <p className="w-3/4 mx-auto text-center">প্রয়োজ্য তথ্য পূরণ করুন এবং বইটির বিবরণ, লেখক, এবং কভার চিত্র যোগ করুন। শেলফ বা ক্যাটেগরি নির্ধারণ করুন এবং সেভ বোতামে ক্লিক করুন।</p>
            </div>
            <div>
                <form onSubmit={handleUploadBook}>
                    <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <h3 className="label-text font-bold mb-1">বইয়ের নাম <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="name" placeholder="বইয়ের নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">লেখকের নাম <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="author" placeholder="লেখকের নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">ফটো ইউআরএল <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="url" name="photoUrl" placeholder="ফটো ইউআরএল দিন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">বইয়ের ধরন <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="category" placeholder="বইয়ের ধরন লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">পিডিএফ লিংক <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="url" name="pdfLink" placeholder="বইয়ের পিডিএফ লিংক" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">বইয়ের দাম <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="number" name="price" placeholder="বইয়ের দাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div className="col-span-2">
                            <h3 className="label-text font-bold mb-1">বইয়ের বিবরণ <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="description" placeholder="বইয়ের বিবরণ লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <input type="submit" className="w-full py-[8px] text-center font-medium bg-blue-700 text-white col-span-2 border rounded-md" value="সেভ করুন" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadBook;