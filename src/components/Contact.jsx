import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {

  return (
    <div className='lg:flex flex-wrap items-center w-[90%] lg:w-[80%] lg:h-[90vh] lg:ml-[13%] overflow-hidden'>
        
        <motion.div 
        initial={{x:150, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='w-[90%] lg:w-[30%] mx-auto text-center lg:text-left space-y-14'>
            <div>
                <p className='text-3xl lg:text-5xl text-[#1f4167]'>Have an idea?</p>
                <p className='text-xl lg:text-2xl text-[#fca319]'>Let's make it true!</p>
            </div>
            <div className='space-x-5 flex items-center text-xl lg:text-3xl text-[#1f4167]'>
                <a href='https://in.linkedin.com/in/vikas-ipar-705b6922a' target='_blank' title='https://in.linkedin.com/in/vikas-ipar-705b6922a'><FaLinkedin/></a>
                <a href='https://github.com/vikasipar' title='https://github.com/vikasipar' target='_blank'><FaSquareGithub/></a>
                <a href='#' target='_blank'><FaTwitterSquare/></a>
                <a href='mailto:vikasipar.scoe.it@gmail.com' title='vikasipar.scoe.it@gmail.com' target='_blank'><MdEmail/></a>
            </div>
        </motion.div>

        <motion.div 
        initial={{x:-150, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='w-[90%] lg:w-[50%] mx-auto text-lg lg:text-3xl flex-wrap mt-5 md:mt-0'>
            <div className='flex items-center leading-loose'>
                <label>Hi, I'm </label>
                <input type='text' placeholder='Name*' className='border-b-2 border-black text-[#1f4167] mx-2 w-[14rem] md:w-[26rem] outline-none' required/>
            </div>
            <div className='flex flex-wrap items-center leading-loose'>
                <label className=''>and I work with </label>
                <input className='outline-none ml-1 w-[11rem] md:w-[20rem] border-b-2 border-black text-[#1f4167]' type='text' placeholder='Company*' required/>
            </div>
            <div className='flex flex-wrap items-center leading-loose'>
                <label className=''>You can reach me at </label>
                <input className='outline-none ml-1 w-[19rem] lg:w-[16.5rem] border-b-2 border-black text-[#1f4167]' type='email' placeholder='Email*' required/>
            </div>
            <input className='w-full outline-none border-b-2 border-black leading-loose text-[#1f4167]' placeholder='Message*' required/><br/>
            <div className='flex lg:hidden w-fit mx-auto'>
                <button className='my-9 bg-[#fca319]/90 px-5 py-1 rounded-lg'>Send Message</button>
            </div>
            <button className='hidden lg:block my-9 bg-[#fca319]/90 px-5 py-1 rounded-lg'>Send Message</button>
        </motion.div>

    </div>
  )
}

export default Contact;