import React from 'react'
import BgHero from '../../../assets/STAN.svg'

const HeroSection = ({isMobile}) => {
  return (
    <div>
       {
            isMobile ? 
            // Mobile View
            (<div className='from-orange-600 to-orange-300 bg-gradient-to-br w-screen h-[85vh] relative'>
                <div className='pt-36 px-3 text-white space-y-2'>
                    <h1 className='font-bold text-[20px]'>Bimbel online persiapan masuk Sekolah Kedinasan.</h1>
                    <p>Bimbingan belajar kedinasan dengan Live Teaching dua arah dan simulasi tryout untuk bantu kamu masuk PKN STAN, Polstat STIS, IPDN, Akpol, serta Akmil</p>
                </div>
                <div className='absolute bottom-0'>
                    <img src={BgHero} alt="bg-hero" className='w-screen'/>
                </div>
            </div>) : 
            (<div></div>)
       }
    </div>
  )
}

export default HeroSection