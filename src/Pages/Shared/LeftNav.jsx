import React, { useEffect, useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import news3 from "../../assets/new3.png";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://front-page-news-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data.news_category));
    }, []);
    return (
        <section>
            <article>
                <p className='p-5 text-lg text-gray-500 font-medium duration-200 bg-gray-100 rounded-sm'>All Categories</p>
                {
                    categories.map(item => <Link key={item.category_id} to={`/category/${item.category_id}`} className='block p-5 text-lg text-gray-500 font-medium hover:bg-gray-100 duration-200 focus:bg-gray-200 rounded-sm'>{item.category_name}</Link>)
                }
            </article>
            <article>
                <div className='text-gray-700 my-5 space-y-3'>
                    <img src={news1} alt="" className='w-full'/>
                    <h2 className="text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex items-center gap-5'>
                        <span>Sports</span>
                        <p className='space-x-3 text-gray-500'>
                        <FaCalendar className='inline'/>
                        <span>Jan 04, 2022</span>
                        </p>
                    </div>
                </div>
                <div className='text-gray-700 my-5 space-y-3'>
                    <img src={news2} alt="" className='w-full'/>
                    <h2 className="text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex items-center gap-5'>
                        <span>Sports</span>
                        <p className='space-x-3 text-gray-500'>
                        <FaCalendar className='inline'/>
                        <span>Jan 04, 2022</span>
                        </p>
                    </div>
                </div>
                <div className='text-gray-700 my-5 space-y-3'>
                    <img src={news3} alt="" className='w-full'/>
                    <h2 className="text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex items-center gap-5'>
                        <span>Sports</span>
                        <p className='space-x-3 text-gray-500'>
                        <FaCalendar className='inline'/>
                        <span>Jan 04, 2022</span>
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};




export default LeftNav;