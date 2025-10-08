import React from 'react';
import invalidImg from '../../assets/404.png';
import { Link } from 'react-router';

const InvalidPath = () => {
    return (
        <div className='text-center my-20'>
            <img className='mx-auto mb-4' src={invalidImg} alt="app not found images" />
            <h1 className='text-5xl font-semibold text-[#001931] mb-4'>Oops, page not found!</h1>
            <p className='text-center text-xl text-[#627382]'>The page you are looking for is not available.</p>
            <div className='flex justify-center mt-10'>
                <Link to='/' className="btn bg-gradient-to-bl to-[#632EE3] from-[#9F62F2] text-white">Go Back!</Link>
            </div>
        </div>
    );
};

export default InvalidPath;