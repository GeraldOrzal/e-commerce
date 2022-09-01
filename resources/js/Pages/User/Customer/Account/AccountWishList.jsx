import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Button from '@/Components/Button'
import AccountStoreList from '@/Components/AccountStoreList'
export default function AccountWishList(props) {
  

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='w-4/5  h-max bg-primary rounded shadow-xl m-5 divide-y'>
          {props.message.message&&<div>{props.message.message}</div>}
          <div className='p-5 font-bold'>My Wishlist</div>
          <div className='p-5 space-y-5'>
            {
              Object.keys(props.cart).map((storename)=>
              <AccountStoreList
                iswishlist={true}
                storename={storename}
                itemlist={props.cart[storename]}
              />)
            }
          </div>
        </div>
      </AccountNav>
    </Authenticated>
  )
}
