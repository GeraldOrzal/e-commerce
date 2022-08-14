import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head,Link } from '@inertiajs/inertia-react';
import SellerNav from '@/Layouts/SellerNav';
export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <SellerNav

            >
                <div className='container-fluid flex-1 flex-col p-5 space-y-5'>
                Welcome Back!
                <div className='flex flex-row items-center space-x-3'>
                    <div className='text-center shadow shadow-md bg-primary p-3 rounded w-1/6 h-15'>
                        <h3 className='text-xs'>Number of Orders</h3>
                        <h2 className='font-bold text-md'>356</h2>
                    </div>
                    <div className='text-center shadow shadow-md bg-primary p-3 rounded w-1/6 h-15'>
                        <h3 className='text-xs'>Unpaid</h3>
                        <h2 className='font-bold text-md'>356</h2>
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
                    <div className='flex flex-col bg-primary'>
                        <div className='flex flex-row'>
                            <h1>Chats</h1>
                            <Link>See all</Link>
                        </div>
                        <div className='flex flex-row'>
                            <img />
                            <h3>Gerald Orzal</h3>
                        </div>
                    </div>
                    <div className='flex flex-col bg-primary'>
                        <h1>Generated Income</h1>
                        
                    </div>
                    <div className='flex flex-col bg-primary'>
                        <h1>Business Insight</h1>
                    </div>

                </div>


                </div>
                


            </SellerNav>
            

            

        </Authenticated>
    );
}
