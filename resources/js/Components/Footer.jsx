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


        <footer className='bg-primary max-w-8xl mx-auto w-full flex flex-col p-5'>
            <div className='flex justify-center items-center
            lg:flex-row
            xs:flex-col'>
                <img src={FullLogo} alt='full logo' className='self-center
                lg:mr-8 lg:ml-8 lg:mb-0
                md:h-12
                sm:mb-4  
                xs:h-10 xs:mr-0 xs:ml-0 xs:mb-2'/>
                <div className='w-full flex justify-center 
                lg:pl-0
                sm:flex-row 
                xs:flex-col xs:pl-6'>
                    <div className='flex flex-col w-full 
                    sm:items-start sm:mb-0
                    xs:items-center xs:mb-2'>
                        <h2 className='font-bold text-md'>Categories</h2>
                        <Link><h3 className='text-xs hover:underline'>Help Center</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Payment Method</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Return and Refund</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Contact Us</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>FAQ's</h3></Link>
                    </div>
                    <div className='flex flex-col w-full
                    sm:items-start sm:mb-0
                    xs:items-center xs:mb-2'>
                        <h2 className='font-bold text-md'>Customer Service</h2>
                        <Link><h3 className='text-xs hover:underline'>Help Center</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Payment Method</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Track Order</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Contact Us</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>FAQ's</h3></Link>
                    </div>
                    <div className='flex flex-col w-full
                    sm:items-start sm:mb-0
                    xs:items-center xs:mb-2'>
                        <h2 className='font-bold text-md'>About LTSC</h2>
                        <Link><h3 className='text-xs hover:underline'>About Us</h3></Link>
                        <Link><h3 className='text-xs hover:underline'>Privacy Policy</h3></Link>
                    </div>
                </div>
            </div>
            <hr className='m-5' />
            <div className='flex flex-row justify-center items-center space-x-2'>
                <h4 className='text-sm'>Follow Us</h4>
                <BsFacebook
                    color='0000ff' />
                <BsTwitter
                    color='#00acee' />
                <BsInstagram
                    color='#664228' />
            </div>
        </footer>
    )
}
