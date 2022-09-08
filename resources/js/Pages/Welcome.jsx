import React, { useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import { MdFeaturedPlayList, MdCategory } from 'react-icons/md';
import { Head } from '@inertiajs/inertia-react';
import SearchBar from '@/Components/SearchBar';
import Button from '@/Components/Button';
import Footer from '@/Components/Footer';


export default function Welcome(props) {
    const [hoverCategory, sethoverCategory] = useState(false);

    console.log(hoverCategory);
    return (
        <>
            <Head title="Welcome" />
            <div className='max-w-7xl mx-auto'>
                <header className='max-w-7xl w-full mx-auto p-2 mb-2'>
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
                        <img alt='ads' className='shadow
                         md:w-1/2 md:mr-2 md:mb-0 
                         xs:w-4/5 xs:mr-0 xs:mb-2' src='/images/ads.png' />
                        <img alt='ads' className='shadow
                         md:w-1/2 md:mr-2 md:mb-0 
                         xs:w-4/5 xs:mr-0 xs:mb-2' src='/images/ads.png' />
                    </div>
                   {props.featured.length!=0&&<>
                   
                   <div className='max-w-7xl mx-auto'>
                        <div className='flex items-center font-bold pl-2 mb-2
                        lg:text-lg
                        sm:text-base
                        xs:text-sm'><MdFeaturedPlayList className='text-secondary mr-2' />Featured Products</div>
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
                    </div></>}
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex items-center font-bold pl-2 mb-2
                          lg:text-lg
                          sm:text-base
                          xs:text-sm'><MdCategory className='text-secondary mr-2' />Shop by Categories</div>
                    </div>
                    <div className='max-w-7xl mx-auto grid grid-cols-6 auto-rows-max gap-2 mb-10
                    grid-rows-2
                    'onMouseEnter={() => sethoverCategory(true)} onMouseLeave={() => sethoverCategory(false)}>
                        <div className={`shadow ${props.categories[0].imagename} bg-no-repeat bg-cover bg-center rounded-md relative
                        md:p-20 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3
                        xs:p-14 xs:col-start-1 xs:col-end-4 xs:row-start-1 xs:row-end-2`}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black_trans font-bold text-primary absolute top-0 left-0 w-full h-full block xl:text-5xl md:text-3xl sm:text-2xl xs:text-xl' : 'hidden'}>
                                {props.categories[0].description}
                            </div>
                        </div>
                        <div className={props.categories[1].imagename + ` shadow bg-no-repeat bg-cover bg-center rounded-md relative 
                        md:p-20 md:col-start-3 md:col-end-5
                        xs:p-14 xs:col-start-4 xs:col-end-7`}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black_trans font-bold text-primary absolute top-0 left-0 w-full h-full block md:text-3xl sm:text-2xl xs:text-xl' : 'hidden'}>
                                {props.categories[1].description}
                            </div>

                        </div>
                        <div className={ props.categories[2].imagename + ` shadow bg-no-repeat bg-cover bg-center rounded-md relative
                        xl:col-start-5 xl:col-end-7
                        md:p-20 md:col-start-5 md:col-end-7
                        xs:p-14 xs:col-start-1 xs:col-end-4`}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black_trans font-bold text-primary absolute top-0 left-0 w-full h-full block md:text-3xl sm:text-2xl xs:text-xl' : 'hidden'}>
                                {props.categories[2].description}
                            </div>

                        </div>
                        <div className={props.categories[3].imagename + ` shadow  bg-no-repeat bg-cover bg-center rounded-md relative
                        xl:col-start-3 xl:col-end-5
                        md:p-20 md:col-start-3 md:col-end-7
                        xs:p-14 xs:col-start-4 xs:col-end-7`}>
                            <div className={hoverCategory ? 'flex justify-center rounded-md items-center bg-black_trans font-bold text-primary absolute top-0 left-0 w-full h-full block md:text-3xl sm:text-2xl xs:text-xl' : 'hidden'}>
                                {props.categories[3].description}
                            </div>

                        </div>
                        <div className={props.categories[4].imagename + ` shadow bg-no-repeat bg-cover bg-center rounded-md relative
                        xl:col-start-5 xl:col-end-6
                        md:p-20
                        xs:p-14 xs:col-start-1 xs:col-end-4`}>
                            <div className={hoverCategory ? 'flex justify-center items-center rounded-md bg-black_trans font-bold text-primary absolute top-0 left-0 w-full h-full block lg:text-2xl md:text-3xl sm:text-2xl xs:text-xl' : 'hidden'}>
                                {props.categories[4].description}
                            </div>

                        </div>
                        <div className={props.categories[5].imagename +` shadow bg-no-repeat bg-cover bg-center rounded-md relative xl:col-start-6 xl:col-end-7 md:p-20 xs:p-14 xs:col-start-4 xs:col-end-7`}>
                            <div className={hoverCategory ? 'flex justify-center items-center rounded-md bg-black_trans font-bold text-primary absolute top-0 left-0 w-full h-full block lg:text-2xl md:text-3xl sm:text-2xl xs:text-xl' : 'hidden'}>
                                {props.categories[5].description}
                            </div>

                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto w-full shadow-lg bg-f21 bg-no-repeat bg-cover bg-center 
                    sm:h-96 
                    xs:h-72'>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <h1 className='text-primary font-bold mb-6
                            md:text-5xl 
                            sm:text-4xl 
                            xs:text-3xl'>Forever 21</h1>
                            <h2 className='text-primary mb-1
                            md:text-2xl 
                            sm:text-xl
                            xs:text-lg'>Big Fashion Festival</h2>
                            <h3 className='text-primary mb-6
                             md:text-2xl 
                             sm:text-xl
                             xs:text-lg'>70% - 80% off</h3>
                            <Button className='bg-transparent border border-primary                              
                             md:text-xl 
                             sm:text-base
                             xs:text-xs'>Explore</Button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}