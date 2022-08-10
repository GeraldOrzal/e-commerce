import React,{useState} from 'react';
import ProductCard from '@/Components/ProductCard';
import { Link, Head } from '@inertiajs/inertia-react';
import SearchBar from '@/Components/SearchBar';


export default function Welcome(props) {
    const [hoverCategory, sethoverCategory] = useState(false);

    console.log(hoverCategory);
    return (
        <>
            <Head title="Welcome" />
            <div className='container p-10 pt-5 mx-auto '>
                <header className='container mx-auto mb-2 flex flex-row justify-center items-center'>
                  <SearchBar
                    auth={props.auth}
                  />
                </header>
                <main>
                    <div className='container mx-auto flex flex-row justify-center items-center mb-7 '>
                        <div className='container bg-fourthdary p-32 py-20 w-3/6 text-center mr-2'>Ads</div>
                        <div className='container bg-fourthdary p-32 py-20 w-3/6 text-center'>Events</div>
                    </div>
                    <div className='text-lg text-fourthdary font-bold pl-2 mb-2 border-l-8 border-fifthdary'>Featured Products</div>
                    <div className='flex flex-row items-center space-x-2 overflow-x-scroll p-10 mb-7'>
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
                    <div className='text-lg text-fourthdary font-bold pl-2 mb-3 border-l-8 border-fifthdary'>Shop by Categories</div>
                    <div className='grid grid-cols-6 grid-rows-2 auto-rows-max gap-2 mb-10' onMouseEnter={()=>sethoverCategory(true)} onMouseLeave={()=>sethoverCategory(false)}>
                        <div className='col-start-1 col-end-3 row-start-1 row-end-3 relative'>
                            <img className="object-cover w-100" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                            <div className={hoverCategory ? 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-full block':'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[0].description}
                            </div>
                        </div>
                        <div className='col-start-3 col-end-5 relative'>
                            <img className="object-cover w-100" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                            <div className={hoverCategory ? 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-full block':'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[1].description}
                            </div>
                            
                        </div>
                        <div className='col-start-5 col-end-7 relative'>
                            <img className="object-cover w-100" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                            <div className={hoverCategory ? 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-full block':'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[2].description}
                            </div>
                            
                        </div>
                        <div className='relative'>
                            <img className="object-cover w-100" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                            <div className={hoverCategory ? ' text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-full block':'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[3].description}
                            </div>
                            
                        </div>
                        <div className='relative'>
                            <img className="object-cover w-100" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                            <div className={`transition ease-in-out text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-full ${hoverCategory?'block':'hidden'}` }>
                                {props.categories[4].description}
                            </div>
                            
                        </div>
                        <div  className='relative'>
                            <img className="object-cover w-100" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"/>
                            <div className={hoverCategory ? 'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-full block':'text-center bg-fourthdary font-bold text-5xl absolute top-0 left-0 w-full h-0 hidden'}>
                                {props.categories[1].description}
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-full bg-fourthdary p-52'>

                    </div>
                </main>
            </div>
        </>
    );
}