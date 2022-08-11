import React,{useState} from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import { GoSearch } from 'react-icons/go';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from '@inertiajs/inertia-react';

import Dropdown from './Dropdown';
import { BsCart } from 'react-icons/bs';
export default function SearchBar(props) {
    const [results, setresults] = useState({
        data:null,
        isLoading:false
    })
    
    const onEnterText = async (data)=>{
        if(data.target.value==""){
            setresults({
                data:null,
                isLoading:false
            });
            return;
        }
        setresults({
            ...results.data,
            isLoading:true
        });
        const resdata = await (await fetch(`/api/products?product=${data.target.value}`)).json();
        setresults({
            data:resdata.data,
            isLoading:false
        });
    };
  return (
    <>
        <Link href={props.auth.user ? route('shop'):route("index")} className="mr-20">
        <ApplicationLogo  />
        </Link>
        <div className='flex flex-row items-center w-full justify-center'>
                        <div className='w-3/5 relative'>
                            <input type='text' className='bg-thirdary pl-5 outline-0 rounded-bl-xl p-2 w-full' placeholder='Search shop / product name' onChange={onEnterText}/>
                            <div className={`absolute bg-primary p-5 w-full ${results.data?'block':'hidden'} flex flex-col z-10`}>
                                   {results.data?.length!=0?results.data?.map((data)=><Link href={route('viewproduct',{id:data.productid})}>{data.productname}</Link>):"No data available"}
                            </div>
                        </div>

                        <button type='submit' className={`bg-thirdary rounded-tr-xl pr-5 px-2 py-2.5 text-fourthdary ${results.isLoading?'disabled':""}`}> {results.isLoading?<AiOutlineLoading  className='text-xl animate-spin'/>:<GoSearch className='text-xl' />}</button>
        </div>

                    <nav className='flex flex-row items-center space-x-5 w-2/5'>
                        {
                            props.auth.user ?<>
                            <Link href={route('cart')}>
                                <BsCart/>
                            </Link>
                            <Link href={route('shop')} className={`ml-10 underline text-fourthdary ${route().current()=="shop"?"font-bold":""}`}>
                                    Shop
                                </Link> 

                                <img className="w-5 h-5 rounded-full" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                                <Dropdown >
                                    <Dropdown.Trigger>
                                        <h2 className='text-xs w-full'>{props.auth.user.name}</h2>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content class>
                                        <Dropdown.Link href={route('manage')} method="get">Account</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as='button'>Log out</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>

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
