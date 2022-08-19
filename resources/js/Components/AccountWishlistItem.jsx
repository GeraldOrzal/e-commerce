import React from 'react'
import Button from './Button'

export default function AccountWishlistItem(props) {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-1/5 p-5 ml-5'>
        <img className='h-48 w-60 rounded-tr-md rounded-tl-md' src={props.image} />
      </div>
      <div className='flex flex-col w-3/5 space-y-2 mt-2'>
        <div className='mt-5'>
          <h1 className='font-bold'>{props.wishlistname}</h1>
          <h2>{props.brand}</h2>
          <h2 className='mt-5'>{props.price}</h2>
        </div>
        <div className='mt-10'>
          <Button className='w-1/6 mt-5 bg-neutral3'>Delete</Button>
        </div>
      </div>
      <div className='flex flex-col w-1/5 p-5 items-center self-center'>
        <Button className='w-3/4 disable bg-neutral3'>Add to Cart</Button>
      </div>
    </div>
  )
}
