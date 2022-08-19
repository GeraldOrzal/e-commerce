import React from 'react'

export default function AccountItemList(props) {
  return (
    <div className='flex flex-row'>
                    <div className='flex flex-col w-1/5 p-5 ml-5'>
                      <img className='h-48 w-60 rounded-tr-md rounded-tl-md' src={props.image} />
                    </div>
                    <div className='flex flex-col w-4/5 space-y-2 self-center'>
                        <h1 className='font-bold'>{props.productname}</h1>
                        <h2>{props.brand}</h2>
                        <h2 className='mt-2'>{props.price}</h2>
                    </div>
                  </div>
  )
}
