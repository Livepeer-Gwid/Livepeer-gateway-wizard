import React,{ReactNode} from 'react'
import Navbar from "../../components/navbar"
import Panel from "./panel"

type Props={
    children:ReactNode
}
export default function Layout({children}:Props) {
  return (
    <div className='w-full h-screen overflow-y-hidden font-mono '>      
          <Navbar/>
           <div className='w-full h-full flex justify-center py-5'>
                <div className='w-4/5 h-full flex space-x-10'>
                     <div className='w-1/3 h-full'>
                         <Panel />
                     </div>
                     <div className='w-full  oveflow-y-scroll h-full '>
                          {children}      
                     </div>
                </div>
          </div>
    </div>
  )
}
