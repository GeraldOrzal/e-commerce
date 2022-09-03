import React from 'react'
import { Head, Link } from '@inertiajs/inertia-react';
import { BsArrowRight, BsArrowLeft, BsBag } from 'react-icons/bs';
import { MdInbox, MdMonetizationOn, MdMoney, MdMoneyOffCsred, MdNotes, MdOutlineAnalytics, MdOutlineLocalShipping, MdReviews } from 'react-icons/md';
export default function SellerNav(props) {
  return (
    <div className='w-1/5 h-screen flex flex-row shadow text-lg-2xl'>
      <div className='w-full flex flex-col space-y-6'>
        <Link href={route('dashboardseller')}
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <MdOutlineAnalytics className='mr-1'/>
          Analytics
        </Link>
        <Link href={route('product')} 
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <BsBag className='mr-1'/>
          Products</Link>
        <Link href={route('shipment')}
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <MdOutlineLocalShipping className='mr-1'/>
          Shipment</Link>
        <Link href={route('orders')}
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <MdNotes className='mr-1'/>
          Orders</Link>
        <Link href={route('sale')}
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <MdMonetizationOn className='mr-1'/>
          Sale</Link>
        <Link href={route('review')}
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <MdReviews className='mr-1'/>
          Review</Link>
        <Link href={route('inbox')}
        className='w-full flex flex-row items-center pl-8 py-2 shadow text-lg'>
          <MdInbox className='mr-1'/>
          Inbox</Link>
      </div>
      {props.children}
    </div>
  )
}
