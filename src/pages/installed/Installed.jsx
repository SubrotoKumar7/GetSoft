// import React, { useState } from 'react';
import { getLSData, removeLSData } from '../../utility/DB';
import { useLoaderData } from 'react-router';
import InstalledApp from '../../components/installedApp/InstalledApp';
import { BiSolidDownArrow } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { useState } from 'react';
import NotInstalled from '../../components/notInstalled/NotInstalled';

const Installed = () => {
    const allData = useLoaderData();
    const LSData = getLSData();
    const filterData = allData.filter(app=> LSData.includes((app.id).toString()));
    const [store, setStore] = useState(filterData);

    const handleRemove = (id, title) => {
        removeLSData(id);
        toast.info(`${title} uninstall successful`);
        const filterRemove = store.filter(app=> app.id !== Number(id));
        setStore(filterRemove);
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
                <h1 className='text-center text-5xl font-bold text-[#001931] mb-4'>Your Installed Apps</h1>
            <p className='text-center text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

            <div className='mt-10'>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-2xl font-semibold'>{LSData.length} Apps Found</p>
                    <div>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Sort By Downloads <BiSolidDownArrow /> </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>High-Low</a></li>
                                <li><a>Low-High</a></li>
                            </ul>
                        </div>
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