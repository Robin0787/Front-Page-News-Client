import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <nav className="navbar">
            <div className="flex-none text-center mx-auto">
                <div className='text-center font-semibold space-x-5 px-4'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-black' : ''} >Home</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-black' : ''} >About</NavLink>
                </div>
                <div className="dropdown dropdown-end flex items-center">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="rounded-full">
                            <FaUser className='h-10 w-10 bg-white outline outline-gray-500 p-2' />
                        </div>
                    </label>
                    {
                        true ?
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 top-8">
                                <li>
                                    <a className="text-white font-bold text-md">
                                        Robin Hossen
                                    </a>
                                </li>
                                <li><a className='text-gray-300'>Log Out</a></li>
                            </ul>
                            :
                            ''
                    }
                </div>
            </div>
        </nav>
    );
};

export default Profile;