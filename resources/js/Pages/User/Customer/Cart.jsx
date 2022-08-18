
import Button from '@/Components/Button'
import CartProductRow from '@/Components/CartProductRow'
import Checkbox from '@/Components/Checkbox'
import Authenticated from '@/Layouts/Authenticated'
import React, { useState } from 'react'
import { Link, useForm } from '@inertiajs/inertia-react'




export default function Cart(props) {
  const [itemsSelected, setitemsSelected] = useState({
    count: 0,
    selected: [],
    total: 0,
  });
  const { data, setData, post, processing, errors, reset } = useForm({

  });

  const submit = (e) => {
    e.preventDefault();
    setData('checkbox', itemsSelected.selected);
    console.log(itemsSelected);
    // post(route('removecart'));
  };

  const handleChecked = (data) => {
    if (data.target.checked) {


      setitemsSelected({
        ...itemsSelected,
        selected: [...itemsSelected.selected, data.target.value],
        count: itemsSelected.count + 1
      })
    } else {
      var temp = itemsSelected.selected;
      temp.splice(itemsSelected.selected.indexOf(data.target.value), 1);
      setitemsSelected({
        ...itemsSelected,
        selected: temp,
        count: itemsSelected.count - 1
      })
    }
  };

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <form
        onSubmit={submit}
        className='flex flex-col items-center w-full mx-auto'
      >
        <div className='flex flex-row justify-end items-center'>
          <h2 className='text-xl font-bold py-2'>My Orders</h2>
          <label className='text-sm ml-2 py-2'>(2 Items)</label>
        </div>
        <div>

          <h2 className='font-bold shadow p-2'>SellerName</h2>
          <CartProductRow id={10} handleChange={handleChecked} productname={props.productname} brand={props.brand} price={props.price} date={props.date} address={props.address} ordernumber={props.ordernumber} />
          <CartProductRow id={11} handleChange={handleChecked} productname={props.productname} brand={props.brand} price={props.price} date={props.date} address={props.address} ordernumber={props.ordernumber} />
          <CartProductRow id={12} handleChange={handleChecked} productname={props.productname} brand={props.brand} price={props.price} date={props.date} address={props.address} ordernumber={props.ordernumber} />
          <CartProductRow id={13} handleChange={handleChecked} productname={props.productname} brand={props.brand} price={props.price} date={props.date} address={props.address} ordernumber={props.ordernumber} />
          <CartProductRow id={14} handleChange={handleChecked} productname={props.productname} brand={props.brand} price={props.price} date={props.date} address={props.address} ordernumber={props.ordernumber} />
          <CartProductRow id={15} handleChange={handleChecked} productname={props.productname} brand={props.brand} price={props.price} date={props.date} address={props.address} ordernumber={props.ordernumber} />
        </div>
        <div className='flex flex-row items-center p-4 mt-2 space-x-5 shadow'>
          <div className='flex flex-row items-center'>
            <Checkbox

            />
            <h2 className='ml-2'>Select all ({itemsSelected.count})</h2>
          </div>
          <Button type='submit' name="removecart">Remove</Button>
          <Link method="post" as="button">Move to Wishlist</Link>
          <h2>{`Total(${itemsSelected.count} items): ₱${itemsSelected.total}.00`}</h2>
          <Button>Checkout</Button>
        </div>
      </form>
    </Authenticated>
  )
}
