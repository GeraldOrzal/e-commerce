import AccountNav from '@/Layouts/AccountNav'
import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

export default function AccountManage(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='w-4/5 border-1 rounded shadow-xl m-5 divide-y'>
          <div className='p-5 font-bold'>Manage Account</div>
          <div className='p-5'>
            Asd
            
            
          </div>
        </div>
      </AccountNav>
    </Authenticated>

  )
}
