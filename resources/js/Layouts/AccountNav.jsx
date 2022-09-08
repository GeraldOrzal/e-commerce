import React from 'react'
import { Link } from '@inertiajs/inertia-react';

export default function AccountNav(props) {
  return (
    <div className='flex flex-row'>
      <div className='w-1/5  flex flex-col space-evenly'>
        <div className='p-5'>
          <div className='flex items-center p-2'>
            <img className='w-20 h-20 mr-5 rounded-full' src={logo} />
            <h2>{props.Username}</h2>
          </div>
          <ul className='text-xl ml-2 mt-5 space-y-1' >
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link className='cursor-default'>My Account</Link></li>
            <ul className=' ml-10 space-y-1'>
              <li><Link href={route('manage')} className='hover:underline hover:text-[#0B237A]'>Profile</Link></li>
              <li><Link href={route('delivery')} className='hover:underline hover:text-[#0B237A]'>Delivery Address</Link></li>
              <li><Link href={route('payment')} className='hover:underline hover:text-[#0B237A]'>Payment Options</Link></li>
              <li><Link href={route('passwordchange')} className='hover:underline hover:text-[#0B237A]'>Change Password</Link></li>
            </ul>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link href={route('purchases')} className='hover:underline hover:text-[#0B237A]'>My Purchases</Link></li>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link className='hover:underline hover:text-[#0B237A]'>Offers</Link></li>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link href={route('wishlist')} className='hover:underline hover:text-[#0B237A]'>Wishlists</Link></li>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link className='hover:underline hover:text-[#0B237A]'>Start Business</Link></li>
          </ul>
        </div>
      </div>  
      {props.children}
    </div>
  )
}
