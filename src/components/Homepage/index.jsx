import React from 'react'
import MediaQuery from '../MediaQuery';
import HeroSection from './Section/HeroSection';
import InstitutSection from './Section/InstitutSection';
import PackageSection from './Section/PackageSection';
import PromosiSection from './Section/PromosiSection';
import ServiceSection from './Section/ServiceSection';
// import TestimoniSection from './Section/TestimoniSection';

const Homepage = () => {
    const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div>
        <HeroSection isMobile={isMobile}/>
        <ServiceSection isMobile={isMobile}/>
        <InstitutSection isMobile={isMobile}/>
        <PackageSection isMobile={isMobile}/>
        {/* <TestimoniSection isMobile={isMobile}/> */}
        <PromosiSection isMobile={isMobile}/>
    </div>
  )
}

export default Homepage