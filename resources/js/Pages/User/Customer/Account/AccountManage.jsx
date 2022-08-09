import AccountNav from '@/Layouts/AccountNav'
import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

export default function AccountManage(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop</h2>}
    >
        <AccountNav

        >
          manage
        </AccountNav>
    </Authenticated>
    
  )
}
