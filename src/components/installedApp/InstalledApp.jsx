import React from 'react';
import downArrow from '../../assets/downloads.png';
import ratingArrow from '../../assets/ratings.png';

const InstalledApp = ({app}) => {
    const {image, title, downloads, ratingAvg, size} = app;
    return (
        <div className='flex items-center justify-between gap-3 md:gap-5 my-6 bg-white p-2 rounded-lg shadow hover:shadow-xl'>
            <div className='flex justify-center items-center gap-1 md:gap-3'>
                <img className='w-17 md:w-20 h-17 md:h-20 rounded' src={image} alt="app logo" />
                <div>
                    <h1 className='md:text-xl font-medium text-[#001931] mb-4'>{title}</h1>
                    <div className='flex gap-1 md:gap-3'>
                        <div className='flex items-center gap-1 text-green-600'>
                            <img className='w-4' src={downArrow} alt="icon" />
                            <p className='font-medium'>{downloads}</p>
                        </div>
                        <div className='flex items-center gap-1 text-amber-600'>
                            <img className='w-4' src={ratingArrow} alt="icon" />
                            <p className='font-medium'>{ratingAvg}</p>
                        </div>
                        <div className='font-medium text-gray-500'>{size} MB</div>
                    </div>
                </div>
            </div>
            <div>
                <button className='bg-[#00D390] text-white font-semibold rounded py-2 px-3 hover:cursor-pointer'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;