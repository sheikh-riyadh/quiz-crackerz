import React from 'react';
import { NavLink } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <nav className='md:text-2xl bg-teal-400 p-5 text-white flex justify-between'>
            <div className="flex items-center justify-center ">
                <AcademicCapIcon className="h-6 w-6 text-black mr-3" ></AcademicCapIcon>
                <h1>Quizo</h1>
            </div>
            <div>
                <NavLink className={`px-3`} to='/home'>Home</NavLink>
                <NavLink className='px-3' to='/statistics'>Statistics</NavLink>
                <NavLink className='px-3' to='/blogs'>Blogs</NavLink>
            </div>
        </nav>
    );
};

export default Header;