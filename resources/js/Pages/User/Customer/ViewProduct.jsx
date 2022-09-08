import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import React from 'react';
import { Link, useForm } from '@inertiajs/inertia-react';
import { BsCart3 } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
export default function ViewProduct({ auth, errors, product }) {


  const { data, setData, post, processing, reset } = useForm({
    'productid': product?.productid,
    'iswishlist': false
  });


  const submit = (e) => {

    post(route('addcart'));

  };

  
 
  
  const productdetails = product?JSON.parse(product?.productdetails):null;
  const productimages = product?JSON.parse(product?.imagesname):null;

  return (
    <Authenticated
      auth={auth}
      errors={errors}
      product={product}
      header={
        <div className='flex flex-row items-center'>
          <Link href="/" className="text-disable mr-2
             lg:text-xl
             md:text-lg
             xs:text-base">Home</Link>
          <MdArrowForwardIos className='text-disable' />
          <label className="ml-2 text-disable
             lg:text-xl
             md:text-lg
             xs:text-base">View Product</label>
        </div>}
    >
    {
      product?( 
        <>
         <div className='max-w-7xl mx-auto w-full h-auto flex
      sm:flex-row xs:flex-col md:px-10 sm:px-2 xs:px-1'>
        <div className='md:h-96 md:w-3/5 xs:h-64 xs:w-full grid grid-cols-5 grid-rows-5 gap-2 mr-2'>
          {
            Object.keys(productimages).slice(1).map((data,index)=><img src={productimages[data]} className={`shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-1 col-end-2 row-start-${index+1} row-end-2`}/>)
          }
          {/* <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-1 col-end-2 row-start-1 row-end-2'></div>
          <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-1 col-end-2 row-start-2 row-end-3'></div>
          <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-1 col-end-2 row-start-3 row-end-4'></div>
          <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-1 col-end-2 row-start-4 row-end-5'></div>
          <div className='shadow-lg bg-sample bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-1 col-end-2 row-start-5 row-end-6'></div> */}
          <img src={JSON.parse(product.imagesname).image1} className='shadow-lg  bg-no-repeat bg-cover bg-center rounded-md w-full h-full col-start-2 col-end-6 row-start-1 row-end-6'/>
        </div>
        <div className='flex flex-col md:space-y-2 xs:space-y-1 
        md:w-2/5 md:mt-0 md:pl-4
        sm:mt-0
        xs:w-full xs:mt-2 xs:pl-2'>
          <h1 className='md:text-3xl sm:text-xl xs:text-lg'>{product?.productname}</h1>
          <label className='flex flex-row items-center md:text-sm xs:text-xs'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar className='mr-2' />
            3.0
          </label>
          <label className='md:text-base xs:text-sm'>₱ {product?.price}.00</label>
          <label className='md:text-base xs:text-sm'>Select Size</label>
          <div className='flex flex-row items-center flex-wrap'>
            <div className='border border-disable text-disable shadow py-1 px-2 rounded-md mr-1 mb-1
            md:text-base 
            xs:text-xs'>XS</div>
            <div className='border border-disable text-disable shadow py-1 px-2 rounded-md mr-1 mb-1
            md:text-base 
            xs:text-xs'>SM</div>
            <div className='border border-disable text-disable shadow py-1 px-2 rounded-md mr-1 mb-1
            md:text-base 
            xs:text-xs'>MD</div>
            <div className='border border-disable text-disable shadow py-1 px-2 rounded-md mr-1 mb-1
            md:text-base 
            xs:text-xs'>LG</div>
            <div className='border border-disable text-disable shadow py-1 px-2 rounded-md mr-1 mb-1
            md:text-base 
            xs:text-xs'>XL</div>
            <div className='border border-disable text-disable shadow py-1 px-2 rounded-md mr-1 mb-1
            md:text-base 
            xs:text-xs'>2XL</div>
          </div>
          <label className='md:text-base xs:text-sm'>Select Color</label>
          <div className='flex flex-row items-center flex-wrap'>
            <div className='border bg-primary border-disable shadow md:p-4 xs:p-3 rounded-md mr-1'></div>
            <div className='border bg-secondary border-disable shadow md:p-4 xs:p-3 rounded-md mr-1'></div>
            <div className='border bg-error border-disable shadow md:p-4 xs:p-3 rounded-md mr-1'></div>
          </div>

          <form

            onSubmit={submit}
          >

            <Button
              type='submit'

              className='flex items-center w-fit 
          md:text-sm 
          sm:self-start 
          xs:self-end xs:text-xs'>Add to cart <BsCart3 className='md:ml-2 xs:ml-1' /></Button>
          </form>
        </div>
      </div>
      <div className='max-w-7xl w-full mx-auto flex flex-row justify-center items-center p-2 mt-4 
      md:space-x-20 md:text-base
      sm:space-x-10 
      xs:space-x-4 xs:text-sm'>
        <div>Product Details</div>
        <div>Specifications</div>
        <div>Review & Ratings</div>
      </div>
      <div className='max-w-7xl w-full mx-auto px-10'>
        <div className='border-b'></div>
        <div className='p-5 grid grid-cols-3 gap-5'>
        {Object.keys(productdetails)?.map((data) => <label>{` ${data} : ${productdetails[data]}`}</label>)}
        </div>
      </div>
      </>
     ):<>No product available</>
    }
    </Authenticated>
  )
}
