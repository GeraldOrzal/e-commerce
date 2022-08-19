import React from 'react'
import Button from './Button'

export default function AccountDeliveryAddress(props) {
  return (
    <div className='flex flex-row  border rounded shadow-xl m-5 bg-primary space-y-3'>
    <div className='flex flex-col p-5 w-4/5 space-y-3'>
      <h1 className='font-bold'>{props.name}</h1>
      <h2>{props.number}</h2>
      <h2>{props.address}</h2>
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
  )
}
