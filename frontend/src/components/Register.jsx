import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
const Register = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="bg-white w-[80%] sm:w-[40%]  py-10 rounded-md">
                <form action="/" className=' flex flex-col w-[80%] m-auto '>
                    <h1 className='text-3xl text-center font-semibold font-sans mb-8 text-black'>Register</h1>
                    <label htmlFor="email" className='text-black font-medium mb-2'>Username</label>
                    <input type="text" placeholder='Username' id='email' name='email' className='px-5 py-3 mb-4 rounded-md px bg-slate-200 outline-none focus:ring-1 ring-blue-500' required />
                    <label htmlFor="email" className='text-black font-medium mb-2'>Email</label>
                    <input type="text" placeholder='Username' id='email' name='email' className='px-5 py-3 mb-4 rounded-md px bg-slate-200 outline-none focus:ring-1 ring-blue-500' required />
                    <label htmlFor="password" className='text-black font-medium mb-3'>Password</label>
                    <input type="password" placeholder='Password' id='password' name='password' className='px-5 py-3 rounded-md px bg-slate-200 outline-none focus:ring-1 ring-blue-500' required />
                    <label htmlFor="confirmpassword" className='mt-3 text-black font-medium mb-3'>Retype Password</label>
                    <input type="password" placeholder='Confirm Password' id='confirmpassword' name='confirmpassword' className='px-5 py-3 rounded-md px bg-slate-200 outline-none focus:ring-1 ring-blue-500' required />
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-3 rounded-md mt-5 hover:bg-blue-700 transition-all duration-200 font-sans"
                        data-te-ripple-init
                        data-te-ripple-color="light">Login</button>
                </form>
                <div className="px-10 sm:px-14 mt-2">
                    <p className='text-sm'>Already have Account? <Link to="/"><span className='text-blue-600'>Login</span></Link></p>

                    <div className="or flex items-center gap-3 mt-4">
                        <div className="line h-1 w-full bg-slate-500 rounded-md"></div>
                        <div className="font-sans font-semibold">OR</div>
                        <div className="line h-1 w-full bg-slate-500 rounded-md"></div>
                    </div>
                    <div className="btnGruop flex ">
                        <button type="submit "
                            className="bg-red-600 w-full flex text-sm items-center justify-center text-white px-4 py-3 rounded-md mt-5 hover:bg-red-700 transition-all duration-200 font-sans"
                            data-te-ripple-init
                            data-te-ripple-color="light"><GoogleIcon sx={{ color: "#fff" }} /> <span className=' font-sans ml-4 font-medium'>Continue With Google</span></button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Register;