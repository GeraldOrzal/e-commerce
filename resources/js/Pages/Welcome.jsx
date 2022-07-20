import React from 'react';
import Input from '../Components/Input';
import {GoSearch} from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
        <div className='w-full p-2 border m-auto '>
            <header className='container p-5 m-auto mb-2 flex flex-row justify-center items-center'>
                <img src='#' alt='LOGO' className='border mr-2'/>
                <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-3/5' placeholder='Search shop/product name'/>
                <button type='submit' className='bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-xl'><GoSearch/></button>
                <nav>
                <Link href={route('login')} className=" ml-4 underline text-fourthdary">
                    Log in
                </Link>
                <Link href={route('register')} className="ml-4 underline text-fourthdary">
                    Register
                </Link>
                </nav>
            </header>
            <main>
                <div className='flex flex-row'>
                    <div className='border border-secondary rounded-md p-20 w-3/6 text-center mr-2'>Ads</div>
                    <div className='border border-secondary rounded-md p-20 w-3/6 text-center'>Events</div>
                </div>
            </main>
        </div>
        </>
    );
}