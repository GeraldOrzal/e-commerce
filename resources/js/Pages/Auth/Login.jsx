import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { BsFacebook, BsGoogle,BsTwitter } from 'react-icons/bs';

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
            <h1 className='mr-5 text-4xl text-center text-fourthdary'>
                Sign in to continue
            </h1>    
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>
                {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}
                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center mt-4">
                    
                    
                    <Button className="w-full " processing={processing}>
                        <label className='text-center w-full'>Log in</label>
                    </Button>
                </div>
                <div
                className='flex flex-row items-center'
                >

                <div className='border-solid border-b-2 w-full h-0'></div>
                <label className='mx-5'>or</label>
                <div className='border-solid border-b-2 w-full h-0'></div>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <h3>Login using</h3>
                    <div className='flex flex-row space-x-5 mb-5 p-5'>
                        
                            <BsTwitter
                           size={30}
                            color="#00acee"
                            />
                        
                        <BsFacebook
                        size={30}
                        />
                        <BsGoogle
                        size={30}
                        />
                    </div>
                    
                </div>
                <div className='flex items-center justify-center'>
                    Dont have an account?
                    <Link
                                href={route('register')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 font-bold"
                            >
                            Register
                    </Link>
                </div>
            </form>
            
        </Guest>
        
    );
}
