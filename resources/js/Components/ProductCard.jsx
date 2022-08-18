import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function ProductCard(props, product) {
  return (
    <div className='flex flex-col hover:scale-105 transition'>
      <Link href={route('viewproduct', { id: props.productid })}>
        <img className='rounded-tr-md rounded-tl-md
        lg:h-48 lg:w-60 
        md:h-36 md:w-44 
        xs:h-28 xs:w-32' src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E" />
        <div className='bg-primary rounded-br-md rounded-bl-md shadow-lg z-10 p-2 space-y-2
        lg:w-60 
        md:w-44 
        xs:w-32'>
          <h3 className='w-fit font-bold 
          lg:text-lg
          md:text-base
          xs:text-xs'>{props.name}</h3>
          <div className=''>
            <h4>{props.brand}</h4>
            <label className='flex flex-row text-sm items-center 
            md:text-sm 
            xs:text-xs'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar className='mr-1' />
              3.0
            </label>
          </div>
          <div>
            <h2 className=' 
            lg:text-lg
            md:text-base
            xs:text-xs'>₱ {props.price}.00</h2>
            {props.discount && <><h2>{props.oldprice}</h2><h2>{props.percentage}%</h2></>}
          </div>
        </div>
      </Link>
    </div>

  )
}