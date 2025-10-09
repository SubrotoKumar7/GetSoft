import React from 'react';
import { Link } from 'react-router';

const NotInstalled = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='text-5xl font-semibold text-[#001931] mb-4'>No Apps Currently Installed</h1>
            <p className='text-center text-xl text-[#627382]'>First go to apps page then install apps from there.</p>
            <div className='flex justify-center mt-10'>
                <Link to='/apps' className="btn bg-gradient-to-bl to-[#632EE3] from-[#9F62F2] text-white">Show Apps</Link>
            </div>
        </div>
    );
};

export default NotInstalled;