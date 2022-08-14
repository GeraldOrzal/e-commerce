import Authenticated from '@/Layouts/Authenticated'
import SellerNav from '@/Layouts/SellerNav'
import React from 'react'

export default function Inbox(props) {
  return (
    <Authenticated
    auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <SellerNav>
        
      </SellerNav>

    </Authenticated>
  )
}
