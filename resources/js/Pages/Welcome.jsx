import React from 'react';
import ProductCard from '@/Components/ProductCard';
import {GoSearch} from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import HeaderGuest from '@/Components/HeaderGuest';
import HeaderUser from '@/Components/HeaderUser';

export default function Welcome(props) {
    console.log(props.categories);
    return (
        <>
        <Head title="Welcome" />
        <div className='container p-10 pt-5 mx-auto '>
           
            {props.auth.user?
            <HeaderUser auth={props.auth}/ >: <HeaderGuest />}
            <main>
                <div className='container mx-auto flex flex-row justify-center items-center mb-7 '>
                    <div className='container bg-fourthdary p-32 py-20 w-3/6 text-center mr-2'>Ads</div>
                    <div className='container bg-fourthdary p-32 py-20 w-3/6 text-center'>Events</div>
                </div>
                <div className='text-lg text-fourthdary font-bold pl-2 mb-2 border-l-8 border-fifthdary'>Featured Products</div>
                <ProductCard/>
                <div className='text-lg text-fourthdary font-bold pl-2 mb-3 border-l-8 border-fifthdary'>Shop by Categories</div>
                <div className='grid grid-cols-6 grid-rows-2 auto-rows-max gap-2 mb-10'>
                    <div className='text-center bg-fourthdary p-20 col-start-1 col-end-3 row-start-1 row-end-3'>1</div>
                    <div className='text-center bg-fourthdary p-20 col-start-3 col-end-5'>2</div>
                    <div className='text-center bg-fourthdary p-20 col-start-5 col-end-7'>3</div>
                    <div className='text-center bg-fourthdary p-20 col-start-3 col-end-5'>4</div>
                    <div className='text-center bg-fourthdary p-20'>5</div>
                    <div className='text-center bg-fourthdary p-20'>6</div>
                </div>
                <div className='w-full bg-fourthdary p-52'>

                </div>
            </main>
        </div>
        </>
    );
}