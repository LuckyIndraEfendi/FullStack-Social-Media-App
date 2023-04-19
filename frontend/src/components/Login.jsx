import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {connect } from 'react-redux';
const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser] = useState('');

    const login = {
        username: username,
        password: password,
      };
    const handleSubmit =(event)=>{
        event.preventDefault()
        async function loginUser(){
            try {
                const url = await axios.post("http://localhost:5000/api/v1/users/login",login)
                const data = await url.data
                localStorage.setItem("user", JSON.stringify({
                    city:data.data.city,
                    email : data.data.email,
                    id : data.data.id,
                    name : data.data.username,
                    profilePic : data.data.profilePic
                }))
                navigate('/dashboard')

            }catch(err){
                console.log({
                    status : err.response.data.status,
                    message : err.response.data.message
                })
            }
        }
        loginUser()
    }
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="bg-white w-[80%] sm:w-[40%]  py-10 rounded-md">
                <form action="/" className=' flex flex-col w-[80%] m-auto ' onSubmit={handleSubmit}>
                    <h1 className='text-3xl text-center font-semibold font-sans mb-8 text-black'>Login</h1>
                    <label htmlFor="email" className='text-black font-medium mb-2' >Username</label>
                    <input type="text" placeholder='Username' id='email' name='email' className='px-5 py-3 mb-4 rounded-md px bg-slate-200 outline-none focus:ring-1 ring-blue-500'  onChange={ (e)=>setUsername(e.target.value)} required/>
                    <label htmlFor="password" className='text-black font-medium mb-3'>Password</label>
                    <input type="password" placeholder='Password' id='password' name='password' className='px-5 py-3 rounded-md px bg-slate-200 outline-none focus:ring-1 ring-blue-500'  onChange={ (e) =>setPassword(e.target.value)} required />
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-3 rounded-md mt-5 hover:bg-blue-700 transition-all duration-200 font-sans"
                        data-te-ripple-init
                        data-te-ripple-color="light">Login</button>
                </form>
                <div className="px-10 sm:px-14 mt-2">
                    <p className='text-sm'>Don't have Account? <Link to="/register"><span className='text-blue-600'>Register</span></Link></p>
{console.log(props.user)}
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

const mapStateToProps = (state) => {
    return {
        user: state.isLogin,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({ type: "ISLOGIN"}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);