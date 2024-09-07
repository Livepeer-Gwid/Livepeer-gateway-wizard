import React,{useState} from 'react'
import { MdRadioButtonChecked,MdRadioButtonUnchecked } from "react-icons/md";

export default function Configuration() {
     const [type,setType]=useState("")
  return (
    <div className='w-full h-full space-y-4'>
         <h5 className='text-xl font-semibold'>Specify Details</h5>
         <div className='w-full min-h-[50px] bg-white shadow border  py-2'>
            <div className='px-4 border-b py-2'>
                <h5 className=' font-semibold font-mono text-[0.96rem]'> Gateway Name</h5>
                <h5 className='text-xs'>Your gateway name...</h5>
                <div className='w-full py-2'>
                    <input 
                        className='w-full border py-1 rounded-sm outline-green-500 px-4 text-xs h-10'
                    />
                </div>
                </div>
            <div className='px-4 border-b py-2'>
               <h5 className=' font-semibold font-mono text-[0.96rem]'> RPC URL</h5>
               <h5 className='text-xs'>Arbitrum mainnet rpc url</h5>
               <div className='w-full py-2'>
                  <input 
                    className='w-full border py-1 rounded-sm outline-green-500 px-4 text-xs h-10'
                  />
               </div>
            </div>

                <div className='px-4  py-2'>
                <h5 className=' font-semibold font-mono text-[0.96rem]'> Your password</h5>
                <h5 className='text-xs'>Arbitrum mainnet rpc url</h5>
                <div className='w-full py-2 flex space-x-3'>
                    <input 
                        className='w-full border py-1 rounded-sm outline-green-500 px-4 text-xs h-10'
                        placeholder='Enter password '
                      />
                     <input 
                        className='w-full border py-1 rounded-sm outline-green-500 px-4 text-xs h-10'
                        placeholder='Confirm password '
                    />
                </div>
                </div>
          </div>
    </div>
  )
}


