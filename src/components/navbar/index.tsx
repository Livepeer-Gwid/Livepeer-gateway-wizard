import React from 'react'
import { AiOutlineGateway,AiOutlineQuestionCircle  } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <div className='w-full flex justify-between px-10 py-2.5 border-b border-slate-300 shadow font-mono'>
         <div className='w-3/5 flex items-center space-x-4'>
             <h5 className='font-[800] text-sm'>Gateway Wizard</h5>
             <h5></h5>
             <button className='bg-green-200 text-xs font-semibold px-4 py-2 rounded-sm'>Create</button>

         </div>
         <div className='w-2/5 flex items-center justify-end space-x-4'>
             <MdOutlineNotificationsNone 
               className='text-2xl text-slate-700'
             />
             <AiOutlineQuestionCircle 
               className='text-2xl text-slate-700'
             />
             <h5 className='bg-green-200 rounded-full font-bold text-xs h-8 w-8 flex items-center justify-center'>B</h5>    
         </div>
        
    </div>
  )
}
