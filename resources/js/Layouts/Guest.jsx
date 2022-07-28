import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import { Link } from '@inertiajs/inertia-react';
import Footer from '@/Components/Footer';

export default function Guest({ children }) {

    return (
        <div className="flex flex-col sm:justify-center items-center sm:pt-0 bg-gradient-to-r from-neutral1 to-neutral2">
            <div className='bg-primary container-fluid flex flex-row items-center w-full justify-between p-2'>
                {
                    !route().current("password.request") ?

                        route().current("login") ?
                            <>
                                <div className='flex flex-row items-center'>
                                    <Link href="/">
                                        <ApplicationLogo className='ml-7'/>
                                    </Link>
                                    <h1 className='ml-2 
                                    lg:text-4xl
                                    md:text-4xl
                                    sm:text-3xl
                                    xs:text-3xl'>
                                        {route().current()[0].toUpperCase() + route().current().substr(1, route().current().length)}
                                    </h1>
                                </div>
                                
                                <div className='flex flex-row items-center justify-center'>
                                    <div className='mr-2
                                    lg:block
                                    md:block
                                    sm:hidden
                                    xs:hidden'>Don't have an account?</div>
                                    <Link href={route("register")}>
                                        <Button className='mr-5'>Sign up</Button>
                                    </Link>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex flex-row items-center'>
                                    <Link href="/">
                                        <ApplicationLogo className='ml-7'/>
                                    </Link>
                                    <h1 className='ml-2 
                                    lg:text-4xl
                                    md:text-4xl
                                    sm:text-3xl
                                    xs:text-3xl'>
                                        {route().current()[0].toUpperCase() + route().current().substr(1, route().current().length)}
                                    </h1>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                <div className='mr-2
                                    lg:block
                                    md:block
                                    sm:hidden
                                    xs:hidden'>
                                    Already have an account?</div>
                                    <Link href={route("login")}>
                                        <Button className='mr-5'>Sign in</Button>
                                    </Link>
                                </div>
                            </> : 
                            <></>
                }
            </div>
            <div className="w-full px-6 py-10 bg-primary overflow-hidden 
            sm:max-w-md sm:rounded-lg sm:mt-10
            xs:max-w-md xs:rounded-0 xs:mt-0">
                {children}
            </div>
            <div className='flex flex-row justify-center items-center sm:text-primary sm:bg-transparent sm:w-full xs:text-default xs:bg-primary xs:w-full p-5 sm:pt-5 xs:pt-0 space-x-1'>
                <Link> Privacy Policy</Link>
                <label>|</label>
                <Link>Terms and Condition</Link>
            </div>
            <Footer/>
        </div>
    );
}
