import { useInView } from 'react-intersection-observer'
import React from 'react'

import CountUp from 'react-countup'

function About() {
  const [ref, inView] = useInView({
   threshold:0.5,
  })
  return (
    <section id='about' className='section lg:mb-0 mb-40' ref={ref}>
      <div className="container mx-auto p-5">
        <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        
        
        <div className='flex-1 bg-about bg-contain 
        bg-no-repeat h-[640px] mix-blend-lighten bg-top'> </div>{/**image */}



          <div className='flex-1'>
            <h2 className='h2 text-accent'>About ME</h2>
            <h3 className='text-xl lg:text-4xl mb-5'>Hello everybody ,My name is Shady Mahmoud , Iam a Front End Developer , Iam Studying at WeSchool For Applied Technology At The 3th grade .</h3>
            <p className='text-sm lg:text-base mb-8'>InThisWebsiteIacheivedalotofprojectsforwebsitesIhadacheivedthemwithFrontEndLanguages , Iwill show them Later,Of Cuarse Thiese Projects need alot of skills to make them and I will Show Them,too. Finally I will Make Contact Section To Set Links to My Social Media Accounts to Contact with me if you need Developer.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-5'>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ?<CountUp start={0} end={3} duration={8} /> : null}
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  years of <br /> Learning
                </div>
              </div>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ?<CountUp start={0} end={20} duration={8} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                 Projects <br /> completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ?<CountUp start={100} end={0} duration={5} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                 Clinets
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg h-full p-4  text-xl'>Contact With Me</button>
              <a href="#!" className='text-gradient btn-link text-2xl'>My portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
