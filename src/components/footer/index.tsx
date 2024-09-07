import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";

export default function Footer() {  
  return (
    <div className='w-full flex flex-col items-center pt-5 pb-4'>
        <div className='w-3/5 flex py-7'>
            {[
               
                {
                    label:"Quick Links",
                    links:[
                        {
                            text:"About Livepeer.org"
                        },
                        {
                            text:"Blog"
                        },
                        {
                            text:"Livepeer Discord"
                        }  
                    ]
                },
                {
                    label:"Contact",
                    links:[
                        {
                            text:"gwid@yahoo.com"
                        },
                      
                    ]     
                }

             ]?.map((item)=>{
                return(
                    <div className='w-1/4 flex flex-col space-y-10'>
                        <h5 className='font-semibold'>{item?.label}</h5>
                         <div className='flex flex-col'>
                            {item?.links?.map((link)=>{
                                return(
                                    <h5 className='text-gray-700 text-sm'>{link?.text}</h5>
                                )
                            })
                            }
                        </div>

                    </div>
                )
            })

            }

        </div>

        <div className='w-3/5 flex border-t justify-between py-6'>
            <div></div>
            <div className='flex items-center space-x-3'>
                <FaGithub
                 className='text-2xl'
                 />
                <FaLinkedin 
                   className='text-2xl'
                 />

            </div>
            
        </div>


    </div>
  )
}
