import React from 'react'
import backgroundImage from './../../assets/about.jpg'
import Navbars from '../../layouts/Navbars';

const About = () => {
  return (
    <>
      <div>
            <Navbars />
        </div>
       <div style={{ backgroundImage:`url(${backgroundImage})`,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>
       </div>
       </>
  )
}

export default About