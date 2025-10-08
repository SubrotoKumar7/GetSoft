import React from 'react';
import errorImg from '../../assets/Error.png';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='text-center my-20'>
            <img className='mx-auto mb-4' src={errorImg} alt="app not found images" />
            <h1 className='text-5xl font-semibold text-[#001931] mb-4'>OPPS! APP NOT FOUND</h1>
            <p className='text-center text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <div className='flex justify-center mt-10'>
                <Link to='/' className="btn bg-gradient-to-bl to-[#632EE3] from-[#9F62F2] text-white">Go Back!</Link>
            </div>
        </div>
    );
};

export default NotFound;