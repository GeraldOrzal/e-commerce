
import Button from '@/Components/Button'
import CartProductRow from '@/Components/CartProductRow'
import Checkbox from '@/Components/Checkbox'
import Authenticated from '@/Layouts/Authenticated'
import React,{useState,useRef,useEffect} from 'react'
import { Link,useForm } from '@inertiajs/inertia-react'




export default function Cart(props) {
  const initial = {
    count:0,
    
    total:0,
    
  }
  const [itemsSelected, setitemsSelected] = useState(initial);
  const { data, setData, patch,delete:remove, processing, errors, reset } = useForm({
    'cartids':[]
  });
  const checkedBox = useRef([]);
  
  const submit = (e) => {
    if(data.cartids.length==0){
      e.preventDefault();
      alert("NO DATA AVAILABLE BITCH");
      return;
    }
    if(e.nativeEvent.submitter.name=="remove"){
      
      remove(route('removecart'));
      
      return;
    }
    patch(route('movetowishlist'));
    
  };
  
  

  const handleChecked = (newdata,price)=>{
    if(newdata.target.checked){
      
      setData('cartids',[...data.cartids,newdata.target.value]);  
      setitemsSelected({
        ...itemsSelected,
        
        count:itemsSelected.count+1,
        total:itemsSelected.total+price
      })
      
    }else{
      const temp = data.cartids;
      temp.splice(temp.indexOf(newdata.target.value),1);
      setData('cartids',temp);  
      

      setitemsSelected({
        ...itemsSelected,
        
        count:itemsSelected.count-1,
        total:itemsSelected.total-price
      })
      
    }
  };
  const checkAll = (parentData)=>{
    var tempArr = []
    checkedBox.current?.forEach((elemdata)=>{
      tempArr.push(parseInt(elemdata.current.value))
      elemdata.current.checked = parentData.target.checked
    })
    
    if(parentData.target.checked){
      setData('cartids',tempArr);    
      
      setitemsSelected({
        ...itemsSelected,        
        count:checkedBox.current.length,
        total:props.maxPrice
      })
    }else{
      setData('cartids',[]);  
      setitemsSelected(initial)
    }
    
    
  }
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <form
        onSubmit={submit}
        className='flex flex-col items-center w-full mx-auto'
      >
        <div className='flex flex-row justify-end items-center'>
          <h2 className='text-xl font-bold py-2'>My Orders</h2>
          <label className='text-sm ml-2 py-2'>(2 Items)</label>
        </div>
        <div>
          
          <h2 className='font-bold'>SellerName</h2>
          {
            props.cart.map(({cartid,productname,brandid,price},index)=><CartProductRow setRef={(data)=>{
              checkedBox.current[index] = data
            }} key={cartid} id={cartid} req={itemsSelected.count!=0?false:true} handleChange={handleChecked} productname={productname} brand={props.brand} price={price} date={props.date} address={props.address} ordernumber={props.ordernumber} />)
          }
          
          
        </div>
        <div className='flex flex-row items-center p-2 space-x-5'>
            <div >
              <Checkbox className='inline-block'
                handleChange={checkAll}
                isChecked={props.cart.length!=0&&itemsSelected.count==props.cart.length?true:false}
              />
              <h2 className='inline-block'>Select all ({itemsSelected.count})</h2>
            </div>
            <Button type='submit' name="remove" processing={processing}>Remove</Button>
            <Button type="submit" name="move" processing={processing}>Move to Wishlist</Button>
            <h2>{`Total(${itemsSelected.count} items): ₱${itemsSelected.total}.00`}</h2>
            <Button>Checkout</Button>
        </div>
      </form>
    </Authenticated>
  )
}
