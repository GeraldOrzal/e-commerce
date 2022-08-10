import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import { GoSearch } from 'react-icons/go';
import { Link } from '@inertiajs/inertia-react';
export default function SearchBar(props) {
  return (
    <>
        <Link href={props.auth.user ? route('shop'):route("index")}>
        <ApplicationLogo className="mr-20" />
        </Link>
                    <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-3/5' placeholder='Search shop / product name' />
                    <button type='submit' className='bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-fourthdary'><GoSearch className='text-xl' /></button>
                    <nav>
                        {
                            props.auth.user ?<>
                            <Link href={route('shop')} className=" ml-10 underline text-fourthdary">
                                    Shop
                                </Link> 
                                <img src="" />
                            </>
                                :
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
    </>
  )
}
