import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
export default function AccountPasswordChange(props) {
  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    >
        <AccountNav
          Username={props.auth.user.name}
        >
          <div className='w-4/5 border-1 rounded shadow-xl m-5 divide-y'>
            <div className='p-5'>Change Password</div>
            <div>Asd</div>
          </div>     
        </AccountNav>
    </Authenticated>
  )
}
