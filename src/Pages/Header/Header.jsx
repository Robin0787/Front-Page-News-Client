import moment from 'moment/moment';
import React from 'react';
import Marquee from "react-fast-marquee";
import logo from "../../assets/logo.png";
const Header = () => {
    return (
        <section className='p-3 md:p-0 mb-5'>
            <article className='text-gray-600'>
               <div className='text-center space-y-2 mt-5'>
                <img src={logo} className='mx-auto'/>
                <p className='text-gray-500'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM YYYY")}</p>
               </div>
               <div className='flex bg-gray-100 p-2 justify-center items-center gap-5 mt-5'>
                <button 
                className='bg-red-500 px-5 py-2 rounded-sm  font-semibold text-white'>
                Latest
                </button>
                <Marquee speed={70} className='text-black'>
                ChatGPT accessible again in Italy
                    <span className='mx-4'>||</span> 
                    Amazon cloud and ad sales rises as online loses out
                    <span className='mx-4'>||</span> 
                    Wikipedia refuses Online Safety Bill age checks
                    <span className='mx-4'>||</span> 
                    Muslin dating app losses appeal against Tinder owner
                    <span className='mx-4'>||</span> 
                    Microsoft furious after Call of Duty deal blocked
                    <span className='mx-4'>||</span>
                    </Marquee>
               </div>
            </article>
        </section>
    );
};

export default Header;