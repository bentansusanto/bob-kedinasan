import React from 'react'
import MediaQuery from '../MediaQuery';
import HeroSection from './Section/HeroSection';

const Homepage = () => {
    const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div>
        <HeroSection isMobile={isMobile}/>
    </div>
  )
}

export default Homepage