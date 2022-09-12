import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { BsFacebook, BsTwitter, BsPerson, BsLock, BsEnvelope } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <h1 className='text-4xl text-center text-secondary font-bold mb-2'>
                    Welcome!
                </h1>
                <h2 className='text-center'>Let's make your account.</h2>
                <div className="mt-4 flex flex-row items-center">

                    <div className='bg-black bg-opacity-10 p-2 rounded-tl-sm rounded-bl-sm'><BsPerson className='text-2xl text-disable' /></div>

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className=""
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                        placeholder='Enter Name'
                    />
                </div>
                <div className="mt-4 flex flex-row items-center">

                    <div className='bg-black bg-opacity-10 p-2 rounded-tl-sm rounded-bl-sm'><BsEnvelope className='text-2xl text-disable' /></div>

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className=""
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                        placeholder='Enter Email'
                    />
                </div>
                <div className="mt-4 flex flex-row items-center">

                    <div className='bg-black bg-opacity-10 p-2 rounded-tl-sm rounded-bl-sm'><BsLock className='text-2xl text-disable' /></div>

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 w-full"
                        handleChange={onHandleChange}
                        required
                        placeholder='Password'  
                    />
                </div>
                <div className="mt-4 flex flex-row items-center">
                    <div className='bg-black bg-opacity-10 p-2 rounded-tl-sm rounded-bl-sm'><BsLock className='text-2xl text-disable' /></div>

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 w-full"
                        handleChange={onHandleChange}
                        required
                        placeholder='Confirm Password'
                    />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link href={route('login')} className="underline text-sm text-error font-bold">
                        Already registered?
                    </Link>
                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
                <div
                    className='flex flex-row items-center mt-2'
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
            </form>
        </Guest>
    );
}
