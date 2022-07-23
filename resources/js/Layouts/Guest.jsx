import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {

    return (
        <div className="flex flex-col sm:justify-center items-center sm:pt-0  bg-gradient-to-r from-fourthdary to-fifthdary">
            <div className='container-fluid flex flex-row items-center w-full justify-between p-2 bg-primary'>


                {
                    !route().current("password.request") ?

                        route().current("login") ?
                            <>
                                <div className='flex flex-row items-center'>
                                    <Link href="/">
                                        <ApplicationLogo />
                                    </Link>
                                    <h1 className='mr-5 text-4xl'>
                                        {route().current()[0].toUpperCase() + route().current().substr(1, route().current().length)}
                                    </h1>
                                </div>
                                
                                <div>
                                    Dont have an account?
                                    <Link href={route("register")}>
                                        <Button>Sign up</Button>
                                    </Link>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex flex-row items-center'>
                                    <Link href="/">
                                        <ApplicationLogo />
                                    </Link>
                                    <h1 className='mr-5 text-4xl'>
                                        {route().current()[0].toUpperCase() + route().current().substr(1, route().current().length)}
                                    </h1>
                                </div>
                                <div>

                                    Already have an account?
                                    <Link href={route("login")}>
                                        <Button>Sign in</Button>
                                    </Link>
                                </div>
                            </> : <></>
                }

            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-primary shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
            <div className='flex flex-row'>
                <Link> Privacy Policy</Link>
                |
                <Link>Terms and Condition</Link>
            </div>
        </div>
    );
}
