import { Link } from '@inertiajs/inertia-react'
import React from 'react'


export default function ProductCard(props) {
  return (
    <div className='flex flex-col hover:scale-105 transition'>
      <Link href={route('viewproduct', { id: props.productid })}>
        <img className='h-48 w-60 rounded-tr-md rounded-tl-md' src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E" />
        <div className='bg-primary rounded-br-md rounded-bl-md shadow-lg w-60 p-2'>
          <h3 className='font-bold text-lg'>{props.name}</h3>
          <div>
            <h4>{props.brand}</h4>
            <label>{props.rating}</label>
          </div>
          <div>
            <h2 className='font-bold text-base'>₱ {props.price}.00</h2>
            {props.discount && <><h2>{props.oldprice}</h2><h2>{props.percentage}%</h2></>}
          </div>
        </div>
      </Link>
    </div>

  )
}