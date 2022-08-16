import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Authenticated from '@/Layouts/Authenticated'
import SellerNav from '@/Layouts/SellerNav';
import { useForm } from '@inertiajs/inertia-react';
import React, { useContext, useState } from 'react'
import { BsUpload, BsPlusSquare, BsCurrencyDollar } from 'react-icons/bs';


function DownloadTemplate() {
    return (<div className='flex flex-row items-center'>
        <div className='p-5'>
            <h1>
                Basic Template
            </h1>
            <div>
                The basic template contains required fields to list your product. The template can be used for any category.
            </div>
        </div>
        <div className='py-5 border my-2'>

        </div>
        <div className='p-5 text-center'>
            Tips on using the LTSC template.
        </div>
    </div>);
}



function UploadFile() {
    const [onDrag, setonDrag] = useState(false)
    const {setData,errors,data,submit,processing,setError} = useContext(PageData);
    
    
    return (<div className='bg-primary p-10' onDragEnter={()=>setonDrag(true)}
    
    >
        <label>{errors.uploadfile}</label>
        <form 
            onSubmit={submit}
            
        >
            <div className='bg-secondary rounded-md flex flex-col items-center space-y-5 p-5 '>
                {
                    Object.keys(data.uploadfile).length==0?<>
                    <BsUpload />
                <div>Select file or drop your excel file s here.</div>
                <Button
                    name="selectfile"
                    onClick={()=>{
                        let inputTemp = document.createElement('input');
                        inputTemp.type="file";

                        inputTemp.addEventListener('change',(e)=>{
                            if(Object.values(e.target.files).some((a)=>a.type != "text/csv")){
                                setError("uploadfile","DATA CONTAINS UNSUPPORTED FILES");
                                return;
                            }
                            setData({
                                ...data,
                                uploadfile:e.target.files
                            })
                            setError("uploadfile","");
                            
                        });
                        console.log(inputTemp);
                        inputTemp.click();
                    }}
                >Select File</Button>
                    </>:
                    <>
                        {
                            Object.values(data.uploadfile).map((e,index)=><label key={index}>{e.name}</label>)                        
                        }
                        <Button
                            type="submit"
                            processing={processing}
                            name="upload"
                        >UPLOAD</Button>
                    </>
                }
                
                
            </div>
        </form>
        <div className={`absolute w-full h-full bg-fourthdary top-0 left-0 ${onDrag?"block":"hidden"}`} 
        
            onDragEnter={(e)=>{
                
                setonDrag(true)
            }} 
            onDragOver={(e)=>{
                e.preventDefault();
                
                e.stopPropagation();

               
            }}
            
            onDrop={(e)=>{
                e.preventDefault();
                let input = document.createElement('input');
                input.type = 'file';

                console.log(e.dataTransfer.files);
                if(Object.values(e.dataTransfer.files).some((a)=>a.type != "text/csv")){
                    setError("uploadfile","DATA CONTAINS UNSUPPORTED FILES");
                    setonDrag(false);
                    return;
                }
                
                setData({
                    ...data,
                    uploadfile:e.dataTransfer.files
                })
                setError("uploadfile","");
                
                setonDrag(false);
            }}
            
            onDragLeave={(e)=>{
                e.preventDefault();
                console.log("leave",e)
                setonDrag(false)
            }
        }
        >

        </div>
    </div>);
}




function BasicInformation() {
    return (
        <>
            <div className='flex flex-row space-x-2'>
                <div>Product Images:</div>
                <div className='items-center flex flex-col'>
                    <button>
                        <BsPlusSquare />
                    </button>
                    Cover Photo
                </div>
                <div className='items-center flex flex-col'>
                    <button>
                        <BsPlusSquare />
                    </button>
                    Product Images
                </div>
                <div className='items-center flex flex-col'>
                    <button>
                        <BsPlusSquare />
                    </button>
                    Product Video
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <label className='text-right pt-2'>Product Name:</label>
                <Input />
                <label className='text-right pt-2'>Category:</label>
                <Input />
                <label className='text-right pt-2'>Product Description:</label>
                <Input />
            </div>
        </>)
        ;
}



function Specification() {
    return (<div className='grid grid-cols-2 gap-2 w-full'>
        <label>Brand:</label>
        <select>
            <option>Default</option>
        </select>
        <label>Country of Origin:</label>
        <select>
            <option>Default</option>
        </select>
        <label>Material:</label>
        <select>
            <option>Default</option>
        </select>
        <label>Pattern:</label>
        <select>
            <option>Default</option>
        </select>
        <label>Style:</label>
        <select>
            <option>Default</option>
        </select>
        <label>Top Length:</label>
        <select>
            <option>Default</option>
        </select>
        <label>Season:</label>
        <select>
            <option>Default</option>
        </select>
    </div>);
}



