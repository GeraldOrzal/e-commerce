import React from 'react';
import ApplicationLogoFooter from '@/Components/ApplicationLogoFooter';
import FullLogo from '@/images/LTSCLogoFull.png';
import { Link } from '@inertiajs/inertia-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
export default function Footer() {
  return (
    // <footer className='bg-seventhdary w-full flex flex-col p-5'>
    //             <div className='flex flex-row justify-between px-10'>
    //                 <ApplicationLogoFooter className="self-center"/>
                    

    <footer className='bg-primary w-full flex flex-col p-5'>
                <div className='flex 
                lg:flex-row lg:justify-between lg:items-start lg:text-justify 
                md:flex-row md:justify-between md:items-start md:text-justify 
                sm:flex-col sm:justify-center sm:items-center sm:text-center 
                xs:flex-col xs:justify-center xs:items-center xs:text-center 
                px-10'>
                    <img src={FullLogo} alt='full logo' className='h-12 self-center'/>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-md'>Categories</h2>
                        <Link><h3 className='text-xs hover:underline'>Help Center</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Payment Method</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Return & Refund</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Contact Us</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>FAQ's</h3></Link>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-md'>Customer Service</h2>
                        <Link><h3 className='text-xs hover:underline'>Help Center</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Payment Method</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Track Order</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Contact Us</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>FAQ's</h3></Link>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-md'>About LTSC</h2>
                        <Link><h3 className='text-xs hover:underline'>About Us</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Privacy Policy</h3></Link>
                    </div>
                </div>
                <hr className='m-5'/>
                <div className='flex flex-row justify-center items-center space-x-2'>
                    <h4 className='text-sm'>Follow Us</h4>
                    <BsFacebook
                    color='0000ff'/>
                    <BsTwitter
                    color='#00acee'/>
                    <BsInstagram
                    color='#664228'/>
                </div>
            </footer>
  )
}
