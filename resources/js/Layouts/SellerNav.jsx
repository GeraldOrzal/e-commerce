import React from 'react'
import { Head,Link } from '@inertiajs/inertia-react';
import { BsArrowRight, BsArrowLeft,BsBag } from 'react-icons/bs';
export default function SellerNav(props) {
  return (
   <div className='flex flex-row '>
    <div className='flex flex-col p-2 w-1/5 pl-10 space-y-10 '>
        <Link href={route('dashboardseller')} 
          
        >
          <BsBag className='mr-1 inline-block pb-1'/>
          Analytics
          </Link>
        <Link href={route('product')}>
        <BsBag className='mr-1 inline-block pb-1'/>
          Products</Link>
        <Link href={route('shipment')}>
        <BsBag className='mr-1 inline-block pb-1'/>
          Shipment</Link>
        <Link href={route('orders')}>
        <BsBag className='mr-1 inline-block pb-1'/>
          Orders</Link>
        <Link href={route('sale')}>
        <BsBag className='mr-1 inline-block pb-1'/>
          Sale</Link>
        <Link href={route('review')}>
        <BsBag className='mr-1 inline-block pb-1'/>
          Review</Link>
        <Link href={route('inbox')}>
        <BsBag className='mr-1 inline-block pb-1'/>
          Inbox</Link>
        
    </div>
    {props.children}
   </div> 
  )
}
