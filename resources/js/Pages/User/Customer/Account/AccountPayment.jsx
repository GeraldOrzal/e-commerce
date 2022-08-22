import React,{useState} from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import Modal from '@/Components/Modal'
import Button from '@/Components/Button'
import Input from '@/Components/Input'
export default function AccountPayment(props) {

  const [modalShow, setmodalShow] = useState({show:false,credit:false})

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
              onClick={()=>setmodalShow({show:true,credit:true})}
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
              onClick={()=>setmodalShow({show:true,credit:false})}
              className='p-5  justify-end text-end underline cursor-pointer text-[#0B237A]'>Add</h2>
            </div>
            <div className='flex justify-center p-5 h-72 min-h-min items-center'>
              You dont have any bank accounts yet.
            </div> 
          </div>
          </div>

          <Modal
              isactive={modalShow.show}
              whenClick={
                ()=>setmodalShow({show:false,credit:false})}
              >{modalShow.credit?
                <form className='p-5 mt-5 space-y-5'>
                <h1 className='font-bold'>Add Credit / Debit Card</h1>
                <h2 className='font-bold'>Card Details</h2>
                <Input
                  type="number"
                  name="card-number"
                  placeholder="Card Number"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <div className='grid grid-cols-3 gap-2'>
                <Input
                  type="text"
                  name="card-expiry"
                  placeholder="Card Expiry"
                  className="mt-1 w-full rounded-tr-xl border col-span-2"
                  
                />
                <Input
                  type="number"
                  name="card-cvv"
                  placeholder="CVV"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                </div>
                <Input
                  type="text"
                  name="card-name"
                  placeholder="Name on Card"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                </form>
                :
                <form className='p-5 mt-5 space-y-5'>
                <h1 className='font-bold'>Add Bank Account</h1>
                <h2 className='font-bold'>Bank Details</h2>
                <Input
                  type="text"
                  name="bank-customername"
                  placeholder="Full Name in Bank Account"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="bank-number"
                  placeholder="Account Number"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                <Input
                  type="text"
                  name="bank-name"
                  placeholder="Bank Name"
                  className="mt-1 w-full rounded-tr-xl border"
                  isFocused={true}
                />
                </form>
              }
            </Modal>    
        </AccountNav>
    </Authenticated>
  )
}
