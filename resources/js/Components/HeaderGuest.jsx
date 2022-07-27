import React from "react";
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/inertia-react';
import Input from '../Components/Input';
import { GoSearch } from 'react-icons/go';

function HeaderGuest() {
    return (
        <section>
            <section className="container flex flex-row justify-end space-x-5">
                <a className="ml-4 underline text-fourthdary" href="#">About Us</a>
                <a className="ml-4 underline text-fourthdary" href="#">Contact Us</a>
            </section>

            <section className="container pb-5 mx-auto mb-2 flex flex-row justify-center items-center">
                <Link className="mr-20" href="/">
                    <ApplicationLogo />
                </Link>
                <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-3/5' placeholder='Search shop / product name' />
                <button type='submit' className='bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-xl text-fourthdary mr-10' ><GoSearch /></button>
                <div>
                <Link href={route('login')} className="ml-4 underline text-fourthdary">
                        Login
                    </Link>
                    <Link href={route('register')} className="ml-4 underline text-fourthdary">
                        Register
                    </Link>
                </div>



            </section>
        </section>

    )
}

export default HeaderGuest;