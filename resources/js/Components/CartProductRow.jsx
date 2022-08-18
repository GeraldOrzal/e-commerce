import React,{useRef,useEffect} from 'react'
import Checkbox from '@/Components/Checkbox'
import { BsArrowUpLeft } from 'react-icons/bs'
import { Link } from '@inertiajs/inertia-react'



export default function CartProductRow(props) {
    const ref = React.createRef();
    useEffect(() => {
    
        props.setRef(ref);
      return () => {
        
      }
    }, [props.handleChange])
        
    
    return (
    <div className='flex flex-row items-center w-full space-x-8 shadow py-4 px-6'>
        <Checkbox handleChange={props.handleChange} price={props.price} value={props.id} name="product" ref={ref} required={props.req}/>
        <div className='w-20 h-15'>
            <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"  className='object-contain'/>
        </div>
        <ul className='w-4/5'>
            <li>{props.productname}</li>
            {props.brand & <li>{props.brand}</li>}
            <li>{props.price}</li>
            <li>{`Order Placed on: ${props.date}`}</li>
            <li>{`Ship To: ${props.address}`}</li>
        </ul>
        <div >
            <h2 className='text-sm'>{`Order Number: ${props.ordernumber}`}</h2>
            <Link className="font-bold text-sm" >View Order Details</Link>
        </div>
    </div>);
}

