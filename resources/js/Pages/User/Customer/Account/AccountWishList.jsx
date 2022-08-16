import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Button from '@/Components/Button'
export default function AccountWishList(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    >
        <AccountNav
          Username={props.auth.user.name}
        >
          <div className='w-4/5 border-1 h-screen bg-primary rounded shadow-xl m-5 divide-y'>
            <div className='p-5 font-bold'>My Wishlist</div>
              <div className=' p-5 '>
              <div className='  border rounded shadow-xl  bg-primary space-y-3'>
                <div className=' divide-y'>
                  <div className='p-2 ml-5'>store name</div>
                  <div className='flex flex-col divide-y px-5'>
                  <div className='flex flex-row'>
                    <div className='flex flex-col w-1/5 p-5 ml-5'>
                      <img className='h-48 w-60 rounded-tr-md rounded-tl-md' src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E" />
                    </div>
                    <div className='flex flex-col w-3/5 space-y-2 mt-2'>
                      <div className='mt-5'>
                        <h1 className='font-bold'>T-SHIRT</h1>
                        <h2>BRAND NAME</h2>
                        <h2 className='mt-5'>P5,000</h2>
                      </div>
                      <div className='mt-10'>
                        <Button className='w-1/6 mt-5 bg-neutral3'>Delete</Button>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/5 p-5 items-center self-center'>
                      <Button className='w-3/4 disable bg-neutral3'>Add to Cart</Button>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='flex flex-col w-1/5 p-5 ml-5'>
                      <img className='h-48 w-60 rounded-tr-md rounded-tl-md' src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E" />
                    </div>
                    <div className='flex flex-col w-3/5 space-y-2 mt-2'>
                      <div className='mt-5'>
                        <h1 className='font-bold'>T-SHIRT</h1>
                        <h2>BRAND NAME</h2>
                        <h2 className='mt-5'>P5,000</h2>
                      </div>
                      <div className='mt-10'>
                        <Button className='w-1/6 mt-5 bg-neutral3'>Delete</Button>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/5 p-5 items-center self-center'>
                      <Button className='w-3/4 disable bg-neutral3'>Add to Cart</Button>
                    </div>
                  </div>
                  </div>
                </div>
                
              </div>
              </div>
            
          </div>          
        </AccountNav>
    </Authenticated>
  )
}
