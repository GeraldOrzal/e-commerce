import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
export default function AccountDelivery(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop</h2>}
    >
        <AccountNav

        >
          Delivery
        </AccountNav>
    </Authenticated>
  )
}
