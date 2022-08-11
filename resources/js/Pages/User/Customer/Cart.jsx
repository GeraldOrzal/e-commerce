import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

export default function Cart(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}

    >
      <>
        <h2>My Orders<label>(2 Items)</label></h2>
        <div>
          
        </div>
      </>
    </Authenticated>
  )
}
