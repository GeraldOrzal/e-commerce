import React from 'react'
import AccountItemList from './AccountItemList'
import AccountWishlistItem from './AccountWishlistItem'
import Button from './Button'

export default function AccountStoreList(props) {
  
  return (
    <div className='  border rounded shadow-xl bg-primary'>
      <div className=' divide-y'>
        <div className='flex flex-row p-2 ml-5'>
          <h2 className='flex-1'>{props.storename}</h2>
          <div className='flex flex-row divide-x '>
            <h2 className='px-5'>Your Order Was Pending</h2>
            <h2 className='px-5'>To Pay</h2>
          </div>
        </div>
        <div className='flex flex-col divide-y px-5'>
          {/* 
          0 = all,
          1 = topay,
          2 = to ship,
          3 = received,
          4 = completed,
          5 - cancelled
           */}
          {
            props.itemlist.map(({productname,image,price,brand})=>props.iswishlist?<AccountWishlistItem
            
            productname={productname}
            image={image}
            price={price}
            brand={brand} 
            
            />:<AccountItemList
            productname={productname}
            image={image}
            price={price}
            brand={brand} />
            
            )
          }

          
          
        </div>
      </div>
      <div className='flex flex-row p-5 space-x-5 justify-end'>
        {
          !props.iswishlist&&(<Button className='bg-disable'>Pending</Button>)
        }
        {props.isshipping&&(<>    
          <Button>Contact Seller</Button>
          <Button>Cancel Order</Button>
        </>)}
      </div>
    </div>
  )
}
