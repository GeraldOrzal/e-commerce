import React,{useState} from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Button from '@/Components/Button'
import AccountDeliveryAddress from '@/Components/AccountDeliveryAddress'
import Modal from '@/Components/Modal'
import Input from '@/Components/Input'
export default function AccountDelivery(props) {

  const [modalShow, setmodalShow] = useState(false)
  const addresses = [
    {
      name:"Jordan",
      number: "09123456789",
      address: "kahit saan st. dyan, dyan, lang city"
    },
    {
      name:"Jordan",
      number: "09123456789",
      address: "kahit saan st. dyan, dyan, lang city"
    },
    {
      name:"Jordan",
      number: "09123456789",
      address: "kahit saan st. dyan, dyan, lang city"
    }
  ]
  
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='w-4/5 border h-full rounded shadow-xl m-5 divide-y bg-primary'>
          <div className='p-5 grid grid-cols-2'>
            <h2 className=' font-bold '>Delivery Address</h2>
            <h2 
            onClick={()=>setmodalShow(true)}
            className='justify-end text-end underline cursor-pointer text-[#0B237A]'>Add New Address</h2>
          </div>
          <div className='flex flex-col h-screen overflow-y-scroll'>
            {
              addresses.map(({name,number,address})=>
              <AccountDeliveryAddress 
              name={name}
              number={number}
              address={address}
            />)
            }

            <Modal
              isactive={modalShow}
              whenClick={
                ()=>setmodalShow(false)}
              >
                <form className='mt-5 space-y-5'>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="tel"
                  name="number"
                  placeholder="Phone Number"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="region"
                  placeholder="Region"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="province"
                  placeholder="Province"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="barangay"
                  placeholder="Barangay"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="street"
                  placeholder="Street Name, Building, House No."
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <h2>Label As:</h2>
                <div className='grid grid-cols-2 gap-2'>
                  <Input
                  type="radio"
                  id="home"
                  name="label"
                  className="mt-1 w-full rounded-tr-xl border"
                />
                <label for="home">Home</label>
                <Input
                  type="radio"
                  id="work"
                  name="label"
                  className="mt-1 w-full rounded-tr-xl border"
                />
                <label for="work">Work</label>
                </div>
                <div className='grid grid-rows-1 grid-cols-3 gap-2'>
                <Input
                  type="checkbox"
                  id="default"
                  value="setDefault"
                  name="label"
                  className="mt-1 w-full rounded-tr-xl border"
                />
                <label className='row-span-2' for="default">Set As Default Delivery Address</label>
                </div>
                </form>
            </Modal>
            
          </div>
        </div>
      </AccountNav>
    </Authenticated>
  )
}
