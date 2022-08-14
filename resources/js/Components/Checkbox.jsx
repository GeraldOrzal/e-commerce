import React,{useRef,useEffect, forwardRef} from 'react';

function Checkbox({ name, value, price,handleChange,defaultChecked,required,isChecked},ref) {
    
    return (
        <input
            checked={isChecked}
            ref={ref}
            type="checkbox"
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e,price)}
            required={required}
        />
    );
}
export default forwardRef(Checkbox);