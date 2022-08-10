import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

export default function ViewProduct({auth,errors,product}) {
    
  return (
    <Authenticated
    auth={auth}
    errors={errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View Product</h2>}
    >
        <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
        <label>PRODUCTNAME:{product.productname}</label>
        <label>PRICE:{product.price}</label>
        
    </Authenticated>
  )
}
