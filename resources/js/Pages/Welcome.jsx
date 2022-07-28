import React from 'react';
import ProductCard from '@/Components/ProductCard';
import {GoSearch} from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Input from '@/Components/Input';
import Footer from '@/Components/Footer';

export default function Welcome(props) {
    console.log(props.categories);
    return (
        <>
        <Head title="Welcome" />
            <header className='w-full mx-auto mb-2 p-2 flex flex-row justify-center items-center'>
                <ApplicationLogo className="ml-7 mr-10"/>
                <Input type='text' className='pl-5 rounded-bl-xl p-2 w-full' placeholder='Search shop / product name'/>
                <button type='submit' className='bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-fourthdary'><GoSearch className='text-xl'/></button>
                <nav>
                {
                    props.auth.user? 
                    <Link href={route('shop')} className=" ml-10 underline text-fourthdary">
                    Shop
                </Link>:
                <>
                <Link href={route('login')} className="ml-10 underline text-fourthdary">
                        Login
                    </Link>
                    <Link href={route('register')} className="ml-4 mr-5 underline text-fourthdary">
                        Register
                    </Link>
                </>
                }        
                </nav>
            </header>
            <div className='w-full p-5 mx-auto '>
            <main>
                <div className='w-full mx-auto mb-7 flex
                md:flex-row 
                sm:flex-col 
                xs:flex-col 
                justify-center items-center '>
                    <div className='bg-fourthdary p-32 py-20 text-center 
                    md:mr-2
                    md:mb-0
                    md:w-3/6
                    sm:mr-0
                    sm:mb-2
                    sm:w-full
                    xs:mr-0
                    xs:mb-2
                    xs:w-full'>Ads</div>
                    <div className='bg-fourthdary p-32 py-20 text-center
                    md:w-3/6
                    sm:w-full
                    xs:w-full'>Events</div>
                </div>
                <div className='text-lg text-fourthdary font-bold pl-2 mb-2 border-l-8 border-fifthdary'>Featured Products</div>
                <ProductCard/>
                <div className='text-lg text-fourthdary font-bold pl-2 mb-3 border-l-8 border-fifthdary'>Shop by Categories</div>
                <div className='grid grid-cols-6 grid-rows-auto gap-2 mb-10'>
                    <div className='text-center bg-fourthdary p-20 
                    lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3
                    md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3
                    sm:col-start-1 sm:col-end-7 sm:row-start-1 sm:row-end-7
                    xs:col-start-1 xs:col-end-7 xs:row-start-1 xs:row-end-7
                    '>1</div>
                    <div className='text-center bg-fourthdary p-20 
                    lg:col-start-3 lg:col-end-5
                    md:col-start-3 md:col-end-7
                    sm:col-start-1 sm:col-end-4
                    xs:col-start-1 xs:col-end-4
                    '>2</div>
                    <div className='text-center bg-fourthdary p-20 
                    lg:col-start-5 lg:col-end-7
                    md:col-start-3 md:col-end-7
                    sm:col-start-4 sm:col-end-7
                    xs:col-start-4 xs:col-end-7
                    '>3</div>
                    <div className='text-center bg-fourthdary p-20 
                    lg:col-start-3 lg:col-end-5
                    md:col-start-1 md:col-end-7
                    sm:col-start-1 sm:col-end-7
                    xs:col-start-1 xs:col-end-7'>4</div>
                    <div className='text-center bg-fourthdary p-20
                    lg:col-start-5 lg:col-end-6 
                    md:col-start-1 md:col-end-4
                    sm:col-start-1 sm:col-end-4
                    xs:col-start-1 xs:col-end-4'>5</div>
                    <div className='text-center bg-fourthdary p-20
                    lg:col-start-6 lg:col-end-7 
                    md:col-start-4 md:col-end-7
                    sm:col-start-4 sm:col-end-7
                    xs:col-start-4 xs:col-end-7'>6</div>
                </div>
                <div className='w-full bg-fourthdary p-52'>

                </div>
            </main>
            <Footer/>
        </div>
        </>
    );
}