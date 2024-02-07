import React from 'react'

function Contact() {
  return (
    <section id='contact' className='lg:section py-16 '>
      <div className='container mx-auto p-5'>

        <div className='flex flex-col lg:flex-row'>


          <div className='flex-1 flex justify-start items-center'>
            <div >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] md:text-[60px]  lg:text-[80px]  leading-none mb-12'>Let's Work <br />together !</h2>
            </div>
          </div>
          
          <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent   border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder=' Enter Your Mail' type="text" />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder=' Enter Your Name' type="text" />
            <textarea className='resize-none mb-12 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder=' Enter Your message' name="" id="" cols="30" rows="0"></textarea>
            <button className='btn btn-lg'>Send messages</button>
          </form>
          



        </div>



      </div>
    </section>
  )
}

export default Contact
