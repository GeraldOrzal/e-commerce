import React from 'react'
import { Link } from '@inertiajs/inertia-react';
export default function AccountNav(props) {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <h2>{props.username}</h2>
            <h1>My Account</h1>
            <ul className='flex flex-col ml-2'>
                <Link href={route('manage')}>Profile</Link>
                <Link href={route('delivery')}>Delivery Address</Link>
                <Link href={route('payment')}>Payment Options</Link>
                <Link href={route('passwordchange')}>Change Password</Link>
            </ul>
            <Link href={route('purchases')}>My Purchases</Link>
            <Link href={route('wishlist')}>Wishlists</Link>
            <Link >Start Business</Link>
        </div>
        {props.children}
    </div>
  )
}
