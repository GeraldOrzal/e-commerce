import Button from '@/Components/Button'
import Input from '@/Components/Input'
import Authenticated from '@/Layouts/Authenticated'
import SellerNav from '@/Layouts/SellerNav'
import React from 'react'
import { BsPlusCircle, BsList } from 'react-icons/bs'
import { Head, Link } from '@inertiajs/inertia-react';
import Checkbox from '@/Components/Checkbox'
import { MdViewQuilt } from 'react-icons/md'

export default function Order(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div className='flex flex-row'>
                <SellerNav />
                <div className=' flex-1 bg-primary p-2 shadow m-2 p-4 border'>
                    <div className='space-x-2 flex flex-row items-center w-full'>
                        <Input placeholder='Enter Ordered Product Name' className='' />
                        <label>Category:</label>
                        <select className='flex-1'>
                            <option>Default</option>
                        </select>
                        <Button>
                            Search
                        </Button>
                        <Button className='bg-error'>
                            Reset
                        </Button>
                    </div>
                    <div className='flex flex-row space-x-2 border-b-2'>
                        <div className='p-5 flex-1 text-center'>
                            All
                        </div>
                        <div className='p-5 flex-1 text-center'>
                            Published
                        </div>
                        <div className='p-5 flex-1 text-center'>
                            Sold Out
                        </div >
                        <div className='p-5 flex-1 text-center'>
                            Reviewing
                        </div>
                        <div className='p-5 flex-1 text-center'>
                            Violation
                        </div>
                        <div className='p-5 flex-1 text-center'>
                            Unlisted
                        </div>
                    </div>
                    <div>
                        <h1 className='p-2'>0 Products</h1>
                        <div className='flex flex-row justify-end items-center mb-2'>
                            <Link href={route('addproduct')}>
                                <BsPlusCircle className='inline-block mr-2' />
                                Add Product
                            </Link>
                            <Button className='px-0 py-0 bg-transparent text-black text-2xl'>
                                <BsList />
                            </Button>
                            <Button className='px-0 py-0 bg-transparent text-black text-2xl'>
                                <MdViewQuilt />
                            </Button>
                        </div>
                    </div>
                    <table className='table-auto w-full '>
                        <thead className='border'>
                            <tr >
                                <th><Checkbox /></th>
                                <th >Products</th>
                                <th >Category</th>
                                <th >Price</th>
                                <th >Stock</th>
                                <th >Sale</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><Checkbox /></th>
                                <th>Air Jordan</th>
                                <th>Shoes</th>
                                <th>500</th>
                                <th>2</th>
                                <th>50%</th>
                                <th><Button>Remove</Button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    )
}
