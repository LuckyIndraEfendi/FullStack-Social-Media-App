import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
    return (
        <>
            <nav className='flex sm:hidden justify-around fixed w-full items-center py-3 bg-black z-30' style={{ borderBottom: '1px solid gray' }}>
                <div className="logo items-center">
                    <h1 className='font-serif text-white text-lg'>Instagram</h1>
                </div>
                <ul className="menu flex columns-2 gap-3 items-center ">
                    <li>
                        <div className="relative flex items-center">
                            <input type="text" placeholder='Search' className='pl-11 py-2 rounded-md bg-[#242323] text-white placeholder:text-gray-500  outline-none focus:ring-slate-300 focus:ring-1' />
                            <SearchIcon sx={{ position: 'absolute', fontSize: '25px', marginLeft: '10px', color: '#3f3e3e' }} />
                        </div>
                    </li>
                    <li><FavoriteBorderIcon sx={{ color: '#fff', fontSize: '30px' }} /></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;