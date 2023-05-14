import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';

const Main = () => {
    return (
        <div className='w-[90%] mx-auto mb-5'>
            <Header />
            <div className='grid grid-cols-1 sm:grid-cols-[6fr_3fr] md:grid-cols-[3fr_8fr] lg:grid-cols-[3fr_6fr_3fr] grid-flow-row'>
                <LeftNav />
                <div className="row-start-1 md:row-start-auto px-4">
                    <Outlet />
                </div>
                <RightNav />
            </div>
        </div>
    );
};

export default Main;