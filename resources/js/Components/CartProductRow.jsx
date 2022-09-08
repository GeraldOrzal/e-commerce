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
    <div className='flex flex-row items-center w-full space-x-8 shadow py-4 px-6 rounded-md'>
        <Checkbox handleChange={props.handleChange} price={props.price} value={props.id} name="product" ref={ref} required={props.req}/>
        <div className='w-20 h-15'>
            <img src={JSON.parse(props.images).image1}  className='object-contain'/>
        </div>
        <ul className='w-4/5'>
            <li>{props.productname}</li>
            {props.brand & <li>{props.brand}</li>}
            <li>{props.price}</li>
            {props.date&&<li>{`Order Placed on: ${props.date}`}</li>}
            {props.address&&<li>{`Ship To: ${props.address}`}</li>}
        </ul>
        <div className={`${!props.ordernumber&&'w-60'}`}>
            {
                props.ordernumber&&<>
                <h2 className='text-sm'>{`Order Number: ${props.ordernumber}`}</h2>
            <Link className="font-bold text-sm" >View Order Details</Link></>
            }
        </div>
    </div>);
}

