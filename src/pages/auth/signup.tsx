import React from 'react'
import Header from '@/components/home/header'

export default function Signup() {
  return (
    <div className='w-full h-full font-mono'>
      <Header />
      <div className='w-full flex h-screen justify-center py-20 items-center'>
        <div className='flex flex-col items-center w-full space-y-5'>
           <h5 className='text-3xl font-semibold'>Register</h5>

           <div className='w-1/2 shadow-lg py-10 px-8 space-y-8 bg-white'>
                {[
                  {
                    label:"Email address",
                    text:''
                  },
                  {
                    label:"Password",
                    text:''
                  },


                  ].map((item)=>{
                   return(
                    <div className='flex flex-col space-y-3'>
                         <label>{item?.label}  <span className='text-red-500'>*</span>
                        </label>
                        <input 
                          className='border-b w-full outline-green-300 py-3'
                        />
                    </div>
                   )
                })

                }
                
                <div className='w-full flex items-center space-x-2'>
                    <input 
                    className='outline-green-400 '
                    type={"checkbox"}
                    />
                    <h5 className='font-semibold text-gray-600'>I want to receive updates about products and promotions.</h5>

                </div>

                <div className=''>
                  <button className='bg-green-500 px-4 text-sm rounded-sm font-semibold py-2'>Register</button>

                </div>
           </div>

         

        </div>
           

      </div>

    </div>
  )
}
