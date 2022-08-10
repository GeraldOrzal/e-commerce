import ProductCard from '@/Components/ProductCard';
import Slider from '@/Components/Slider';
import Authenticated from '@/Layouts/Authenticated'
import { Link } from '@inertiajs/inertia-react';
import React,{useState} from 'react'
import Checkbox from '@/Components/Checkbox';
import SearchBar from '@/Components/SearchBar';
import { IoIosArrowDown,IoIosArrowUp,IoMdOptions } from 'react-icons/io';
export default function Shop(props) {
  const [products, setproducts] = useState(props.allProducts)
  const [filterState, setfilterState] = useState({
    isOpen:false,
    category:{
      isOpen:true,
    },
    color:{
      isOpen:true,
    },
    discount:{
      isOpen:true,
    },
    sortby:{
      isOpen:false,
    },
  })
  console.log(props);
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<>
      
      <Link href={route('index')} className="text-xl mr-2">Home</Link>{">"}<label className="ml-2 text-xl">All Products</label>
      </>}
    >
      <div className='flex flex-row justify-end px-20 space-x-2 m-2'>
        <div className='relative text-secondary '>
          <button
            className='flex flex-row items-center'
            onClick={()=>setfilterState({
              ...filterState,
              isOpen:!filterState.isOpen,
              sortby:{
                ...filterState.sortby,
                isOpen:false
              }
            })}
          >Filters <IoMdOptions className='ml-2'/></button>
          <div className={`w-60 right-0 flex flex-col absolute bg-primary p-5 shadow rounded ${filterState.isOpen?"block":"hidden"} text-secondary z-10` }>
            <div className='flex flex-row '>
              Filters
              <Link href={route("shop")}>Clear all</Link>
            </div>
            <Slider/>
            <hr></hr>
            <div className='flex flex-row'>
              Categories
              <button 
                onClick={()=>setfilterState({
                  ...filterState,
                  category:{
                    ...filterState.category,
                    isOpen:!filterState.category.isOpen
                  }
                })}
              >
                { filterState.category.isOpen?<IoIosArrowUp/>:<IoIosArrowDown/>}
              </button>
            </div>
            <ul className={`${filterState.category.isOpen?"block":"hidden"}`}>
              {
                props.categories.map((a,index)=><li
                  key={index}
                  ><Checkbox
                  defaultChecked={route().params.categories&&route().params.categories.includes(a.description)?true:false}
                 name="category"
                 handleChange={
                  (data)=>{
                    if(data.target.checked){
                      
                      window.location.href = route('shop',{
                        ...route().params,
                        categories: route().params.categories?!route().params.categories.includes(a.description)?`${route().params.categories}&${a.description}`:route().params.categories:a.description,
                      });
                      
                      
                    }else{
                      if(route().params.categories==a.description){
                        window.location.href = route('shop');
                      }else{
                        window.location.href = route('shop',{
                          ...route().params,
                          categories: route().params.categories.includes(`&${a.description}`)?route().params.categories.replace(`&${a.description}`,''):route().params.categories.replace(`${a.description}&`,''),
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
            <div className='flex flex-row'>
              Color
              <button
              onClick={()=>setfilterState({
                ...filterState,
                color:{
                  ...filterState.color,
                  isOpen:!filterState.color.isOpen
                }
              })}
              >
                { filterState.color.isOpen?<IoIosArrowUp/>:<IoIosArrowDown/>}
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
        <div className='relative font-medium'>
        <button
            onClick={()=>setfilterState({
              ...filterState,
              isOpen:false,
              sortby:{
                ...filterState.sortby,
                isOpen:!filterState.sortby.isOpen
              }
            })}
            className='flex flex-row'
          >Sort By <IoIosArrowDown className='ml-2'/> </button>
          <div className={`w-60 right-0 flex flex-col absolute bg-primary p-5 shadow rounded ${filterState.sortby.isOpen?"block":"hidden"} z-10`}>
            <Link 
            className={`${route().params.sortby&&route().params.sortby.includes('popularity')?"text-secondary":""}`}
            href={route('shop',{
              ...route().params,
              sortby:
              route().params.sortby?
              !route().params?.sortby.includes('popularity')?'popularity':route().params.sortby
              
              :'popularity'
            })}>Popularity</Link>
            <Link
            className={`${route().params.sortby&&route().params.sortby.includes('ascending')?"text-secondary":""}`}
              href={route('shop',{
                ...route().params,
                sortby:route().params.sortby?
                !route().params.sortby.includes('ascending')?
                route().params?.sortby.includes('descending')?route().params.sortby.replace('descending','ascending'):'ascending'
                :route().params.sortby
                
                :'ascending'
              })
            }
            >Price - Low to High</Link>
            <Link
            className={`${route().params.sortby&&route().params.sortby.includes('descending')?"text-secondary":""}`}
              href={route('shop',{
                ...route().params,
                sortby:route().params.sortby?
                !route().params.sortby.includes('descending')?
                route().params?.sortby.includes('ascending')?route().params.sortby.replace('ascending','descending'):'descending'
                :route().params.sortby
                
                :'descending'
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
      <div className='container-fluid grid grid-cols-4 grid-rows-6 place-items-center gap-y-5 p-5'>
        {
          products.map(({ productid, productname, rating, price }) => <ProductCard
            productid={productid}
            key={productid}
            name={productname}
            price={price}
            rating={rating}
          />)
        }
      </div>
    </Authenticated>
  )
}
