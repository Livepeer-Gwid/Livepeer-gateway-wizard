import React from 'react'
import { IoBalloon } from "react-icons/io5";

export default function Header() {
  return (
    <div className='w-full fixed px-10 py-4 font-mono italic z-20 bg-white border-b'>
         <div className='flex items-center w-full'>
             <div className='w-1/2'>
                 
                 <h5 className='font-semibold text-lg flex '>
                  <IoBalloon 
                   className='text-green-500'
                  />
                  <span className='pt-2'> GATEWAY WIZARD</span>
                 
                </h5>

             </div>

             <div className='w-1/2 flex items-center space-x-3 justify-end'> 
                    <h5 className='font-semibold text-sm'>BLOGS</h5>
                    <h5 className='font-semibold text-sm'>MY ACCOUNT</h5>
                    <h5 className='font-semibold text-sm'>CONTACT</h5>            
            </div> 

         </div>

    </div>
  )
}
