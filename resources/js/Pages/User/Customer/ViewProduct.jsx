import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

export default function ViewProduct({auth,errors,product}) {
    
  return (
    <Authenticated
    auth={auth}
    errors={errors}
    header={<h2 className="font-semibold text-xl text-fourthdary leading-tight">View Product</h2>}
    >
        <div className='border w-full h-auto flex flex-row p-2'>
          <div className='h-96 w-3/5 border-danger grid grid-cols-5 grid-rows-5 gap-2 mr-2'>
            <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full border border-danger col-start-1 col-end-2 row-start-1 row-end-2'>1</div>
            <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full border border-danger col-start-1 col-end-2 row-start-2 row-end-3'>2</div>
            <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full border border-danger col-start-1 col-end-2 row-start-3 row-end-4'>3</div>
            <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full border border-danger col-start-1 col-end-2 row-start-4 row-end-5'>4</div>
            <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full border border-danger col-start-1 col-end-2 row-start-5 row-end-6'>5</div>
            <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full border border-danger col-start-2 col-end-6 row-start-1 row-end-6'>6</div>
          </div>
          <div className='w-2/5 h-full border border-danger'>
          <label>PRODUCTNAME:{product.productname}</label>
          <label>PRICE:{product.price}</label>
          </div>
        </div>
    </Authenticated>
  )
}
