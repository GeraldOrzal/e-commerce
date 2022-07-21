import React from 'react';
import Input from '../Components/Input';
import {GoSearch} from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    console.log(props.canLogin,props.canRegister);
    return (
        <>
            <Head title="Welcome" />
            <div className="relative bg-primary flex space-y-2 flex-col items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('shop')} className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
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
                <div className='grid grid-cols-6 grid-rows-2 auto-rows-max gap-3'>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-1 col-end-3 row-start-1 row-end-3'>1</div>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-3 col-end-5'>2</div>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-5 col-end-7'>3</div>
                    <div className='text-center bg-fourthdary rounded-md p-20 col-start-3 col-end-5'>4</div>
                    <div className='text-center bg-fourthdary rounded-md p-20'>5</div>
                    <div className='text-center bg-fourthdary rounded-md p-20'>6</div>
                </div>
            </div>
        </>
    );
}