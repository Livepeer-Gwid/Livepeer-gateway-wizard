import React from 'react'
import { IoMdTime } from "react-icons/io";

export default function Recent() {
  return (
    <div className='w-full flex flex-col min-h-[100px]'>
             <h5 
                className='flex items-center w-full space-x-1'
               >
                 <IoMdTime
                  className='text-2xl text-slate-900'
                  />
                <span className='font-semibold  text-slate-900 text-xl'>Recently viewed</span>         
           </h5>

           <div>
             --
           </div>
    </div>
  )
}
