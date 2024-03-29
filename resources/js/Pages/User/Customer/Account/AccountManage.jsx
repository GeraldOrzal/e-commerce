import AccountNav from '@/Layouts/AccountNav'
import Authenticated from '@/Layouts/Authenticated'
import React from 'react'
import Input from '@/Components/Input'
import Button from '@/Components/Button'

export default function AccountManage(props) {




  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >

      
          <AccountNav
          Username={props.auth.user.name}
        >
          <div className='bg-primary w-4/5 h-screen rounded shadow-xl m-5 divide-y'>
            <div className='p-5 font-bold'>Manage Account</div>
            <form>
            <div className='p-5 flex flex-row divide-x'>
              <div className='w-2/3 p-10 mr-10'>
                <div className='grid grid-cols-2 gap-4 justify-end items-center' >
                  <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Username:</h2></div>
                  <Input
                    type="text"
                    name="username"
                    className="mt-1 w-full rounded-tr-xl border"
                    autoComplete="name"
                    value={props.auth.user?.username}
                    isFocused={true}
                  />
                  <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Name:</h2></div>
                  <Input
                    type="text"
                    name="name"
                    value={props.auth.user?.fullnmae}
                    className="mt-1 w-full rounded-tr-xl border"
                    autoComplete="name"
                    isFocused={true}
                  />
                  <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Email:</h2></div>
                  <Input
                    type="email"
                    name="email"
                    value={props.auth.user?.email}
                    className="mt-1 w-full rounded-tr-xl  border"
                    autoComplete="name"
                    isFocused={true}
                  />
                  <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Phone Number:</h2></div>
                  <Input
                    type="tel"
                    name="phonenumber"
                    pattern="[0-9]{11}"
                    value={props.auth.user?.number}
                    className="mt-1 w-full rounded-tr-xl border"
                    autoComplete="name"
                    isFocused={true}
                  />
                  <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Gender:</h2></div>
                  <select
                    name="gender"
                    className=" w-full border px-3 py-2 rounded-tr-xl shadow-sm focus:outline-none"
                    value={props.auth.user?.gender}
                  >
                    <option value=''>-Select Gender-</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                  <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Date of Birth:</h2></div>
                  <Input  
                    type="date"
                    name="birthday"
                    value={props.auth.user?.birthdate}
                    className="mt-1 w-full rounded-tr-xl  border "
                    autoComplete="name"
                    isFocused={true}
                  />
                  <Button className='mt-5 col-start-2'>Confirm Changes</Button>
                </div>
                
              </div>
              <div className='flex flex-col w-1/3 p-5'>
                <div className='flex flex-col items-center text-center'>
                  <img className='w-32 h-32 mt-10 rounded-full' src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' />
                  <Button className='mt-2'>Upload Image</Button>
                  <h1 className='mt-2'>File Size Maximum: 2MB</h1>
                  <h1>File Extension: JPEG, PNG</h1>
                </div>

              </div>
            </div>
            </form>
          </div>
        </AccountNav>
      
    </Authenticated>

  )
}
