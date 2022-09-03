import AccountNav from '@/Layouts/AccountNav'
import Authenticated from '@/Layouts/Authenticated'
import React,{useState} from 'react'
import Input from '@/Components/Input'
import logo from '@/images/logo.png'
import Button from '@/Components/Button'
import { Link, useForm } from '@inertiajs/inertia-react'

export default function AccountManage(props) {
  const [user,setUser] = useState(props.auth.user);

  
  function onClickButton(){
    const imageItem = document.createElement('input');
    imageItem.type = "file";
    imageItem.click();
    imageItem.addEventListener('change',(e)=>{
      console.log(e);
    });
  }
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='bg-primary w-4/5 border-1 h-screen rounded shadow-xl m-5 divide-y'>
          <div className='p-5 font-bold'>Manage Account</div>
          <div className='p-5 flex flex-row divide-x'>
            <form className='w-2/3 p-10 mr-10'>
              <div className='grid grid-cols-2 gap-4 justify-end items-center' >
                <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Username:</h2></div>
                <Input
                  type="text"
                  name="username"
                  className="mt-1 w-full rounded-tr-xl border"
                  value={props.auth?.user.username}
                  autoComplete="name"
                  isFocused={true}
                />
                <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Name:</h2></div>
                <Input
                  type="text"
                  name="name"
                  value={props.auth.user.name}
                  className="mt-1 w-full rounded-tr-xl border"
                  autoComplete="name"
                  isFocused={true}
                />
                <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Email:</h2></div>
                <Input
                  value={props.auth.user.email}
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-tr-xl  border"
                  autoComplete="name"
                  isFocused={true}
                />
                <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Phone Number:</h2></div>
                <Input
                  type="tel"
                  name="phonenumber"
                  pattern="[0-9]{11}"
                  className="mt-1 w-full rounded-tr-xl border"
                  autoComplete="name"
                  isFocused={true}
                />
                <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Gender:</h2></div>
                <select
                  name="gender"
                  className=" w-full border px-3 py-2 rounded-tr-xl shadow-sm focus:outline-none"
                >
                  <option value=''>-Select Gender-</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
                <div className='p-2 mt-1'><h2 className='font-semibold text-right'>Date of Birth:</h2></div>
                <Input
                  type="date"
                  name="birthday"
                  className="mt-1 w-full rounded-tr-xl  border "
                  autoComplete="name"
                  isFocused={true}
                />
                <Button className='mt-5 col-start-2'>Confirm Changes</Button>
              </div>
              
            </form>
            <div className='flex flex-col w-1/3 p-5'>
              <div className='flex flex-col items-center text-center'>
                
                <img className='w-32 h-32 mt-10 rounded-full' src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' />
                <Button className='mt-2' name="uploadimage" onClick={()=>onClickButton()}>Upload Image</Button>
                <h1 className='mt-2'>File Size Maximum: 2MB</h1>
                <h1>File Extension: JPEG, PNG</h1>
              </div>
            </div>
          </div>
        </div>
      </AccountNav>
    </Authenticated>

  )
}
