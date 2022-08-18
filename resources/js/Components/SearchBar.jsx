import React, { useState } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import { GoSearch } from 'react-icons/go';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from '@inertiajs/inertia-react';
import Dropdown from './Dropdown';
import { BsBell, BsCart3, BsShopWindow } from 'react-icons/bs';
export default function SearchBar(props) {
    const [results, setresults] = useState({
        data: null,
        isLoading: false
    })

    const onEnterText = async (data) => {
        if (data.target.value == "") {
            setresults({
                data: null,
                isLoading: false
            });
            return;
        }
        setresults({
            ...results.data,
            isLoading: true
        });
        const resdata = await (await fetch(`/api/products?product=${data.target.value}`)).json();
        setresults({
            data: resdata.data,
            isLoading: false
        });
    };
    return (
        <>
            <div className='flex flex-row items-center w-full justify-center'>
                <Link href={props.auth.user ? route('shop') : route("index")} className=" 
                lg:mr-10 lg:w-20 lg:h-20
                sm:mr-4 sm:w-16 sm:h-16
                xs:mr-1 xs:w-10 xs:h-10">
                    <ApplicationLogo className='' />
                </Link>
                <div className='w-1/2 relative'>
                    <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-full
                     md:text-base
                     xs:text-sm' placeholder='Search shop / product name' onChange={onEnterText} />
                    <div className={`absolute bg-primary p-5 w-full ${results.data ? 'block' : 'hidden'} flex flex-col z-10`}>
                        {results.data?.length != 0 ? results.data?.map((data) => <Link href={route('viewproduct', { id: data.productid })}>{data.productname}</Link>) : "No data available"}
                    </div>
                </div>
                <button type='submit' className={`bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-fourthdary ${results.isLoading ? 'disabled' : ""}`}> {results.isLoading ? <AiOutlineLoading className='animate-spin
                 md:text-xl
                 xs:text-base' /> : <GoSearch className='
                 md:text-xl
                 xs:text-base' />}</button>
                <nav className='flex flex-row items-center'>
                    {
                        props.auth.user ? <>
                            <div className='flex flex-row items-center justify-center 
                              lg:ml-10
                              sm:ml-4
                              xs:ml-1'>
                                <Link href={route('cart')} className='text-xl mr-2'>
                                    <BsCart3 />
                                </Link>
                                <Link href={route('shop')} className={`underline mr-2 text-xl ${route().current() == "shop" ? "font-bold" : ""}`}>
                                    <BsShopWindow />
                                </Link>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <div className='flex flex-row items-center space-x-1'>
                                            <img className="rounded-full cursor-pointer
                                            md:w-6 h-5 md:mr-1
                                            xs:w-5 h-5 xs:mr-0" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E" />
                                            <h2 className='text-xs w-full cursor-pointer
                                        md:block 
                                        xs:hidden'>{props.auth.user.name}</h2>
                                        </div>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('manage')} method="get">Account</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as='button'>Log out</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>

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
            </div>
        </>
    )
}
