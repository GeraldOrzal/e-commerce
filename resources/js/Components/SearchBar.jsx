import React, { useState, useEffect } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import { GoSearch } from 'react-icons/go';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from '@inertiajs/inertia-react';
import Dropdown from './Dropdown';
import { BsCart, BsShopWindow } from 'react-icons/bs';
import { FiBell } from 'react-icons/fi'
export default function SearchBar(props) {
    const initial = {
        data: null,
        isLoading: false,
        showIndex: 0,
        islast: false
    }
    const [results, setresults] = useState(initial)
    const inputRef = React.createRef();
    const onEnterText = async (data) => {
        if (data.target.value == "") {
            setresults({
                islast: false,
                data: null,
                showIndex: 0,
                isLoading: false
            });
            return;
        }
        setresults({
            ...results,
            isLoading: true
        });






        const resdata = await axios.get(`/api/products?product=${data.target.value}`);



        setresults({
            ...results,
            islast: resdata.data.data.length < 10 ? true : false,
            data: resdata.data.data,
            isLoading: false
        });
    };
    useEffect(() => {


        return () => {
            setresults(initial)
        }
    }, [])


    const showMore = async () => {

        const resdata = await axios.get(`/api/products?product=${inputRef.current.value}&show=${results.showIndex + 1}`);



        setresults({
            islast: resdata.data.data.length == 0 ? true : false,
            data: [...results.data, ...resdata.data.data],
            isLoading: false,
            showIndex: results.showIndex + 1
        });
    };


    return (
        <>
            {
                props.auth.user?.usertypeid == 2 && <header className='w-full mx-auto flex flex-row items-center shadow'>
                    <Link href='/' className="w-20 h-20 ml-7">
                        <ApplicationLogo className='w-20 h-20' />
                    </Link>
                    <h1 className='ml-2
                    md:text-4xl
                    md:block
                    sm:text-3xl
                    sm:block
                    xs:text-3xl
                    xs:hidden'>Merchant Center</h1>
                </header>
            }
            {props.auth.user?.usertypeid != 2 && <div className='mx-auto w-full flex items-center justify-center
            md:flex-row 
            sm:px-8
            xs:flex-col xs:px-0'>
                <Link href={props.auth.user ? route('shop', { page: 1 }) : route("index")} className=" 
                lg:w-20 lg:h-20
                md:w-16 md:h-16
                xs:w-28 xs:h-28">
                    <ApplicationLogo />
                </Link>
                <div className='flex w-full border border-transparent
                sm:flex-row sm:pl-6
                xs:flex-col xs:pl-0'>
                    <div className='flex flex-row justify-center  relative
                    sm:w-4/5 sm:px-0 
                    xs:w-full xs:px-2'>
                        <input ref={inputRef} type='text' className=' w-2/5 bg-black bg-opacity-10 pl-5 outline-0 rounded-bl-xl p-2 w-full
                    md:text-base
                    xs:text-sm' placeholder='Search shop / product name' onChange={onEnterText} />
                        <div className={`absolute top-full bg-primary p-5 w-full ${results.data ? 'block' : 'hidden'} flex flex-col z-10 shadow`} >
                            {results.data?.length != 0 ? <>
                                {results.data?.map((data, index) => <Link key={index} href={route('viewproduct', { id: data.productid })}>{data.productname}</Link>)}

                                {!results.islast ? <button onClick={showMore}
                                >show more</button> : <label className='text-center font-bold 
                            md:text-base
                            xs:text-sm'>---- Nothing to load ----</label>

                                }
                            </> : "No data available"}

                        </div>
                        <button type='submit' className={`bg-black bg-opacity-10 rounded-tr-xl pr-5 px-2 py-2.5 text-disable ${results.isLoading ? 'disabled' : ""}`}> {results.isLoading ? <AiOutlineLoading className='animate-spin
                md:text-xl 
                xs:text-base' /> : <GoSearch className='
                md:text-xl 
                xs:text-base'/>}</button>
                    </div>
                    <nav className='flex flex-row justify-center items-center space-x-4
                    sm:w-40 sm:mt-0
                    xs:w-full xs:mt-2'>
                        {
                            props.auth.user ? <>
                                {props.auth.user.usertypeid != 2 && <>
                                    <Link href={route('cart')} className='ml-2'>
                                        <BsCart className='text-xl' />
                                    </Link>
                                    <Link href={route('shop', { page: 1 })} className={`underline ${route().current() == "shop" ? "font-bold" : ""}`}>
                                        <BsShopWindow className='text-xl' />
                                    </Link>
                                </>
                                }
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <img className="w-7 h-7 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" />
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('manage')} method="get">{props.auth.user.name}</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as='button'>Log out</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>

                                {props.auth.user.usertypeid == 2 && <>
                                    <FiBell />
                                    <div className='border py-5'>
                                    </div>
                                    <Button>Back to Shop</Button>
                                </>

                                }

                            </>
                                :
                                <>
                                    <Link href={route('login')} className="ml-4 underline 
                                md:text-base
                                xs:text-sm">
                                        Login
                                    </Link>
                                    <Link href={route('register')} className="ml-4 underline
                                 md:text-base
                                 xs:text-sm">
                                        Register
                                    </Link>
                                </>
                        }
                    </nav>
                </div>
            </div>}
        </>
    )
}