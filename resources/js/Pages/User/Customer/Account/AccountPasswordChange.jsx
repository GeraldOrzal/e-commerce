import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
export default function AccountPasswordChange(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='w-4/5 border-1 rounded shadow-xl m-5 h-screen divide-y bg-primary'>
          <div className='p-5 font-bold'>Change Password</div>
          <div className='p-5'>
            <form>
              <div className='flex flex-col'>
                <div className='p-2 mt-1 rounded-bl-xl'><h2 className='font-semibold'>Current Password:</h2></div>
                <Input
                  type="password"
                  name="currentpassword"
                  className="mt-1 w-full rounded-tr-xl border"
                  autoComplete="name"
                  isFocused={true}
                />
                <div className='p-2 mt-1 rounded-bl-xl'><h2 className='font-semibold'>New Password:</h2></div>
                <Input
                  type="password"
                  name="newpassword"
                  className="mt-1 w-full rounded-tr-xl border"
                  autoComplete="username"
                />
                <div className='p-2 mt-1 rounded-bl-xl'><h2 className='font-semibold'>Confirm Password:</h2></div>
                <Input
                  type="password"
                  name="confirmpassword"
                  className="mt-1 w-full rounded-tr-xl border"
                  autoComplete="username"
                />
              </div>
              <Button className='mt-5'>Confirm Changes</Button>
            </form>


          </div>
        </div>
      </AccountNav>
    </Authenticated>
  )
}
