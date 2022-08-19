import React,{useState} from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Modal from '@/Components/Modal'
export default function AccountPayment(props) {

  const [modalShow, setmodalShow] = useState(false)

  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    >
        <AccountNav
          Username={props.auth.user.name}
        >
          <div className='w-4/5 h-screen m-5 bg-primary space-y-5'>
          <div className='border rounded shadow-xl divide-y'>
              <div className='grid grid-cols-2'>
              <h2 className='p-5 font-bold '>Credit / Debit Card</h2>
              <h2 
              onClick={()=>setmodalShow(true)}
              className='p-5  justify-end text-end underline cursor-pointer text-[#0B237A]'>Add</h2>
            </div>
            <div className='flex justify-center p-5 h-72 min-h-min items-center'>
              You dont have any cards yet.
            </div> 
          </div>
          <div className='border rounded shadow-xl divide-y'>
              <div className='grid grid-cols-2'>
              <h2 className='p-5 font-bold '>Bank Account</h2>
              <h2 
              onClick={()=>setmodalShow(true)}
              className='p-5  justify-end text-end underline cursor-pointer text-[#0B237A]'>Add</h2>
            </div>
            <div className='flex justify-center p-5 h-72 min-h-min items-center'>
              You dont have any bank accounts yet.
            </div> 
          </div>
          </div>

          <Modal
              isactive={modalShow}
              whenClick={
                ()=>setmodalShow(false)}
              >
                
            </Modal>    
        </AccountNav>
    </Authenticated>
  )
}
