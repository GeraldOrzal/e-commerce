import Authenticated from '@/Layouts/Authenticated'
import SellerNav from '@/Layouts/SellerNav'
import React from 'react'

export default function Sale(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}

    >
      <SellerNav>

      </SellerNav>
    </Authenticated>
  )
}
