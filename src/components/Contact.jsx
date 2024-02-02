import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Message Sent.");
        emailjs.sendForm(import.meta.env.VITE_SEVICEID, import.meta.env.VITE_TEMPLATEID, e.target, import.meta.env.VITE_EMAILJS_PUBLICKEY);
    }

  return (
    <>
    <Helmet>
        <title>Contact - Vikas Ipar | Frontend Developer</title>
        <meta name="description" content="Get in touch with Vikas Ipar, a frontend developer passionate about creating modern web experiences." />
        <meta name="keywords" content="vikas ipar portfolio, projects, frontend developer, React developer, javascript developer, ui developer, web developer, software developer, full stack developer, mern stack developer, animated portfolio, best portfolio, framer motion website, animation, vikas ipar, portfolio, vikas ipar portfolio, modern website, web developer in pune, contact me" />
        <meta name="author" content="Vikas Ipar" />
        <meta property="og:title" content="Contact - Vikas Ipar Portfolio" />
        <meta property="og:description" content="Get in touch with Vikas Ipar, a frontend developer passionate about creating modern web experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vikasipar.vercel.app/contact" />
        <meta property="og:image" content="https://www.vikasipar.vercel.app/static/vikas-ipar-portfolio.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - Vikas Ipar Portfolio" />
        <meta name="twitter:description" content="Get in touch with Vikas Ipar, a frontend developer passionate about creating modern web experiences." />
        <meta name="twitter:image" content="https://www.vikasipar.vercel.app/static/vikas-ipar-portfolio.png" />
    </Helmet>

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
                <a href='https://in.linkedin.com/in/vikas-ipar-705b6922a' target='_blank' title='linkedin.com/in/vikas-ipar'><FaLinkedin/></a>
                <a href='https://github.com/vikasipar' title='github.com/vikasipar' target='_blank'><FaSquareGithub/></a>
                <a href='https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08' title='x.com/vikas_ipar' target='_blank'><FaTwitterSquare/></a>
                <a href='mailto:vikasipar.scoe.it@gmail.com' title='vikasipar.scoe.it@gmail.com' target='_blank'><MdEmail/></a>
            </div>
        </motion.div>

        <motion.form 
        onSubmit={sendEmail}
        initial={{x:-150, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='w-[90%] lg:w-[50%] mx-auto text-lg lg:text-3xl flex-wrap mt-5 md:mt-0'>
            <div className='flex items-center leading-loose'>
                <label htmlFor='sender'>Hi, I'm </label>
                <input type='text' placeholder='Name*' name='sender' id='sender' className='border-b-2 border-black text-[#1f4167] mx-2 w-[14rem] md:w-[26rem] outline-none' required/>
            </div>
            <div className='flex flex-wrap items-center leading-loose'>
                <label className='' htmlFor='from'>and I work with </label>
                <input name='from' id='from' className='outline-none ml-1 w-[11rem] md:w-[20rem] border-b-2 border-black text-[#1f4167]' type='text' placeholder='Company*' required/>
            </div>
            <div className='flex flex-wrap items-center leading-loose'>
                <label className='' htmlFor='email_from'>You can reach me at </label>
                <input className='outline-none ml-1 w-[19rem] lg:w-[16.5rem] border-b-2 border-black text-[#1f4167]' type='email' name='email_from' id='email_from' placeholder='Email*' required/>
            </div>
            <input className='w-full outline-none border-b-2 border-black leading-loose text-[#1f4167]' placeholder='Message*' id='message' name='message' required/><br/>
            <div className='flex lg:hidden w-fit mx-auto'>
                <button className='my-9 bg-[#fca319]/90 px-5 py-1 rounded-lg'>Send Message</button>
            </div>
            <button type='submit' className='hidden lg:block my-9 bg-[#fca319]/90 px-5 py-1 rounded-lg'>Send Message</button>
        </motion.form>

    </div>
</>
  )
}

export default Contact;