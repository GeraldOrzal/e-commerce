import { Link } from '@inertiajs/inertia-react'
import React from 'react'


export default function ProductCard(props) {
  return (
    
      <div className='flex flex-col hover:scale-125 duration-300 '>
    
        <img className='object-cover h-48 w-60 rounded-t-lg' src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>  
        
        
        <div className='bg-fourthdary rounded-br-md rounded-bl-md  container w-60 p-2'>
          
          <Link
            href={route('viewproduct',{id:props.productid})}
          >
            <h3 className='font-bold text-lg'>{props.name}</h3>
          </Link>
          <div>
            <h4>{props.brand}</h4>
            <label>{props.rating}</label>
          </div>
          <div>
            <h2 className='font-bold text-base'>₱ {props.price}.00</h2>
            {props.discount &&<><h2>{props.oldprice}</h2><h2>{props.percentage}%</h2></>}
          </div>
        </div>
      </div>
    
  )
}
