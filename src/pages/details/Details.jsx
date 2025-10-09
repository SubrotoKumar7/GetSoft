import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/downloads.png';
import ratingIcon from '../../assets/ratings.png';
import reviewIcon from '../../assets/review.png';
import { abbreviateNumber } from 'js-abbreviation-number';
import ReviewChart from '../../components/chart/ReviewChart';
import { getLSData, setLSData } from '../../utility/DB';

const Details = () => {
    const { id } = useParams();
    const appsData = useLoaderData();
    const [isInstall, setIsInstall] = useState(false);

    const targetApp = appsData.find(app=> app.id == Number(id));
    const {title, companyName, category, image, description, size, reviews, ratingAvg, downloads,  ratings} = targetApp;

    const LSData = getLSData();
    const alreadyStore = LSData.includes(id);
    
    const handleInstall = () => {
        setIsInstall(true)
        setLSData(id, title);
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div>
                    <img className='w-[350px] rounded shadow-lg' src={image} alt={`${title} app logo`} />
                </div>
                <div>
                    <h1 className='font-bold text-3xl mb-2'>{title}</h1>
                    <p className='text-[#627382] font-medium text-xl'>Developed By <a className='text-purple-500 font-semibold hover:underline hover:underline-offset-4' href="/">{companyName}</a></p>
                    <p className='text-[#001931] mt-2 font-medium'>{category}</p>
                    <div className="divider"></div>
                    <div className='flex items-center gap-6 my-[30px]'>
                        <div className='w-[150px]'>
                            <img className='w-10' src={downloadIcon} alt="icon" />
                            <p className='my-2'>Downloads</p>
                            <p className='text-[#001931] font-extrabold text-3xl md:text-[40px]'>{abbreviateNumber(downloads, 1)}</p>
                        </div>
                        <div className='w-[150px]'>
                            <img className='w-10' src={ratingIcon} alt="icon" />
                            <p className='my-2'>Average Ratings</p>
                            <p className='text-[#001931] font-extrabold text-3xl md:text-[40px]'>{ratingAvg}</p>
                        </div>
                        <div className='w-[150px]'>
                            <img className='w-10' src={reviewIcon} alt="icon" />
                            <p className='my-2'>Total Reviews</p>
                            <p className='text-[#001931] font-extrabold text-3xl md:text-[40px]'>{abbreviateNumber(reviews, 1) }</p>
                        </div>
                    </div>
                    <button onClick={handleInstall} className={`bg-[#00D390] text-white py-3 px-5 rounded text-xl font-semibold ${(isInstall || alreadyStore) ? 'cursor-not-allowed bg-[#099669]' : 'cursor-pointer'}`}>
                        {(isInstall || alreadyStore) ? "Installed" : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <h1 className='text-2xl font-semibold text-[#001931]'>Ratings</h1>
                <ReviewChart ratings={ratings}></ReviewChart>
            </div>
            <div className="divider"></div>
            <div>
                <h1 className='text-2xl mb-6 font-semibold text-[#001931]'>Description</h1>
                <div>
                    <p className='leading-7 text-[#627382]'>{description} {description}</p>
                    <br />
                    <p className='leading-7 text-[#627382]'>{description} {description}</p>
                    <br />
                    <p className='leading-7 text-[#627382]'>{description} {description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;