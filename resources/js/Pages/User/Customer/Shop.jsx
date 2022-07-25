import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

export default function Shop(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop</h2>}
    >

    </Authenticated>
  )
}
