import React from 'react';
import Input from '../Components/Input';
import {GoSearch} from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';

import sampleprod from '../images/bag.webp';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome(props) {
    console.log(props.categories);
    return (
        <>
        <div className='container p-10 pt-5 mx-auto '>
            <header className='container p-5 mx-auto mb-2 flex flex-row justify-center items-center'>
                <ApplicationLogo className={" mr-20"}/>
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
                <div className='container mx-auto flex lg:flex-row justify-center items-center mb-7 space-x-2'>
                    <div className='container bg-fourthdary p-32 py-20 w-3/6 text-center'>Ads</div>
                    <div className='container bg-fourthdary p-32 py-20 w-3/6 text-center'>Events</div>
                </div>
                <div className='text-lg text-fourthdary font-bold pl-2 mb-2 border-l-8 border-fifthdary'>Featured Products</div>
                <div className='flex flex-row items-center space-x-2 overflow-x-scroll p-2 mb-7'>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>1</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>2</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>3</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>4</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>5</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>6</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>7</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>8</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>9</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-thirdary rounded-tr-md rounded-tl-md container p-24 px-28'>10</div>
                        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container p-10 px-28'></div>
                    </div>
                </div>
                <div className='text-lg text-fourthdary font-bold pl-2 mb-2 border-l-8 border-fifthdary'>Shop by Categories</div>
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