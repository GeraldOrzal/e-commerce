import React,{useState,useEffect} from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import { GoSearch } from 'react-icons/go';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from '@inertiajs/inertia-react';

import Dropdown from './Dropdown';
import { BsCart } from 'react-icons/bs';
import {FiBell} from 'react-icons/fi'
export default function SearchBar(props) {
    const initial = {
        data:null,
        isLoading:false,
        showIndex:0,
        islast:false
    }
    const [results, setresults] = useState(initial)
    const inputRef = React.createRef();
    const onEnterText = async (data)=>{
        if(data.target.value==""){
            setresults({
                islast:false,
                data:null,
                showIndex:0,
                isLoading:false
            });
            return;
        }
        setresults({
            ...results,
            isLoading:true
        });
        
        
        

            
        
        const  resdata = await (await fetch(`/api/products?product=${data.target.value}`)).json();
        
        setresults({
            ...results,
            islast:resdata.data.length<10?true:false,
            data:resdata.data,
            isLoading:false
        });
    };
    useEffect(() => {
      
    
      return () => {
        setresults(initial)
      }
    }, [])
    

    const showMore = async()=> {
        
        const  resdata = await (await fetch(`/api/products?product=${inputRef.current.value}&show=${results.showIndex + 1}`)).json();

        
        
        setresults({
            islast:resdata.data.length==0?true:false,
            data:[...results.data,...resdata.data],
            isLoading:false,
            showIndex: results.showIndex+1
        });
    };

    
  return (
    <>
        <Link href={props.auth.user ? route('shop',{page:1}):route("index")} className="mr-20 sm:block xs:hidden">
            <ApplicationLogo  />
        </Link>
        {
            props.auth.user?.usertypeid==2&&<h2>Merchant Center</h2>
        }
        {props.auth.user?.usertypeid!=2&&<div className='flex flex-row items-center w-full justify-center'>
                        <div className='sm:w-3/5 xs:w-full relative'>
                            <input ref={inputRef} type='text' className='bg-black bg-opacity-10 pl-5 outline-0 rounded-bl-xl p-2 w-full' placeholder='Search shop / product name' onChange={onEnterText} />
                            <div className={`absolute bg-primary p-5 w-full ${results.data?'block':'hidden'} flex flex-col z-10 shadow`} >
                                   {results.data?.length!=0?<>
                                    {results.data?.map((data,index)=><Link key={index} href={route('viewproduct',{id:data.productid})}>{data.productname}</Link>)}

                                    {!results.islast?<button onClick={showMore}
                                    >show more</button>:<label className='text-center font-bold'>---- Nothing to load ----</label>

                                    }
                                   </>:"No data available"}
                                   
                            </div>
                        </div>

                        <button type='submit' className={`bg-black bg-opacity-10 rounded-tr-xl pr-5 px-2 py-2.5 text-fourthdary ${results.isLoading?'disabled':""}`}> {results.isLoading?<AiOutlineLoading  className='text-xl animate-spin'/>:<GoSearch className='text-xl' />}</button>
        </div>}
        
                    <nav className='flex flex-row items-center space-x-5 w-2/5 sm:flex xs:hidden'>
                        {
                            props.auth.user ?<>
                               {props.auth.user.usertypeid!=2&&<>
                                <Link href={route('cart')}>
                                    <BsCart/>
                                </Link>
                                <Link href={route('shop',{page:1})} className={`ml-10 underline text-fourthdary ${route().current()=="shop"?"font-bold":""}`}>
                                    Shop
                                </Link> 
                               </>
                               }

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

                               {
                               props.auth.user.usertypeid==2&&<>
                                    <FiBell/>
                                    <div className='border py-5'>
                                    </div>
                                    <Button>Back to Shop</Button>
                               </>
                                
                               }

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