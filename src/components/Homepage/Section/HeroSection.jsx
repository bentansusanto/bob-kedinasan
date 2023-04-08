import React, { useEffect, useState } from 'react'
// import BgHero from '../../../assets/STAN.svg'

const HeroSection = ({isMobile}) => {
  const bgImage = ["STAN.svg", "IPDN.svg"]
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((currentImage + 1) % bgImage.length);
        setIsTransitioning(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  },[currentImage, bgImage.length])


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
                    <img src={require('../../../assets/'+bgImage[currentImage])} alt="bg-hero" className={` ${isTransitioning ? "opacity-0" : "opacity-100"} w-screen transition-opacity duration-500`}/>
                </div>
            </div>) : 
            (<div></div>)
       }
    </div>
  )
}

export default HeroSection