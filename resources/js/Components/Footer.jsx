import React from 'react'
import ApplicationLogoFooter from '@/Components/ApplicationLogoFooter';
import { Link } from '@inertiajs/inertia-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer className='bg-seventhdary w-full flex flex-col p-5'>
                <div className='flex flex-row justify-between px-10'>
                    <ApplicationLogoFooter className="self-center"/>
                    

                    <div className='flex flex-col'>
                        <h2 className='font-bold text-xl'>Categories</h2>
                        <Link><h3>Help Center</h3></Link>
                        <Link><h3>Payment Method</h3></Link>
                        <Link><h3>Return & Refund</h3></Link>
                        <Link><h3>Contact Us</h3></Link>
                        <Link><h3>FAQ's</h3></Link>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-xl'>Customer Service</h2>
                        <Link><h3>Help Center</h3></Link>
                        <Link><h3>Payment Method</h3></Link>
                        <Link><h3>Track Order</h3></Link>
                        <Link><h3>Contact Us</h3></Link>
                        <Link><h3>FAQ's</h3></Link>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-xl'>About LTSC</h2>
                        <Link><h3>About Us</h3></Link>
                        <Link><h3>Privacy Policy</h3></Link>
                    </div>
                </div>
                <hr className='m-5'/>
                <div className='flex flex-row justify-center items-center space-x-2'>
                    <h4>Follow Us</h4>
                    <BsFacebook/>
                    <BsTwitter/>
                    <BsInstagram/>
                </div>
            </footer>
  )
}
