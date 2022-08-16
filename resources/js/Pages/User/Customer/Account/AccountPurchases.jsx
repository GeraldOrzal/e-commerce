import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import { Link } from '@inertiajs/inertia-react';
export default function AccountPurchases(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='flex flex-col w-4/5 space-y-5 my-5'>
          <div className='grid grid-cols-6 border h-max rounded shadow-xl  mr-5 py-5 bg-primary text-center font-bold'>
            <Link className=''>All</Link>
            <Link className=''>All</Link>
            <Link className=''>All</Link>
            <Link className=''>All</Link>
            <Link className=''>All</Link>
            <Link className=''>All</Link>
          </div> 
          <div className=' border h-max rounded shadow-xl mr-5 p-5 bg-primary'>
            asd
          </div>
        </div>
           
          
         
        

      </AccountNav>
    </Authenticated>
  )
}
