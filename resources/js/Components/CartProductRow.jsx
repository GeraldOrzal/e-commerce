import React from 'react'
import Checkbox from '@/Components/Checkbox'
import { BsArrowUpLeft } from 'react-icons/bs'
import { Link } from '@inertiajs/inertia-react'
export default function CartProductRow(props) {
    return (
    <div className='flex flex-row items-center w-full space-x-8 shadow py-4 px-6'>
        <Checkbox handleChange={props.handleChange} value={props.id} name="product"/>
        <div className='w-44'>
            <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"  className='rounded-md'/>
        </div>
        <ul className='w-4/5'>
            <li>{props.productname}</li>
            {props.brand & <li>{props.brand}</li>}
            <li>{props.price}</li>
            <li>{`Order Placed on: ${props.date}`}</li>
            <li>{`Ship To: ${props.address}`}</li>
        </ul>
        <div>
            <h2 className='text-sm'>{`Order Number: ${props.ordernumber}`}</h2>
            <Link className="font-bold text-sm" >View Order Details</Link>
        </div>
    </div>);
}

