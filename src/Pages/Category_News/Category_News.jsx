import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category_item from '../Shared/Category_item';

const Category_News = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div className='space-y-5'>
            {
                news.data?.map((item) => <Category_item key={item._id} item={item}/>)
            }
        </div>
    );
};

export default Category_News;