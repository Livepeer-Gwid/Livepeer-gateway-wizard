import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className='w-full flex justify-center px-10 font-mono'>
           <div className='w-full flex flex-col items-center'>
              <h5 className='text-8xl w-full font-black font-mono text-center'
      
               >
                 Your Gateway to <span className='text-green-600'>Livepeer</span>,
             </h5>
             <h5 className='font-bold text-3xl py-2'>
                <TextAnimate />
             </h5>

           </div>
          

    </div>
  )
}


const TextAnimate = () => {
    return (
      <TypeAnimation
        sequence={[
          'Just', 
          500, 
          'Just One', 
          500,
          'Just One Click away.', 
          
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        cursor={true}
        style={{ fontSize: '2em', display: 'inline-block' ,fontWeight:'600'}}
      />
    );
  };