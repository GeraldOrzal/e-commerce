import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Button from '@/Components/Button'
import AccountStoreList from '@/Components/AccountStoreList'
export default function AccountWishList(props) {

  const wishlist = [
    {
      storename:"Hatdog",
      list:[
        {
          productname:"Red Tshirt",
          image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
          price:"P 5000",
          brand:"Gucci gang"
        },
        {
          productname:"Red Tshirt",
          image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
          price:"P 5000",
          brand:"Gucci gang"
        }
      ]
    }   
  ]
    
    
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='w-4/5 border h-max bg-primary rounded shadow-xl m-5 divide-y'>
          <div className='p-5 font-bold'>My Wishlist</div>
          <div className='p-5'>
            {
              wishlist.map(({storename,list})=>
              <AccountStoreList
                iswishlist={true}
                storename={storename}
                itemlist={list}
              />)
            }
          </div>
        </div>
      </AccountNav>
    </Authenticated>
  )
}
