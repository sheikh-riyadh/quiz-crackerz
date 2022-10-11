import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-2xl bg-teal-400 p-5 text-white flex justify-end'>
            <div>
                <NavLink className='px-3' to='/home'>Home</NavLink>
                <NavLink className='px-3' to='/topics'>Topics</NavLink>
                <NavLink className='px-3' to='/statistics'>Statistics</NavLink>
                <NavLink className='px-3' to='/blogs'>Blogs</NavLink>
            </div>
        </nav>
    );
};

export default Header;