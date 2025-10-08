import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../../components/card/Card';
import NotFound from '../../components/notFound/NotFound';

const App = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('');

    const searchResult = allData.filter(app=> ((app.title).toLowerCase()).includes((search).toLowerCase().trim()));

    const showAll = search.trim() === '';
    const displayData = showAll ? allData : searchResult;


    return (
        <div className='w-11/12 mx-auto my-20'>
            <h1 className='text-center text-5xl font-bold text-[#001931] mb-4'>Our All Applications</h1>
            <p className='text-center text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='mt-10'>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-2xl font-semibold'>({displayData.length}) Apps Found</p>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" onChange={(e)=> setSearch(e.target.value)} required placeholder="Search" />
                        </label>
                    </div>
                </div>

                <div>
                    {
                        (!showAll && searchResult.length === 0) ? 
                        <NotFound></NotFound>
                        : 
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {displayData.map(app => <Card key={app.id} app={app} />)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default App;