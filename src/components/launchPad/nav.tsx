import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from 'next/link';

export default function Navigator() {
  return (
    <div className='w-full flex px-10 py-5 items-center space-x-2'>
        <Link href={"/gateways"}>
            <h5 className='text-sm font-semibold underline text-green-800 cursor hover:text-green-600'>Gateways</h5>
        </Link>
        
          < SlArrowRight 
             className='text-sm font-bold text-slate-600'
          />
          <h5 className='text-sm font-semibold text-slate-800'>Launch </h5>

    </div>
  )
}
