import React, { useState } from 'react';
import { getLSData, removeLSData } from '../../utility/DB';
import { useLoaderData } from 'react-router';
import InstalledApp from '../../components/installedApp/InstalledApp';
import { toast } from 'react-toastify';
import NotInstalled from '../../components/notInstalled/NotInstalled';

const Installed = () => {
    const allData = useLoaderData();
    const LSData = getLSData();
    const filterData = allData.filter(app=> LSData.includes((app.id).toString()));
    const [store, setStore] = useState(filterData);
    const [sort, setSort] = useState('');

    const handleRemove = (id, title) => {
        removeLSData(id);
        toast.info(`${title} uninstall successful`);
        const filterRemove = store.filter(app=> app.id !== Number(id));
        setStore(filterRemove);
    }

    const handleSort = (value) => {
        setSort(value);
        if (value === 'H2L') {
            const h2l = [...store].sort((a, b) => Number(b.downloads) - Number(a.downloads));
            setStore(h2l);
        } else if (value === 'L2H') {
            const l2h = [...store].sort((a, b) => Number(a.downloads) - Number(b.downloads));
            setStore(l2h);
        } else {
            setStore(filterData);
        }
    };


    return (
        <div className='w-11/12 mx-auto my-20'>
                <h1 className='text-center text-5xl font-bold text-[#001931] mb-4'>Your Installed Apps</h1>
            <p className='text-center text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

            <div className='mt-10'>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-2xl font-semibold'>{LSData.length} Apps Found</p>
                    <div className='w-[180px]'>
                        <select onChange={(e) => handleSort(e.target.value)} value={sort} className="select select-neutral w-full">
                            <option value='none'>Sort By Downloads</option>
                            <option value='H2L'>High to Low</option>
                            <option value='L2H'>Low to High</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                {
                    store.length === 0 ? <NotInstalled></NotInstalled> 
                    :
                    store.map(app => <InstalledApp key={app.id} app={app} handleRemove={handleRemove}></InstalledApp>)
                }
            </div>
        </div>
    );
};

export default Installed;