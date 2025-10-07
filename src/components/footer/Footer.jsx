import React from 'react';
import logoImg from '../../assets/logo.png';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='w-11/12 mx-auto py-10 text-white grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left'>
                <div>
                    <div className='flex items-center justify-center md:justify-start gap-2'>
                        <img className='w-7' src={logoImg} alt="GetSoft Logo" />
                        <h1 className='font-bold text-2xl'>GetSoft</h1>
                    </div>
                    <p className='text-sm/6 mt-3'>GetSoft is a simple and reliable platform to discover, download, and manage software. Find trusted apps for all your needs in one place.</p>
                </div>
                <div>
                    <h1 className='text-gray-400 text-lg font-medium mb-2'>Company</h1>
                    <ul className='flex flex-col gap-3 text-sm'>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Works</a></li>
                        <li><a href="/">Career</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-gray-400 text-lg font-medium mb-2'>Help</h1>
                    <ul className='flex flex-col gap-3 text-sm'>
                        <li><a href="/">Customer Support</a></li>
                        <li><a href="/">Developer</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-gray-400 text-lg font-medium mb-2'>Social Media</h1>
                    <ul className='flex flex-col items-center md:items-start gap-4 text-sm'>
                        <li><a className='flex items-center gap-2' href="https://www.facebook.com/subrotokumar17"><FaFacebook /> Facebook</a></li>
                        <li><a className='flex items-center gap-2' href="/"><FaYoutube /> Youtube</a></li>
                        <li><a className='flex items-center gap-2' href="https://github.com/SubrotoKumar7"><FaGithub /> Github</a></li>
                        <li><a className='flex items-center gap-2' href="https://www.linkedin.com/in/subrotokumar7/"><FaLinkedin /> Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-11/12 mx-auto text-center bg-black text-white pt-3 pb-10'>
                <p className='text-sm'>© Copyright 2025, All Rights Reserved by GetSoft</p>
            </div>
        </footer>
    );
};

export default Footer;