import React from 'react';

const Category_item = ({ item }) => {
    const { author, details, image_url, thumbnail_url, title, total_view, _id } = item;

    return (
        <div className='border p-4 rounded-lg space-y-5'>
            <div className='flex gap-3 justify-between'>
                <img src={thumbnail_url} className='w-1/2 h-1/2 md:w-auto md:h-auto' alt="" />
                <div className='flex flex-col justify-between'>
                    <h2 className="md:text-xl text-gray-600 font-semibold">{title}</h2>
                    <div className='flex items-center gap-3'>
                        <img src={author.img} className='h-10 w-10 rounded-full' alt="" />
                        <div className="">
                        <p className="text-sm">{author.name}</p>
                        <p className="text-sm">{author.published_date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-gray-400 text-justify'>{details}</p>
        </div>
    );
};

export default Category_item;