import React from 'react'
import { Link } from '@inertiajs/inertia-react';
import logo from '@/images/logo.png'
export default function AccountNav(props) {
  return (
    <div className='flex flex-row ' >
      <div className='w-1/5  flex flex-col space-evenly'>
        <div className='p-5'>
          <div className='flex items-center p-2'>
            <img className='w-20 h-20 mr-5 rounded-full' src={logo} />
            <h2>{props.Username}</h2>
          </div>
          <ul className='text-xl ml-2 mt-5 space-y-1' >
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link className='cursor-default'>My Account</Link></li>
            <ul className='flex flex-col ml-10 space-y-1'>
              <Link href={route('manage')}>Profile</Link>
              <Link href={route('delivery')}>Delivery Address</Link>
              <Link href={route('payment')}>Payment Options</Link>
              <Link href={route('passwordchange')}>Change Password</Link>
            </ul>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link href={route('purchases')}>My Purchases</Link></li>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link href={route('wishlist')}>Wishlists</Link></li>
            <li className='flex space-x-2'><img className='w-5 h-5' src={logo}/><Link >Start Business</Link></li>
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  )
}
