import React from 'react'
import { IoMdAdd } from "react-icons/io";
import Link from 'next/link';
export default function Projects() {
  return (
    <div className='w-full flex flex-col'>
          <h5 className='font-semibold text-xl text-slate-900' >
            Your Gateways
          </h5>
          <div className='grid grid-cols-4 w-full py-4 gap-4'>
               <Link href={"/launch-pad"}>
                  <div className='bg-slate-100 w-full h-28 rounded-sm flex flex-col items-center justify-center hover:bg-slate-200'>
                        <IoMdAdd 
                          className='text-2xl'
                        />
                        <h5 className='text-sm '>Launch new gateway</h5>


                    </div>
                </Link>
             
             {[
                  {
                    label:"Test 1 ",
                    id:1
                  },
                  {
                    label:"Test 2 ",
                    id:2
                  }

               ].map((item)=>{
                return(
                  <Link href={`/gateways/${item?.id}/dashboard`}>
                      <div className='w-full bg-slate-400  py-4 px-4 h-28'>
                          <div className=' '>
                            <h5>{item?.label}</h5>
                          </div>
                  </div>
                  </Link>
               
                )
              })

            }
           

          </div>
    </div>
  )
}
