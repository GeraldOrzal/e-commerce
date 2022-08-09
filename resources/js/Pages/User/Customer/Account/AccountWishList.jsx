import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
export default function AccountWishList(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    >
        <AccountNav
          Username={props.auth.user.name}
        >
          <div className='w-4/5 h-full border-1 rounded shadow-lg m-5'>
            Wishlist
          </div>          
        </AccountNav>
    </Authenticated>
  )
}
