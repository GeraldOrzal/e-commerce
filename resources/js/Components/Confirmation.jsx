import React,{useEffect, useState} from 'react'

export default function Confirmation({message}) {
  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById("message").style.opacity = "0%";
    },2000);
  },[]);
 
  return (
    <div
    id="message"
      className="transition-opacity top-5 ease-in-out border rounded-md p-5 absolute bg-primary w-3/4  mx-auto left-0 right-0"
    >{message.message}</div>
  )
}
