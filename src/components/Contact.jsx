import React from 'react'
import data from '../data'
import Aos from 'aos'
import "aos/dist/aos.css";
import sendEmail from '/src/assets/send-email-1.png'
import sendEmailLight from '/src/assets/send-email-dark.png'
// import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  return (
    <section data-aos="fade-up" className='h-screen overflow-hidden px-8 md:px-28 lg:px-32 border-t-4 border-gray-200 section bg-bg text-content'>
      {/* Contact Small */}
        <div className=' mt-24 mb-10 px-6 py-4 lg:hidden lg:w-2/3 ml-auto lg:mt-10 lg:h-4/5'>
      <h3 className='py-4 lg:text-xl mb-10 text-content rounded-xl text-center placard-contact border-content border-4'> Can't wait to speak with you 🔊</h3>
            <h2 className='font-bold text-3xl lg:text-5xl'>Reach out to me!</h2>
            <p className='text-lg lg:text-2xl font-normal lg:mt-3'>Got a question or proposal, or just want to say hello? Go ahead.</p>
            <form method="POST" action="https://formspree.io/f/xayrnoya" className='flex flex-col mt-4'>
            <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name" className='text-base lg:text-xl'>Your name</label>
                <input 
                    type="text"
                    id='name'
                    name='name'
                    className='rounded-none border-b bg-none dark:bg-bg border-black dark:border-content  lg:text-lg h-8 lg:h-12 py-4 text-sm mb-3 lg:mb-4 mt-1 focus:border-gray-400 outline-none'
                    placeholder='Enter your name'
                     />
                <label htmlFor="email" className='text-base lg:text-xl'>Your Email Address</label>
                <input 
                    type="text"
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    className='rounded-none border-b bg-none border-black dark:border-content lg:text-lg h-8 lg:h-12 py-4 text-sm mb-3 lg:mb-4 mt-1 dark:bg-bg focus:border-gray-400 outline-none'
                     />
                <label htmlFor="message" className='text-base lg:text-xl'>Your Message</label>
                <textarea
                    cols="30" 
                    rows="10"
                    id='message'
                    name='message'
                    className='rounded-none border-b dark:bg-bg border-black dark:border-content h-24 lg:h-40 px-0 text-sm lg:text-lg pb-16 lg:pb-28 pb-22 mb-4 mt-1 focus:border-gray-400 outline-none'
                    placeholder='Hi, I will like to reach out to you ....'
                    >

                    </textarea>
                    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                     <button 
                     type='submit'
                     className='text-xl bg-white lg:text-2xl w-1/3 border-2 mt-5 border-gray-500 ml-auto dark:bg-bg'
                     >SEND <img src={sendEmail} width="20px" className='hidden dark:inline' alt="" /><img src={sendEmailLight} width="20px" className='dark:hidden inline' alt="" /></button>
                     
            </form>
        </div>


        {/* Contact Large */}
        <div className=' mt-96 mb-10 mx-auto py-4 hidden lg:block lg:w-2/3 ml-auto lg:mt-10 lg:h-4/5'>
          <div className='flex flex-col text-center mt-20'>
            <h2 className='font-bold text-3xl lg:text-5xl'>{data.contact.header}</h2>
            <p className='text-lg lg:text-2xl font-normal lg:mt-3'>{data.contact.paragraph}</p>
          </div>
            <form method="POST" action="https://formspree.io/f/xayrnoya">
              <div className='flex flex-row gap-12 items-center justify-center mt-4'>
              <div className='flex flex-col w-full'>
                <label htmlFor="name" className='text-base lg:text-xl'>{data.contact.name.label}</label>
                <input 
                    type="text"
                    id='name'
                    name='name'
                    className='rounded-none border-b dark:bg-bg border-black dark:border-content lg:text-lg h-8 lg:h-12 py-4 text-sm mb-3 lg:mb-4 mt-1 focus:border-gray-400 outline-none active:border-gray-400'
                    placeholder={data.contact.name.placeholder}
                     />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor="email" className='text-base lg:text-xl'>{data.contact.email.label}</label>
                <input 
                    type="text"
                    id='email'
                    name='email'
                    placeholder={data.contact.email.placeholder}
                    className='rounded-none border-b dark:bg-bg border-black dark:border-content lg:text-lg h-8 lg:h-12 py-4 text-sm mb-3 lg:mb-4 mt-1 focus:border-gray-400 outline-none active:border-gray-400'
                     />
              </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="message" className='text-base lg:text-xl'>{data.contact.message.label}</label>
                <textarea
                    cols="30" 
                    rows="10"
                    id='message'
                    name='message'
                    className='rounded-none border-b dark:bg-bg border-black dark:border-content h-24 lg:h-40 px-0 text-sm lg:text-lg pb-16 lg:pb-28 pb-22 mb-4 mt-1 focus:border-gray-400 outline-none'
                    placeholder='Hi, I will like to reach out to you ....'
                    >

                    </textarea>
                    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </div>
                     <button 
                     type='submit'
                     className='text-xl bg-white lg:text-2xl relative mx-auto xl:mt-4 w-1/3 border-2 border-gray-500 ml-auto dark:bg-bg'
                     >SEND <img src={sendEmail} width="25px" className='hidden dark:inline' alt="" /><img src={sendEmailLight} width="20px" className='inline dark:hidden' alt="" /></button>
            </form>
        </div>
    </section>
  )
}

export default Contact