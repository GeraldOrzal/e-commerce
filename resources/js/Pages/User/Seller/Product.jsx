import Button from '@/Components/Button'
import Input from '@/Components/Input'
import Authenticated from '@/Layouts/Authenticated'
import SellerNav from '@/Layouts/SellerNav'
import React from 'react'
import { BsPlusCircle , BsList} from 'react-icons/bs'
import { Head,Link } from '@inertiajs/inertia-react';
import Checkbox from '@/Components/Checkbox'
export default function Product(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <SellerNav>
                <div className=' w-full bg-primary'>
                    <div className='space-x-2 flex flex-row items-center w-full'>
                        <label>Product name:</label>
                        <Input className='flex-1'/>
                        <label>Category:</label>
                        <select className='flex-1'>
                            <option>Default</option>
                        </select>
                        <Button>
                            Search
                        </Button>
                        <Button>
                            Reset
                        </Button>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <div className='p-5 border-b-2 flex-1'>
                            All
                        </div>
                        <div className='p-5 border-b-2 flex-1'>
                            Published
                        </div>
                        <div className='p-5 border-b-2 flex-1'>
                            Sold Out
                        </div >
                        <div className='p-5 border-b-2 flex-1'>
                            Reviewing
                        </div>
                        <div className='p-5 border-b-2 flex-1'>
                            Violation
                        </div>
                        <div className='p-5 border-b-2 flex-1'>
                            Unlisted
                        </div>
                    </div>
                    <div>
                        0 Products
                        <div className='flex flex-row justify-end'>
                            <Link href={route('addproduct')}>
                                <BsPlusCircle className='inline-block mr-2'/>
                                Add Product
                            </Link>
                            <Button>
                                <BsList/>
                            </Button>
                            <Button>
                                <BsList/>
                            </Button>
                        </div>
                    </div>
                    <table className='table-auto table-border'>
                        <thead>
                            <tr>
                                <th><Checkbox/></th>
                                <th>Products</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Sale</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th><Checkbox/></th>
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

            </SellerNav>
        </Authenticated>
    )
}
