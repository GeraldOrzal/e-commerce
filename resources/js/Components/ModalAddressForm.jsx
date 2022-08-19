import React from 'react'

export default function Modal(props) {

    return (
        <div className={`relative z-10 ${props.isactive?"":"hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true" >
       
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto ">
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <div className="relative bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                       {props.children}
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">{props.buttonname}</button>
                            <button
                                onClick={props.whenClick}
                             type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
