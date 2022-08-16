import React, { useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import { GoSearch } from 'react-icons/go';
import { MdFeaturedPlayList, MdCategory } from 'react-icons/md';
import { Link, Head } from '@inertiajs/inertia-react';
import SearchBar from '@/Components/SearchBar';


export default function Welcome(props) {
    const [hoverCategory, sethoverCategory] = useState(false);

    
    return (
        <>
            <Head title="Welcome" />
            <div className='container p-10 pt-5 mx-auto '>
                <header className='container mx-auto mb-2 flex flex-row justify-center items-center'>
                  <SearchBar
                    auth={props.auth}
                  />
                </header>
                <main className='pt-0
                md:p-8
                sm:p-4
                xs:p-4'>
                    <div className='max-w-7xl mx-auto w-full flex justify-center items-center mb-7 
                    md:flex-row
                    sm:flex-col
                    xs:flex-col'>
                        <div className='bg-primary shadow-lg p-32 py-20 text-center text-fourthdary
                        md:w-3/6 md:mr-2 md:mb-0 
                        sm:w-full sm:mr-0 sm:mb-2
                        xs:w-full xs:mr-0 xs:mb-2'>Ads</div>
                        <div className='bg-primary shadow-lg p-32 py-20 text-center text-fourthdary
                        md:w-3/6
                        sm:w-full
                        xs:w-full'>Events</div>
                    </div>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex items-center text-lg text-fourthdary font-bold pl-2 mb-2'><MdFeaturedPlayList className='text-neutral1 mr-2' />Featured Products</div>
                    </div>
                    <div className='max-w-7xl mx-auto flex flex-row items-center space-x-2 overflow-x-scroll p-5 mb-7'>
                        {
                            props.featured.map(({ productid, productname, rating, price }) => <ProductCard
                                productid={productid}
                                key={productid}
                                name={productname}
                                price={price}
                                rating={rating}
                            />)
                        }
                    </div>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex items-center text-lg text-fourthdary font-bold pl-2 mb-2'><MdCategory className='text-neutral1 mr-2' />Shop by Categories</div>
                    </div>
                    <div className='max-w-7xl mx-auto grid grid-cols-6 auto-rows-max gap-2 mb-10
                    grid-rows-2
                    'onMouseEnter={() => sethoverCategory(true)} onMouseLeave={() => sethoverCategory(false)}>
                        <div className='p-20 shadow-lg bg-category0 bg-no-repeat bg-cover bg-center rounded-md relative
                        md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3
                        xs:col-start-1 xs:col-end-4 xs:row-start-1 xs:row-end-2'>
                            <Link href={route('shop',{categories:props.categories[0].description,page:1})}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black bg-opacity-20 font-bold text-primary absolute top-0 left-0 w-full h-full block xl:text-5xl sm:text-3xl xs:text-2xl' : 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[0].description}
                            </div>
                            
                            </Link>
                            
                        </div>
                        <div className='p-20 shadow-lg bg-category1 bg-no-repeat bg-cover bg-center rounded-md relative 
                        md:col-start-3 md:col-end-5
                        xs:col-start-4 xs:col-end-7'>
                            <Link href={route('shop',{categories:props.categories[1].description,page:1})}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black bg-opacity-20 font-bold text-primary absolute top-0 left-0 w-full h-full block sm:text-3xl xs:text-2xl' : 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[1].description}
                            </div>
                            </Link>

                        </div>
                        <div className='p-20 shadow-lg bg-category2 bg-no-repeat bg-cover bg-center rounded-md relative
                        xl:col-start-5 xl:col-end-7
                        md:col-start-5 md:col-end-7
                        xs:col-start-1 xs:col-end-4'>
                            <Link href={route('shop',{categories:props.categories[2].description,page:1})}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black bg-opacity-20 font-bold text-primary absolute top-0 left-0 w-full h-full block sm:text-3xl xs:text-2xl' : 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[2].description}
                            </div>
                            
                            </Link>

                        </div>
                        <div className='p-20 shadow-lg bg-category3 bg-no-repeat bg-cover bg-center rounded-md bg-neutral1 relative
                        xl:col-start-3 xl:col-end-5
                        md:col-start-3 md:col-end-7
                        xs:col-start-4 xs:col-end-7'>
                            <Link href={route('shop',{categories:props.categories[3].description,page:1})}><div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black bg-opacity-20 font-bold text-primary absolute top-0 left-0 w-full h-full block sm:text-3xl xs:text-2xl' : 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[3].description}
                            </div></Link>

                        </div>
                        <div className='p-20 shadow-lg bg-category4 bg-no-repeat bg-cover bg-center rounded-md relative
                        xl:col-start-5 xl:col-end-6
                        xs:col-start-1 xs:col-end-4'>
                            <Link href={route('shop',{categories:props.categories[4].description,page:1})}>
                                <div className={`transition ease-in-out flex justify-center items-center rounded-md bg-black bg-opacity-20 font-bold text-primary absolute top-0 left-0 w-full h-full xl:text-2xl sm:text-3xl xs:text-2xl ${hoverCategory ? 'block' : 'hidden'}`}>
                                    {props.categories[4].description}
                                </div>
                            </Link>

                        </div>
                        <div className='p-20 shadow-lg bg-category5 bg-no-repeat bg-cover bg-center rounded-md relative
                        xl:col-start-6 xl:col-end-7
                        xs:col-start-4 xs:col-end-7'>
                            <Link href={route('shop',{categories:props.categories[5].description,page:1})}>
                                <div className={hoverCategory ? 'flex justify-center items-center rounded-md bg-black bg-opacity-20 font-bold text-primary absolute top-0 left-0 w-full h-full block xl:text-2xl sm:text-3xl xs:text-2xl' :
                                    'text-center bg-black bg-opacity-20 font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                    {props.categories[5].description}
                                </div>
                            
                            </Link>

                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto w-full bg-primary p-52 shadow-lg'>

                    </div>
                </main>
            </div>
        </>
    );
}