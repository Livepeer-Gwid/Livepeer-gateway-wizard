import { Caramel } from 'next/font/google'
import React from 'react'


export default function MidSection() {
  return (
    <div className='w-full py-10 flex justify-center font-mono'>
           <div className='relative w-full flex justify-center'>
              <img 
                src={imgSrc}

              />      
              <div className='w-full h-full  absolute z-10 top-0 '>
                   <div className='w-full flex justify-center py-9'>
                     <video 
                       src={videoSrc}
                       className="w-1/4 rounded-sm"
                       autoPlay
                       controls
                     />
                     <div>
                      

                     </div>
                      

                  </div>
                   <div className=" w-full bg-white flex-col flex items-center py-">
                        <Banner />
                         <div className='flex flex-col space-y-4 items-center py-20'> 
                              <h5 className='text-6xl font-bold text-center text-slate-800'>Fuel the Future: 
                              <br></br>
                                 Be a Gateway Operator
                              </h5>
                              <button className='font-mono bg-green-400 w-[40%] py-2 font-semibold px-4 text-lg'>Launch A Gateway</button>

                         </div>

                    
                  </div>

              </div>

           </div>

    </div>
  )
}



const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 h-22  py-8 w-full">
      <div className="slide-banner whitespace-nowrap space-x-10 flex items-center">
       
        {[{
            label:"AI GATEWAY NODE"

          },
          {
            label:"TRANSCODING GATEWAY NODE"

          },
          {
            label:"CATALYST "

          },
          {
            label:"CDN"

          },
          {
            label:"AQUAREUM NODE"

          },
      
          ].map((item,i)=>{
          return(
            <div className="inline-block flex items-center space-x-10">
               <h5 className='text-4xl font-mono text-slate-800 font-semibold'>{item?.label}</h5>
               {i !=4&& <h5 className='h-4 w-4 rounded-full bg-gray-800'></h5> }
              
               
             </div>
          )
        })

        }

      </div>
    </div>
  );
};


const imgSrc="https://firebasestorage.googleapis.com/v0/b/reach-nft-auction.appspot.com/o/order%2Fglobe.gif?alt=media&token=9759fc81-5d0a-4786-b046-11de5f2af50d"
const videoSrc="https://firebasestorage.googleapis.com/v0/b/reach-nft-auction.appspot.com/o/order%2Fvideo.mp4?alt=media&token=0e6abfd2-ed4d-4f25-a090-eeeff678ecd6"