import React,{useState} from 'react'
import Authenticated from '@/Layouts/Authenticated'
import AccountNav from '@/Layouts/AccountNav'
import { Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';
import AccountItemList from '@/Components/AccountItemList';
import AccountStoreList from '@/Components/AccountStoreList';
export default function AccountPurchases(props) {

  const [current, setcurrent] = useState("all")
  

  const data = {
    all:[
      {
        storename:"Cong",
        list:[
          {
            productname:"Red Tshirt",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
            price:"P 5000",
            brand:"Gucci gang"
          },
          {
            productname:"White Tshirt",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
            price:"P 5000",
            brand:"Cong Tibeh"
          }
  
        ]
      },
      {
        storename:"Lee Pipes",
        list:[
          {
            productname:"Red Tshirt",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
            price:"P 5000",
            brand:"Gucci gang"
          },
          {
            productname:"White Tshirt",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
            price:"P 5000",
            brand:"Cong Tibeh"
          }
  
        ]
      },
      {
        storename:"Yellow Tshirt",
        list:[
          {
            productname:"Red Tshirt",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
            price:"P 5000",
            brand:"Gucci gang"
          },
          {
            productname:"White Tshirt",
            image:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80%22/%3E",
            price:"P 5000",
            brand:"Cong Tibeh"
          }
  
        ]
      },
    ],
    topay:[],
    toship:[],
    received:[],
    completed:[],
    cancelled:[]
  }


  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <AccountNav
        Username={props.auth.user.name}
      >
        <div className='flex flex-col w-4/5 space-y-5 my-5'>
          <div className='grid grid-cols-6 border h-max rounded shadow-xl  mr-5 bg-primary text-center font-bold'>
            <div 
              onClick={()=>setcurrent("all")}
            className={`${current=="all"?" border-secondary border-b-4":""} py-5 cursor-pointer`}>All</div>
            <div 
             onClick={()=>setcurrent("topay")}
            className={`${current=="topay"?"  border-secondary  border-b-4":""} py-5 cursor-pointer`}>To Pay</div>
            <div 
              onClick={()=>setcurrent("toship")}
            className={`${current=="toship"?" border-secondary  border-b-4":""} py-5 cursor-pointer`}>To Ship</div>
            <div 
             onClick={()=>setcurrent("received")}
            className={`${current=="received"?" border-secondary  border-b-4":""} py-5 cursor-pointer`}>Received</div>
            <div 
             onClick={()=>setcurrent("completed")}
            className={`${current=="completed"?" border-secondary  border-b-4":""} py-5 cursor-pointer`}>Completed</div>
            <div 
             onClick={()=>setcurrent("cancelled")}
            className={`${current=="cancelled"?" border-secondary  border-b-4":""} py-5 cursor-pointer`}>Cancelled</div>
          </div> 
          <div 
          className=' h-max mr-5 space-y-5'>
            
            {
              data[current].map(({storename,list})=>
              <AccountStoreList
                iswishlist={false}
                storename={storename}
                itemlist={list}
              />)
            }
              
          </div>
        </div>
          
      </AccountNav>
    </Authenticated>
  )
}
