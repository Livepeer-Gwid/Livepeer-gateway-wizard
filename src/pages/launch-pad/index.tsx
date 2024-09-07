import React,{useState} from 'react'
import Navigator from '@/components/launchPad/nav'
import Navbar from '@/components/navbar'
import Panel from "../../components/launchPad/panel"
import SelectStack from '@/components/launchPad/selectStack'
import Configuration from '@/components/launchPad/configuration'
import Loader from '@/components/launchPad/loader'

export default function LaunchPad() {
     const [next,setNext]=useState(1)
  return (
     <div className='w-full h-full overflow-y-hidden font-mono'>
          <Navbar />  
          <div className='w-full flex justify-center px-10 h-full overflow-y-scroll'>
               <div className='w-full h-full border-l-2'>
                          <Navigator/>
                       <div className='flex w-full'>
                            <div className='w-1/3 h-full '>
                                <Panel
                                  next={next}
                                />
                            </div>
                            <div className='w-full h-full overlow-y-scroll'>
                                 {next===1&&  <SelectStack/>}
                                 {next===2&&  <Configuration/>}
                                 {next===3&&  <Loader/>}
                                  {next !=3 &&
                                    <div 
                                      className='w-full flex justify-end space-x-4 py-4'>    
                                      <button 
                                        className='text-sm font-semibold'
                                         onClick={()=>setNext(next-1)}
                                       >
                                        Cancel
                                      </button>
                                      <button 
                                        className='bg-orange-500 px-4 py-1.5 text-xs rounded-sm'
                                        onClick={()=>setNext(next+1)}
                                       >
                                        Next
                                      </button>
                                      </div>

                                  }   
                             </div>

                       </div>
                      
               </div>             
          </div>
     </div>
  )
}
