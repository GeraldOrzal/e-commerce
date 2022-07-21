import React from 'react';
import Input from '../Components/Input';
import {GoSearch} from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    console.log(props.canLogin,props.canRegister);
    return (
        <>
        <div className='w-full p-10 pt-5 m-auto '>
            <header className='container p-5 m-auto mb-2 flex flex-row justify-center items-center'>
                <img src='#' alt='LOGO' className='mr-20'/>
                <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-3/5' placeholder='Search shop / product name'/>
                <button type='submit' className='bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-xl text-fourthdary'><GoSearch/></button>
                <nav>
                <Link href={route('login')} className=" ml-10 underline text-fourthdary">
                    Log in
                </Link>
                <Link href={route('register')} className="ml-4 underline text-fourthdary">
                    Register
                </Link>
                </nav>
            </header>
            <main>
                <div className='flex lg:flex-row justify-center items-center mb-7 space-x-2'>
                    <div className='bg-fourthdary rounded-md p-32 w-3/6 text-center'>Ads</div>
                    <div className='bg-fourthdary rounded-md p-32 w-3/6 text-center'>Events</div>
                </div>
                <div className='p-2 mb-2'>Featured Products</div>
                <div className='flex flex-row items-center space-x-2 overflow-x-scroll mb-7'>
                    <div className='p-32 bg-fourthdary rounded-md'>1</div>
                    <div className='p-32 bg-fourthdary rounded-md'>2</div>
                    <div className='p-32 bg-fourthdary rounded-md'>3</div>
                    <div className='p-32 bg-fourthdary rounded-md'>4</div>
                    <div className='p-32 bg-fourthdary rounded-md'>5</div>
                    <div className='p-32 bg-fourthdary rounded-md'>6</div>
                    <div className='p-32 bg-fourthdary rounded-md'>7</div>
                    <div className='p-32 bg-fourthdary rounded-md'>8</div>
                    <div className='p-32 bg-fourthdary rounded-md'>9</div>
                    <div className='p-32 bg-fourthdary rounded-md'>10</div>
                </div>
                <div className='p-2 mb-2'>Shop by Categories</div>
                <div className='grid grid-cols-6 grid-rows-2 auto-rows-max gap-3 mb-10'>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-1 col-end-3 row-start-1 row-end-3'>1</div>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-3 col-end-5'>2</div>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-5 col-end-7'>3</div>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-3 col-end-5'>4</div>
                    <div className='text-center bg-fourthdary rounded-md p-20'>5</div>
                    <div className='text-center bg-fourthdary rounded-md p-20'>6</div>
                </div>
                <div className='w-full bg-fourthdary rounded-md p-52'>

                </div>
            </main>
        </div>
        </>
    );
}