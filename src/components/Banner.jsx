import React from 'react'
import avatar from '../assets/avatar.svg'
import {FaGithub,FaLinkedin,FaFacebook,FaWhatsapp} from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'


function Banner() {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[75vh] flex items-center'>
     
     <div className='container mx-auto p-5 '>
      
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
         
          <div className='flex-1 text-center lg:text-start font-secondary'>
            <h1 className='text-3xl font-bold leading-[0.8] lg:text-5xl '>Shady <span>Mahmoud </span></h1>
          
            
            <div className='text-2xl  mb-8 lg:text-4xl font-secondary font-semibold uppercase leading-[1]'> 
                <span className='mr-4 text-white'>I am a  </span>
                <TypeAnimation sequence={[
                    'Web Developer',
                    2000,
                    'Front-End Developer',
                    2000,
                    'Back-End Developer',
                    2000,
                    'Full-Stack Developer',
                    2000,
                  ]}
                    speed={50}
                    className='text-gradient'
                    wrapper='span'
                    repeat={Infinity}
                    
                />
              </div>  
           

          <p className='mb-12 max-w-lg mx-auto lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Officiis officia ullam autem voluptate quae recusandae
                ducimus! Nulla veritatis quod error?</p>
                  
          <div className='flex max-w-max lg:mx-0 mx-auto  gap-x-6 items-center mb-16'>
                   
          <a href="#contact">
            <button className='btn btn-lg '>Work With Me</button>
           </a>
                <a href="https://portfolio-one-ecru-41.vercel.app/" className='text-gradient btn-link text-2xl'>My portfolio</a>
                 
          </div>
                  
          <div className='flex text-2xl max-w-max gap-x-6 mx-auto mb-10 lg:mx-0'>

                  <a href="https://github.com/Shady-Mahmoud9">
                    <FaGithub className='text-white'/>
                  </a>

                  <a href="https://www.linkedin.com/in/shady-mahmoud-600321293/">
                    <FaLinkedin className='text-white'/>
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=100074005852470&mibextid=ZbWKwL">
                    <FaFacebook className='text-white'/>
                  </a>

                  <a href="https://wa.me/201007501435">
                    <FaWhatsapp className='text-white'/>
                  </a>

          </div>

        </div>

        <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[500px]'>
             <img src={avatar} alt="" />
        </div>
     </div>
     </div>
    </section>
  )
}

export default Banner
