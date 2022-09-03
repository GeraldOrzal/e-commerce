import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { BsFacebook, BsTwitter, BsPerson, BsLock } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'

export default function Login({ status, canResetPassword }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />
            
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
            <h1 className='text-3xl text-center py-2 mb-5'>
                Sign in to continue
            </h1>    
                <div className='flex flex-row items-center'>

                    <div className='bg-black bg-opacity-10 p-2 rounded-tl-sm rounded-bl-sm'><BsPerson className='text-2xl text-disable'/></div>

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className=""
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                        placeholder="Enter Email"
                    />
                </div>

                <div className="mt-4 flex flex-row items-center">

                    <div className='bg-black bg-opacity-10 p-2 rounded-tl-sm rounded-bl-sm'><BsLock className='text-2xl text-disable'/></div>

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className=""
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                        required
                        placeholder="Enter Password"
                    />
                </div>
                {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline mt-2 float-right text-sm font-bold text-error"
                        >
                            Forgot your password?
                        </Link>
                    )}
                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center mt-4">
                    
                    
                    <Button className='w-full py-3 text-center' processing={processing}>
                        Log in
                    </Button>
                </div>
                <div
                className='flex flex-row items-center mt-5'
                >
                <div className='border-solid border-b w-full h-0'></div>
                <label className='mx-5'>or</label>
                <div className='border-solid border-b w-full h-0'></div>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <h3>Login using</h3>
                    <div className='flex flex-row space-x-5 mb-5 p-5'>
                        <BsTwitter
                        size={25}
                        color="#00acee"
                        />
                        <BsFacebook
                        size={25}
                        color="#0000ff"
                        />
                        <FcGoogle
                        size={25}
                        />
                    </div>
                    
                </div>
                <div className='flex items-center justify-center'>
                    Don't have an account?
                    <Link
                                href={route('register')}
                                className="underline ml-1 text-sm font-bold text-error"
                            >
                            Register
                    </Link>
                </div>
            </form>
            
        </Guest>
        
    );
}
