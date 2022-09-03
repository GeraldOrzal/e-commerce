import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import SellerNav from '@/Layouts/SellerNav';

function ChatItem(props) {
    return (<div className='flex flex-row space-x-2'>
        <img className="w-5 h-5 rounded-full" src={props.image} />
        <h3>{props.name}</h3>
    </div>);
}


export default function Dashboard(props) {

    const userchat = [
        {
            name:"Gerald Orzal",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        },
        {
            name:"Jan Antonio",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        },
        {
            name:"Jd",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        },
        
    ]
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />
            <div className='flex flex-row'>
                <SellerNav />
                <div className='w-4/5 flex flex-col p-5 space-y-5'>
                    <h1 className='text-4xl text-secondary'>Welcome Back!</h1>
                    <div className='flex flex-row items-center space-x-3'>
                        <div className='flex flex-col items-center justify-center shadow bg-primary p-3 rounded w-1/6 h-28'>
                            <h3 className='text-xs mb-2'>Number of Orders</h3>
                            <h2 className='font-bold text-4xl'>356</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center shadow bg-primary p-3 rounded w-1/6 h-28'>
                            <h3 className='text-xs mb-2'>Unpaid</h3>
                            <h2 className='font-bold text-4xl'>356</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center shadow bg-primary p-3 rounded w-1/6 h-28'>
                            <h3 className='text-xs mb-2'>Sold out Products</h3>
                            <h2 className='font-bold text-4xl'>356</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center shadow bg-primary p-1 rounded w-1/6 h-28'>
                            <h3 className='text-xs mb-2'>Pending Return/ Refunds</h3>
                            <h2 className='font-bold text-4xl'>356</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center shadow bg-primary p-2 rounded w-1/6 h-28'>
                            <h3 className='text-xs mb-2'>Processed Shipment</h3>
                            <h2 className='font-bold text-4xl'>356</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center shadow bg-primary p-1 rounded w-1/6 h-28'>
                            <h3 className='text-xs mb-2'>Unprocessed Shipment</h3>
                            <h2 className='font-bold text-4xl'>356</h2>
                        </div>


            >
                <div className='container-fluid flex-1 flex-col p-5 space-y-5'>
                    Welcome Back!
                    <div className='flex flex-row items-center space-x-3'>
                        <div className='text-center shadow shadow-md bg-primary p-3 rounded w-1/6 h-15'>
                            <h3 className='text-xs'>Number of Orders</h3>
                            <h2 className='font-bold text-md'>{props.numberoforders ?? 0}</h2>
                        </div>
                        <div className='text-center shadow shadow-md bg-primary p-3 rounded w-1/6 h-15'>
                            <h3 className='text-xs'>Unpaid</h3>
                            <h2 className='font-bold text-md'>{props.numberofunpaid ?? 0}</h2>
                        </div>
                        <div className='text-center shadow shadow-md bg-primary p-3 rounded w-1/6 h-15'>
                            <h3 className='text-xs'>Sold out Products</h3>
                            <h2 className='font-bold text-md'>356</h2>
                        </div>
                        <div className='text-center shadow shadow-md bg-primary p-1 rounded w-1/6 h-15'>
                            <h3 className='text-xs'>Pending Return/ Refunds</h3>
                            <h2 className='font-bold text-md'>356</h2>
                        </div>
                        <div className='text-center shadow shadow-md bg-primary p-2 rounded w-1/6 h-15'>
                            <h3 className='text-xs'>Processed Shipment</h3>
                            <h2 className='font-bold text-md'>356</h2>
                        </div>
                        <div className='text-center shadow shadow-md bg-primary p-1 rounded w-1/6 h-15'>
                            <h3 className='text-xs'>Unprocessed Shipment</h3>
                            <h2 className='font-bold text-md'>356</h2>
                        </div>


                    </div>

                    <div className='grid grid-cols-3 gap-x-5 justify-center'>
                        <div className='flex flex-col bg-primary shadow p-5 rounded-md'>
                            <div className='flex flex-row space-x-auto'>
                                <h1>Chats</h1>
                                <Link>See all</Link>
                            </div>

                            <div className='flex flex-row space-x-2'>
                                <img className="w-5 h-5 rounded-full" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" />
                                <h3>Gerald Orzal</h3>
                            </div>

                        </div>
                        <div className='flex flex-col bg-primary shadow p-5 rounded-md'>
                            <h1>Generated Income</h1>

                        </div>
                        <div className='flex flex-col bg-primary shadow p-5 rounded-md'>
                            <h1>Business Insight</h1>
                        </div>

                    </div>
                </div>
            </div>

        </Authenticated>
    );
}
