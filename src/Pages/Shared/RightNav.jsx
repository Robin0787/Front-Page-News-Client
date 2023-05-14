import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Profile from './Profile';
import QZone from './QZone';

const RightNav = () => {
    return (
        <div className='space-y-2'>
            <div className='bg-gray-100 p-0'>
                <Profile />
            </div>
            <div className='text-gray-600 space-y-3'>
                <h2 className="text-xl font-bold my-3">Login With</h2>
                <button className='p-3 w-full font-semibold border border-gray-300 flex justify-center items-center gap-3 rounded'><FaGoogle className='text-blue-600' /> Login with Google</button>
                <button className='p-3 w-full font-semibold border border-gray-300 flex justify-center items-center gap-3 rounded'><FaGithub className='text-gray-600' /> Login with Github</button>
            </div>
            <div className='text-gray-600 space-y-1'>
                <h2 className="text-xl font-bold my-3">Find us on</h2>
                <div className='divide-y border rounded'>
                <button className='p-3 w-full font-semibold  flex justify-center items-center gap-3 rounded'><FaFacebook className='text-blue-600' /> Facebook</button>
                <button className='p-3 w-full font-semibold  flex justify-center items-center gap-3 rounded'><FaTwitter className='text-blue-600' /> Twitter</button>
                <button className='p-3 w-full font-semibold  flex justify-center items-center gap-3 rounded'><FaLinkedin className='text-blue-600' /> Linked In</button>
                </div>
            </div>
            <QZone />
            <div className='bg-bg1 bg-no-repeat bg-cover text-white py-20 space-y-5'>
                <h2 className="text-3xl text-center font-bold">Create an Amazing Newspaper</h2>
                <p className='text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button 
                className='bg-red-500 px-5 py-3 rounded-sm text-lg mx-auto block font-semibold text-white'>
                Learn More
                </button>
            </div>
        </div>
    );
};

export default RightNav;