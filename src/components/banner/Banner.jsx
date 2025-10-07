import React from 'react';
import playImg from '../../assets/playStore.png';
import appImg from '../../assets/appStore.png';
import bannerImg from '../../assets/hero.png';


const Banner = () => {
    return (
        <div className='w-11/12 mx-auto text-center mt-20'>
            <div className='text-center'>
                <h1 className='text-5xl md:text-7xl font-bold text-[#001931] mb-6'>We Build <br /> <span className='bg-linear-to-l to-[#632EE3] from-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-gray-500 w-2/3 mx-auto'>At GetSoft, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-5 py-10'>
                    <a href='https://play.google.com/' className="btn bg-white text-black border-[#e5e5e5]">
                        <img className='w-5' src={playImg} alt="play store" />
                        Google Play
                    </a>
                    <a href='https://apps.apple.com/' className="btn bg-white text-black border-[#e5e5e5]">
                        <img className='w-5' src={appImg} alt="app store" />
                        App Store
                    </a>
                </div>
            </div>
            <div className='mx-auto block'>
                <img className='w-[300px] md:w-[700px] mx-auto' src={bannerImg} alt="banner image" />
            </div>
        </div>
    );
};

export default Banner;