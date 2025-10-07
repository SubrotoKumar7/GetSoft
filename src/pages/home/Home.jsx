import React from 'react';
import Banner from '../../components/banner/Banner';
import Info from '../../components/info/Info';
import { Link, useLoaderData } from 'react-router';
import Card from '../../components/card/Card';

const Home = () => {
    const appsData = useLoaderData();
    const data = appsData.slice(0,8);
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <div className='my-[80px] w-11/12 mx-auto'>
                <h1 className='text-center text-5xl font-bold text-[#001931] mb-4'>Trending Apps</h1>
                <p className='text-center text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                    {
                        data.map(app=> <Card key={app.id} app={app}></Card>)
                    }
                </div>
                <div className='flex justify-center mt-10'>
                    <Link to='/apps' className="btn bg-gradient-to-bl to-[#632EE3] from-[#9F62F2] text-white">Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;