import ProductCard from '@/Components/ProductCard';
import Slider from '@/Components/Slider';
import Authenticated from '@/Layouts/Authenticated'
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react'
import Checkbox from '@/Components/Checkbox';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';

import { FiFilter } from 'react-icons/fi';
import Chat from '@/Components/Chat';

export const MessageContext = React.createContext();
export default function Shop(props) {
  const [products, setproducts] = useState(props.allProducts.data)
  const [message, setmessage] = useState([])
  const [newMessage, setnewMessage] = useState("");
  const value = {
    message, setmessage
  }
  console.log(props)
  const [filterState, setfilterState] = useState({
    isOpen: false,
    category: {
      isOpen: true,
    },
    color: {
      isOpen: true,
    },
    discount: {
      isOpen: true,
    },
    sortby: {
      isOpen: false,
    },
  })

  useEffect(() => {

    const channel = Echo.private('private.message.1')

    channel.subscribed(() => {
      console.log("SUBBED");
    }).listen('.message', (e) => {
      console.log(e, "HEHEHE");
      if (props.auth.user.name == e.user.name) {
        return;
      }
      setnewMessage(
        e.message,
      );
    });

    return () => {
      setproducts(null);
    }
  }, [])

  useEffect(() => {

    setmessage([
      ...message,
      {
        message: newMessage,
        ismine: false
      }
    ])
    return () => {

    }
  }, [newMessage])

  console.log(products);
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={props.isShowResults ? <>
        <h2 className="text-xl">{`Show results ${props.resultdata} products`}</h2>
      </> : <><div className='flex flex-row items-center'>
        <Link href={route('index')} className="text-secondary mr-2
           lg:text-xl
           md:text-lg
           xs:text-base">Home</Link>
        <MdArrowForwardIos className='text-secondary' />
        <label className="ml-2 text-secondary
         lg:text-xl
         md:text-lg
         xs:text-base">All Products</label>
      </div></>}
    >
      <div className='bg-primary flex flex-row justify-end py-2  space-x-2
      lg:px-14
      xs:px-6'>
        <div className='relative'>
          <button
            className='flex flex-row items-center
            lg:text-base
            xs:text-sm'
            onClick={() => setfilterState({
              ...filterState,
              isOpen: !filterState.isOpen,
              sortby: {
                ...filterState.sortby,
                isOpen: false
              }
            })}
          >Filters <FiFilter className='ml-2' /></button>
          <div className={`w-60 right-0 flex flex-col absolute bg-primary p-5 shadow-lg rounded ${filterState.isOpen ? "block" : "hidden"} text-secondary z-10`}>
            <div className='flex flex-row bg-primary justify-between
             lg:text-base
             xs:text-sm'>
              Filters
              <Link href={route("shop", { page: 1 })} className='ml-1
               lg:text-base
               xs:text-sm'>Clear all</Link>
            </div>
            <Slider />
            <hr></hr>
            <div className='flex flex-row
             lg:text-base
             xs:text-sm'>
              Categories
              <button
                className='ml-5'
                onClick={() => setfilterState({
                  ...filterState,
                  category: {
                    ...filterState.category,
                    isOpen: !filterState.category.isOpen
                  }
                })}
              >
                {filterState.category.isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            <ul className={`${filterState.category.isOpen ? "block" : "hidden"}
             lg:text-base
             xs:text-sm`}>
              {
                props.categories.map((a, index) => <li
                  key={index}
                  className='text-black'
                ><Checkbox
                    defaultChecked={route().params.categories && route().params.categories.includes(a.description) ? true : false}
                    name="category"
                    handleChange={
                      (data) => {
                        if (data.target.checked) {

                          window.location.href = route('shop', {
                            ...route().params,
                            categories: route().params.categories ? !route().params.categories.includes(a.description) ? `${route().params.categories}&${a.description}` : route().params.categories : a.description,
                          });


                        } else {
                          if (route().params.categories == a.description) {
                            window.location.href = route('shop', { page: 1 });
                          } else {
                            window.location.href = route('shop', {
                              ...route().params,
                              categories: route().params.categories.includes(`&${a.description}`) ? route().params.categories.replace(`&${a.description}`, '') : route().params.categories.replace(`${a.description}&`, ''),
                            });
                          }
                        }
                      }
                    }
                    value={a.description}
                  />{a.description}</li>)
              }

            </ul>
            <hr></hr>
            <div className='flex flex-row
             lg:text-base
             xs:text-sm'>
              Color
              <button
                onClick={() => setfilterState({
                  ...filterState,
                  color: {
                    ...filterState.color,
                    isOpen: !filterState.color.isOpen
                  }
                })}
              >
                {filterState.color.isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {/* <ul className={`${filterState.color.isOpen?"block":"hidden"}`}>
              <li><Checkbox/>Blue</li>
              <li><Checkbox/>Red</li>
              <li><Checkbox/>Green</li>
              <li><Checkbox/>Yellow</li>
              <button>+ 40 more</button>
            </ul>
            <hr></hr> */}
          </div>
        </div>
        <div className='relative font-md'>
          <button
            onClick={() => setfilterState({
              ...filterState,
              isOpen: false,
              sortby: {
                ...filterState.sortby,
                isOpen: !filterState.sortby.isOpen
              }
            })}
            className='flex flex-row items-center
            lg:text-base
            xs:text-sm'
          >Sort By <IoIosArrowDown className='ml-2' /> </button>
          <div className={`w-60 right-0 flex flex-col absolute bg-primary p-5 shadow-lg rounded ${filterState.sortby.isOpen ? "block" : "hidden"} z-10
           lg:text-base
           xs:text-sm`}>
            <Link
              className={`${route().params.sortby && route().params.sortby.includes('popularity') ? "text-secondary" : ""}
            lg:text-base
            xs:text-sm`}
              href={route('shop', {
                ...route().params,
                sortby:
                  route().params.sortby ?
                    !route().params?.sortby.includes('popularity') ? 'popularity' : route().params.sortby

                    : 'popularity'
              })}>Popularity</Link>
            <Link
              className={`${route().params.sortby && route().params.sortby.includes('ascending') ? "text-secondary" : ""}
            lg:text-base
            xs:text-sm`}
              href={route('shop', {
                ...route().params,
                sortby: route().params.sortby ?
                  !route().params.sortby.includes('ascending') ?
                    route().params?.sortby.includes('descending') ? route().params.sortby.replace('descending', 'ascending') : 'ascending'
                    : route().params.sortby

                  : 'ascending'
              })
              }
            >Price - Low to High</Link>
            <Link
              className={`${route().params.sortby && route().params.sortby.includes('descending') ? "text-secondary" : ""}`}
              href={route('shop', {
                ...route().params,
                sortby: route().params.sortby ?
                  !route().params.sortby.includes('descending') ?
                    route().params?.sortby.includes('ascending') ? route().params.sortby.replace('ascending', 'descending') : 'descending'
                    : route().params.sortby

                  : 'descending'
              })}
            >Price - High to Low</Link>
            {/* <Link
            className={`${route().params.sortby&&route().params.sortby.includes('newest')?"text-primary":""}`}
              href={route('shop',{
                ...route().params,
                sortby:route().params.sortby?
                !route().params.sortby.includes('newest')?   `${route().params.sortby}&newest`:route().params.sortby             
                :'newest'
              })}
            >Newest</Link> */}

          </div>
        </div>
      </div>
      <MessageContext.Provider
        value={value}
      >
        <Chat
          user={props.auth.user}
        />
      </MessageContext.Provider>
      <div className='max-w-7xl mx-auto bg-primary w-full flex flex-row flex-wrap justify-center items-center auto-rows-auto gap-2
      lg:p-6 lg:pt-0
      xs:p-0 xs:pt-0'>
        {
          products?.map(({ productid, productname, rating, price }) => <ProductCard
            productid={productid}
            key={productid}
            name={productname}
            price={price}
            rating={rating}
          />)
        }
      </div>
      <div className='flex flex-row space-x-2 justify-center mb-2'>
        {/*       
        {
          RenderButtonBoxes()
        } */}
      </div>
    </Authenticated>
  )
}
