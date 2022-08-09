import React,{useState} from 'react';
import ProductCard from '@/Components/ProductCard';
import { GoSearch } from 'react-icons/go';
import { Link, Head } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import HeaderGuest from '@/Components/HeaderGuest';
import HeaderUser from '@/Components/HeaderUser';

export default function Welcome(props) {
    const [hoverCategory, sethoverCategory] = useState(false);

    console.log(hoverCategory);
    return (
        <>
        <Head title="Welcome" />
        <div className='container p-10 pt-5 mx-auto '>
            <header className='container p-5 mx-auto mb-2 flex flex-row justify-center items-center'>
                <ApplicationLogo className="mr-20"/>
                <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-3/5' placeholder='Search shop / product name'/>
                <button type='submit' className='bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-fourthdary'><GoSearch className='text-xl'/></button>
                <nav>
                {
                    props.auth.user? 
                    <Link href={route('shop')} className=" ml-10 underline text-fourthdary">
                    Shop
                </Link>:
                <>
                <Link href={route('login')} className="ml-4 underline text-fourthdary">
                        Login
                    </Link>
                    <Link href={route('register')} className="ml-4 underline text-fourthdary">
                        Register
                    </Link>
                </>
                }        
                </nav>
            </header>
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