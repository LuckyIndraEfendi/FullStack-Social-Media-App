import React,{useState,useEffect} from 'react';

const RightBar = () => {
    const [users,setUsers] = useState("")
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user')) || null
        setUsers(data)
    },[])
    return (
        <>
            <div className="account px-5">
                <div className="accountItems flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="images rounded-full overflow-hidden w-16 px-1 py-1 ring-1 ring-gray-700">
                            <img src={users.profilePic} alt="" className='rounded-full' />
                        </div>
                        <div className="title">
                            <h1 className='text-white font-medium'>{users.name}</h1>
                            <p className='text-slate-300'>{users.email}</p>
                        </div>
                    </div>
                    <div className="switch">
                        <a href='#' className='text-blue-400'>Switch</a>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <h1 className='text-gray-300 font-medium'>Suggestion for you</h1>
                    <a href="#" className='text-blue-400 text-sm'>See All</a>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                    <div className="accountOption flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="images rounded-full overflow-hidden w-11 px-1 py-1 ring-1 ring-gray-700">
                                <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className='rounded-full' />
                            </div>
                            <div className="title">
                                <h1 className='text-white font-medium text-sm'>telkomschool.volleyball</h1>
                                <p className='text-slate-300 text-sm'>Followed by luckyindra_ + 2 more</p>
                            </div>
                        </div>
                        <div className="switch">
                            <a href='#' className='text-blue-400 text-sm'>Follow</a>
                        </div>
                    </div>
                    <div className="accountOption flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="images rounded-full overflow-hidden w-11 px-1 py-1 ring-1 ring-gray-700">
                                <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className='rounded-full' />
                            </div>
                            <div className="title">
                                <h1 className='text-white font-medium text-sm'>telkomschool.volleyball</h1>
                                <p className='text-slate-300 text-sm'>Followed by luckyindra_ + 2 more</p>
                            </div>
                        </div>
                        <div className="switch">
                            <a href='#' className='text-blue-400 text-sm'>Follow</a>
                        </div>
                    </div>
                    <div className="accountOption flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="images rounded-full overflow-hidden w-11 px-1 py-1 ring-1 ring-gray-700">
                                <img src="https://i1.wp.com/i.pinimg.com/originals/ec/e4/67/ece467004ed92a70fc2c26772431702c.jpg" alt="" className='rounded-full' />
                            </div>
                            <div className="title">
                                <h1 className='text-white font-medium text-sm'>telkomschool.volleyball</h1>
                                <p className='text-slate-300 text-sm'>Followed by luckyindra_ + 2 more</p>
                            </div>
                        </div>
                        <div className="switch">
                            <a href='#' className='text-blue-400 text-sm'>Follow</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightBar;