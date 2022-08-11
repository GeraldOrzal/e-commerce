import React from 'react';

export default function Button({ type = 'submit', className = '',name, processing, children }) {
    return (
        <button
            name={name}
            type={type}
            className={
                `px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 bg-fifthdary text-primary {
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
