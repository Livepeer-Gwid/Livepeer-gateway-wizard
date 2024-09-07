import React from 'react'

export default function Guide() {
     let count=0
  return (
    <div className='w-full flex justify-center relative z-10 py-28 font-mono'>
          <div className='flex flex-col space-y-10 items-center '>
               <h5 className='text-3xl font-semibold'>How it works</h5>
               <div className='flex flex-col space-y-4'>
                  {[
                    {
                        label:'Pick a Gateway Stack',
                        text:' Select your gateway preference, AI, Transcoding etc.Pick a Cloud provider or use your dedicated cloud account.'
                    },
                    {
                        label:'Provide Your Details',
                        text:'Enter your desired gateway name, Your Arbitrum mainnet RPC URl and set a password.'
                    },
                    {
                        label:'Review & Launch',
                        text:'Review your settings and launch the gateway with just a click.'
                     },
                     {
                        label:'Configure and Fund Your Gateway',
                        text:'Select your transcoding preferences from our templates and fund your gateway wallet'
                     },
                     {
                        label:'Start Handling AI Tasks and Transcoding',
                        text:'Your gateway is now live and ready to handle transcoding tasks,route and perform AI inference tasks seamlessly!'
                     },

                     
                   ].map((tab)=>{
                      count=count +1
                    return(
                        <div className='flex bg-white w-full shadow border py-6 px-6 space-x-4'>
                             <h5 className='h-16 rounded-sm w-12 bg-green-300 flex items-center justify-center text-4xl font-bold'>{count}</h5>
                             <div className='w-full flex flex-col'>
                                  <h5 className='font-bold text-xl'>{tab?.label}</h5>
                                
                                  <h5 className='text-sm'> {tab?.text}</h5>
                            </div>
                        </div>
                    )
                  }) 

                  }

               </div>

               <div className='flex justify-center'>
                   <h5 className='w-3/5 text-center font-semibold'>Check out this step-by-step tutorial or watch a demonstration on Youtube for more details.</h5>
               </div>

          </div>

    </div>
  )
}
