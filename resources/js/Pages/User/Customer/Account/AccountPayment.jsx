import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
export default function AccountPayment(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    >
        <AccountNav
          Username={props.auth.user.name}
        >
          <div className='w-4/5 border-1 h-screen rounded shadow-xl m-5 divide-y bg-primary '>
            <div className='p-5 grid grid-cols-2'>
              <h2 className=' font-bold '>Credit / Debit Card</h2>
              <h2 className='text-end font-bold rounded cursor-pointer text-[#0B237A]'>+</h2>
            </div>
            <div className='p-5'>
 
            </div>
            <div className='p-5 grid grid-cols-2'>
              <h2 className=' font-bold '>Bank Details</h2>
              <h2 className='text-end font-bold rounded cursor-pointer text-[#0B237A]'>+</h2>
            </div>
            <div className='p-5'>

            </div>
          </div>    
        </AccountNav>
    </Authenticated>
  )
}
