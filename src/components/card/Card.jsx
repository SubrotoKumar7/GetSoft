import React from 'react';
import downloadImg from '../../assets/downloads.png';
import ratingImg from '../../assets/ratings.png';
import { useNavigate } from 'react-router';
import { abbreviateNumber } from 'js-abbreviation-number';

const Card = ({app}) => {
    const navigator = useNavigate();
    const {id, image, title, ratingAvg, downloads} = app;
    return (
        <div onClick={()=> navigator(`/details/${id}`)} className='cursor-pointer shadow-lg p-4 border border-white rounded-lg bg-white hover:scale-105'>
            <img className='w-full rounded' src={image} alt={`${title} images`} />
            <h1 className='text-xl font-medium my-4'>{title}</h1>
            <div className='flex justify-between gap-2'>
                <div className="btn py-1 px-2 bg-green-100 text-green-600">
                    <img className='w-4' src={downloadImg} alt="icon" />
                    {abbreviateNumber(downloads, 1)}
                </div>
                <div className="btn py-1 px-2 bg-amber-100 text-amber-600">
                    <img className='w-4' src={ratingImg} alt="icon" />
                    {ratingAvg}
                </div>
            </div>
        </div>
    );
};

export default Card;