function SalesInformation() {
    return (<div className='w-full grid grid-cols-2'>
        <label>Price</label>
        <div className='flex flex-row'>
            <BsCurrencyDollar className='border h-8 w-8 bg-secondary rounded-tl-md rounded-bl-md' />
            <input className='bg-secondary border' />
        </div>
        <label>Stock</label>
        <div className='flex flex-row'>
            <BsCurrencyDollar className='border h-8 w-8 bg-secondary rounded-tl-md rounded-bl-md' />
            <input className='bg-secondary border' />
        </div>
        <label>Size image chart:</label>
        <div className='flex flex-col'>
            <BsPlusSquare />
            <label>Example</label>
        </div>

    </div>);
}



function Shipping() {
    return (<div className='grid grid-cols-2'>
        <label>Weight:</label>
        <div className='flex flex-row'>
            <input className='bg-secondary border' />
            <BsCurrencyDollar className='border h-8 w-8 bg-secondary rounded-tl-md rounded-bl-md' />
        </div>
        <label>Parcel Size:</label>
        <div className='flex flex-row'>
            <div className='flex flex-row'>
                <input className='bg-secondary border' />
                <BsCurrencyDollar className='border h-8 w-8 bg-secondary rounded-tl-md rounded-bl-md' />
            </div>
            <div className='flex flex-row'>
                <input className='bg-secondary border' />
                <BsCurrencyDollar className='border h-8 w-8 bg-secondary rounded-tl-md rounded-bl-md' />
            </div>
            <div className='flex flex-row'>
                <input className='bg-secondary border' />
                <BsCurrencyDollar className='border h-8 w-8 bg-secondary rounded-tl-md rounded-bl-md' />
            </div>
        </div>
        <label>Shipping Fee:</label>
        <select>

        </select>

    </div>);
}



function Other() {
    return (<div className='grid grid-cols-2 space-y-2 w-full'>
        <label>Pre Order:</label>
        <div className='flex flex-row space-x-2'>
            <input type="radio" />
            <label>Yes</label>
            <input type="radio" />
            <label>No</label>
        </div>
        <label>Condition</label>
        <select>

        </select>
    </div>);
}


function UploadProduct() {
    const [current, setcurrent] = useState(0)
    return (<div className='flex flex-row'>
        <ul className='p-2'>
            <li className={`${current == 0 ? "border-l-2" : ""} p-2`}
                onClick={() => setcurrent(0)}
            >Basic Information</li>
            <li className={`${current == 1 ? "border-l-2" : ""} p-2`}
                onClick={() => setcurrent(1)}
            >Specification</li>
            <li className={`${current == 2 ? "border-l-2" : ""} p-2`}
                onClick={() => setcurrent(2)}
            >Sales Information</li>
            <li className={`${current == 3 ? "border-l-2" : ""} p-2`}
                onClick={() => setcurrent(3)}
            >Shipping</li>
            <li className={`${current == 4 ? "border-l-2" : ""} p-2`}
                onClick={() => setcurrent(4)}
            >Others</li>
        </ul>
        <div className='py-5 border m-2'></div>
        <div className='flex flex-col flex-1 items-center p-5'>
            {current == 0 && <BasicInformation />}
            {current == 1 && <Specification />}
            {current == 2 && <SalesInformation />}
            {current == 3 && <Shipping />}
            {current == 4 && <Other/>}
            <div className='flex-1 w-full'>
                <div className='flex flex-row justify-end w-full space-x-2'>
                    <Button>Cancel</Button>
                    <Button>Save and List</Button>
                    <Button>Save and Published</Button>
                </div>
            </div>
        </div>
    </div>);
}

const PageData = React.createContext();
export default function AddProducts(props) {
    const [current, setcurrent] = useState(props.message.message?props.message.message[0]:"dltemplate");
    
    const { data, setData, post, processing, errors, setError,reset } = useForm({
        uploadfile:{}
    });
    console.log(props.message);
    const submit = e =>{
        if(e.nativeEvent.submitter.name=="selectfile"){
            e.preventDefault();
            return;
        }
        

        post(route('csvupload'),{
            onSuccess:()=>{
                console.log("SUCCESS");
            }
        });
    }

    const value = {
        errors,
        data,
        processing,
        setError,
        setData,
        submit
    }

    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Products</h2>}
        >
            <SellerNav>
                <div
                    className='h-full bg-primary flex-1 p-5'
                >
                    <div
                        className='flex flex-row border'
                    >
                        <div className={`p-5 ${current == "dltemplate" ? 'border-b-2' : ""}`} onClick={() => {
                            setcurrent("dltemplate")
                        }}>Download Template</div>
                        <div className={`p-5 ${current == "uploadfile" ? 'border-b-2' : ""}`}
                            onClick={() => {
                                setcurrent("uploadfile")
                            }}
                        >Upload File</div>
                        <div className={`p-5 ${current == "uploadproduct" ? 'border-b-2' : ""}`}
                            onClick={() => {
                                setcurrent("uploadproduct")
                            }}
                        >Upload Product</div>
                    </div>
                    <PageData.Provider
                        value={value}
                    >
                        {current == "dltemplate" && <DownloadTemplate />}
                        {current == "uploadfile" && <UploadFile
                            
                        />}
                        {current == "uploadproduct" && <UploadProduct />}
                    </PageData.Provider>
                </div>
            </SellerNav>
        </Authenticated>
    )
}
