import React from 'react'
import { Head,Link } from '@inertiajs/inertia-react';
import { BsArrowRight, BsArrowLeft,BsBag } from 'react-icons/bs';
export default function SellerNav(props) {
  return (
   <div className='flex flex-row'>
    <div className='flex flex-col bg-primary p-2 w-1/5 items-center space-y-5'>
        <Link>Analytics</Link>
        <Link>Products</Link>
        <Link>Shipment</Link>
        <Link>Orders</Link>
        <Link>Sale</Link>
        <Link>Review</Link>
        <Link>Inbox</Link>
        
    </div>
    {props.children}
   </div> 
  )
}
