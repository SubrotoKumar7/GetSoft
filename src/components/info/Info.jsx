import React from 'react';

const Info = () => {
    return (
        <div className='bg-linear-to-l to-[#632EE3] from-[#9F62F2] py-20 text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-10'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center gap-17'>
                <div className='text-white'>
                    <p>Total Downloads</p>
                    <div className='font-extrabold text-5xl md:text-6xl my-3'>29.6M</div>
                    <p>21% more than last month</p>
                </div>
                <div className='text-white'>
                    <p>Total Reviews</p>
                    <div className='font-extrabold text-5xl md:text-6xl my-3'>906K</div>
                    <p>46% more than last month</p>
                </div>
                <div className='text-white'>
                    <p>Active Apps</p>
                    <div className='font-extrabold text-5xl md:text-6xl my-3'>132+</div>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Info;