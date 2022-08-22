import React from 'react'
import Button from './Button'
import { Link, useForm } from '@inertiajs/inertia-react'

export default function AccountWishlistItem(props) {

  const { data, setData, patch, delete: remove, processing, errors, reset } = useForm({
    'cartids': [props.cartid]
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(data)
    if (e.nativeEvent.submitter.name == "remove") {

      remove(route('removecart'));

      return;
    }
    patch(route('movetowishlist'));

  };

  return (
    <form onSubmit={submit}>
    <div className='flex flex-row'>
      
        <div className='flex flex-col w-1/5 p-5 ml-5'>
        <img className='h-48 w-60 rounded-tr-md rounded-tl-md' src={props.image} />
      </div>
      <div className='flex flex-col w-3/5 space-y-2 mt-2'>
        <div className='mt-5'>
          <h1 className='font-bold'>{props.productname}</h1>
          <h2>{props.brand}</h2>
          <h2 className='mt-5'>{props.price}</h2>
        </div>
        <div className='mt-10'>
          <Button type="submit" name="remove" className='w-1/6 mt-5 bg-neutral3'>Delete</Button>
        </div>
      </div>
      <div className='flex flex-col w-1/5 p-5 items-center self-center'>
        <Button className='w-3/4 disable bg-neutral3'>Add to Cart</Button>
      </div>
      
    </div>
    </form>
  )
}
