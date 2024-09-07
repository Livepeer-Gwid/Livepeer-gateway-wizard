import React from 'react'

export default function Panel({next}:{next:Number}) {
   console.log(next,"next")
  return (
    <div className='flex flex-col px-10 space-y-4'>
          { [
             {
                label:"Step 1",
                 desc:"Select stack",
                 value:1
             },
             {
                label:"Step 2",
                desc:"Specify details and configure options",
                value:2
             },
             {
                label:"Step 3",
                desc:"Launch",
                value:3
             }


              ].map((tab)=>{
                console.log(tab.value===next)
            return(
                <>
                <div className='flex flex-col space-y-1'>
                    <h5 className='text-xs text-slate-500'>{tab?.label}</h5>
                    <h5 className={`
                      ${next===tab?.value?'text-black text-sm font-semibold':
                        'text-slate-500 text-sm font-semibold'}`}
                     >
                      {tab?.desc}
                    </h5>
                </div>
                 { 
                   tab?.desc !="Launch"&&
                   <hr className='w-3/5'></hr>
                  }
              
                </>
              
            )
             })

          }

    </div>
  )
}
