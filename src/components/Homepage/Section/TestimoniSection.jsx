import React from 'react'

const TestimoniSection = ({isMobile}) => {
  return (
    <div className='mt-40' id='testimoni'>
        {
            isMobile ? 
            // Mobile View
            (<div>
               <h4 className='text-[22px] font-bold text-center'>Kata alumni yang telah lulus di CPNS dengan bimbingan kami</h4> 
               <div className='mt-10'>
                
               </div>
            </div>) : 
            // Desktop View
            (<div></div>)
        }
    </div>
  )
}

export default TestimoniSection