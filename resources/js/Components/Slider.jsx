import React, { useState } from 'react'

export default function Slider() {
    const [minMaxValues, setminMaxValues] = useState({
        min:0,
        max:1000,
        
    })
  return (
    <>
        <label className='ml-2'>Price</label>
        <div className='relative items-center'>
            <input type="range" min={minMaxValues.min} max={1000} onChange={(data)=>{
                setminMaxValues({
                  ...minMaxValues,
                  max:data.target.value
                });
            }} className="disabled"/>
            <div className='flex flex-row'>
              <h3>Min:{`\n ${minMaxValues.min}`}</h3>
              <h3>Max:{`\n ${minMaxValues.max}`}</h3>
            </div>
        </div>

    </>
    
  )
}
