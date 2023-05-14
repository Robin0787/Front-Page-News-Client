import React from 'react';
import QZone1 from "../../assets/qZone1.png";
import QZone2 from "../../assets/qZone2.png";
import QZone3 from "../../assets/qZone3.png";
const QZone = () => {
    return (
            <div className='text-gray-600 '>
                <h2 className="text-xl font-bold my-3">Q-Zone</h2>
                <div className='flex flex-col items-center justify-center bg-gray-100 py-4'>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
                </div>
            </div>
    );
};

export default QZone;