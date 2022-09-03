import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function ProductCard(props, product) {
  function RenderStar(rating)  {
    let temp = [];
    for (let index = 0; index < rating; index++) {
      temp.push(<AiFillStar />);
    }
    return temp;
  }
  return (
    <div className='flex flex-col hover:scale-105 transition'>
      <Link href={route('viewproduct', { id: props.productid })}>
        <img className='rounded-tr-md rounded-tl-md
        lg:h-48 lg:w-60 
        md:h-36 md:w-44 
        xs:h-28 xs:w-32' src={JSON.parse(props.images).image1} />
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
              
              {RenderStar(props.rating)}
              {props.rating}
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