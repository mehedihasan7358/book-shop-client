import React from 'react';

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-24 py-40'>
                {/* left side */}
                <div>
                    <h2 className='text-5xl font-bold leading-snug text-black'>By and Sell Your Books</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore ex accusamus laudantium. Consectetur, blanditiis harum sapiente veritatis minus, tempora doloremque eius provident dicta iure doloribus distinctio repudiandae aliquid. Aperiam, omnis doloribus. Numquam, necessitatibus corporis dolore minima eius saepe, officia odio soluta natus, unde laborum deleniti vel quas dignissimos pariatur.</p>
                </div>
                {/* right side */}
                <div>
                    Right side
                </div>
            </div>
        </div>
    );
};

export default Banner;