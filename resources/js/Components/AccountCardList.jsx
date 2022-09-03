import React from 'react'
import Button from './Button'

export default function AccountCardList(props) {
  return (
    <div className='flex flex-row rounded shadow-lg m-5 bg-primary space-y-3'>
    {props.isCredit?
      <div className='flex flex-col p-5 w-4/5 space-y-3'>
      <h1 className='font-bold'>{props.cardname}</h1>
      <h2>{props.cardnumber}</h2>
    </div>
    :
    <div className='flex flex-col p-5 w-4/5 space-y-3'>
      <h1 className='font-bold'>{props.bankname}</h1>
      <h2>{props.banknumber}</h2>
      <h2>{props.bankbranch}</h2>
    </div>
    }
    <div className='flex flex-col w-1/5 text-center'>
      <div className='flex flex-col items-end'>
        <Button className='w-2/5 mr-1 bg-neutral3 text-center'>Delete</Button>
      </div>
      <div className='flex flex-col items-center space-y-2 mb-5 mr-2'>
      <h2 className='underline text-[#0B237A]'>Edit</h2>
      <Button className='w-3/4 items-center bg-neutral3'>Set as Default</Button>  
      </div>
    </div>
  </div>
  )
}
