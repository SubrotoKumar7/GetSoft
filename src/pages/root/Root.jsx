import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loading from '../../components/loading/Loading';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    navigation.state === 'loading' ? <Loading></Loading> 
                    : 
                    <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;