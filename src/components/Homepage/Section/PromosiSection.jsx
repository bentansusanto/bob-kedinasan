import React from 'react'
import { handleWhatsappMessage } from '../../../Data/ConnectWA'

const PromosiSection = ({isMobile}) => {
  return (
    <div className='mt-40'>
        {
            isMobile ? 
            // Mobile View
            (<div className='p-3 bg-orange-500'>
                <h2 className='font-bold text-[20px] text-white'>Coba kelas online persiapan masuk sekolah kedinasan sekarang!</h2>
                <div className='mt-10'>
                    <button onClick={handleWhatsappMessage} className='bg-white py-3 w-full rounded-full text-orange-500 font-semibold'>
                        Coba Kelas
                    </button>
                </div>
            </div>) : 
            // Desktop View
            (<div></div>)
        }
    </div>
  )
}

export default PromosiSection