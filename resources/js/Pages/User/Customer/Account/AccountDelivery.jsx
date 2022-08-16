import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Button from '@/Components/Button'
export default function AccountDelivery(props) {
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
              <h2 className=' font-bold '>Delivery Address</h2>
              <h2 className='justify-end text-end underline cursor-pointer text-[#0B237A]'>Add New Address</h2>
            </div>
            <div className='flex flex-col h-auto overflow-y-scroll '>
              <div className='flex flex-row  border rounded shadow-xl m-5 bg-primary space-y-3'>
                <div className='flex flex-col p-5 w-4/5 space-y-3'>
                  <h1 className='font-bold'>{props.auth.user.name}</h1>
                  <h2>09123456789</h2>
                  <h2>1234 Kahit saan st. Diyan, Diyan, Lang City</h2>
                </div>
                <div className='flex flex-col w-1/5 text-center '>
                  <div className='flex flex-col items-end'>
                    <Button className='w-2/5 mr-1 bg-neutral3 place-items-end'>Delete</Button>
                  </div>
                  <div className='flex flex-col items-center space-y-2'>
                  <h2 className='underline text-[#0B237A]'>Edit</h2>
                  <Button className='w-3/4 items-center bg-neutral3'>Set as Default</Button>  
                  </div>
                </div>
              </div>
              
              
          </div>
          </div>     
        </AccountNav>
    </Authenticated>
  )
}
