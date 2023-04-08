import React from 'react'
import MediaQuery from '../MediaQuery';
import HeroSection from './Section/HeroSection';
import PackageSection from './Section/PackageSection';
import ServiceSection from './Section/ServiceSection';
// import TestimoniSection from './Section/TestimoniSection';

const Homepage = () => {
    const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div>
        <HeroSection isMobile={isMobile}/>
        <ServiceSection isMobile={isMobile}/>
        <PackageSection isMobile={isMobile}/>
        {/* <TestimoniSection isMobile={isMobile}/> */}
    </div>
  )
}

export default Homepage