import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  
  return (
    <>
      <div className='flex flex-wrap w-full xl:h-screen items-center overflow-x-hidden relative'>

        <motion.img
        initial={{y:120, scale:0.5}}
        animate={{y:0, scale:1}}
        whileInView={{once:true}}
        transition={{duration:2, type:"spring"}}
        src="/static/vikas-ipar.jpeg" alt="vikas-ipar" title='vikas-ipar' className='block lg:hidden w-[60%] md:w-[30%] mx-auto mt-10 rounded-[6rem]' />

        <motion.div 
        initial={{x: -760}}
        animate={{x: 0}}
        transition={{delay:0.9, ease:'easeIn', duration:2, type:"spring"}}
        className='lg:w-[43%] lg:ml-48 items-center space-y-8'>
                
                <h1 className='text-4xl xl:text-7xl mt-9 text-center lg:text-left font-bold text-[#1f4167]/90'>Hello, I'm Vikas.</h1>
                <p className='w-[86%] mx-auto lg:mx-0 text-lg md:text-2xl text-justify text-[#848a98]'>I'm a <span className='text-[#fca319] font-bold text-2xl md:text-3xl'>front-end developer</span> with experience in many different languages, and technologies. I'm always looking for new challenges to tackle.</p>

                <div className='space-x-10 flex flex-wrap items-center text-[#1f4167] w-fit mx-auto lg:mx-0'>
                <motion.a 
                  whileHover={{scale:1.2}}
                  transition={{duration:0.9}}
                  href='https://github.com/vikasipar' title='https://github.com/vikasipar' target='_blank' className='text-2xl lg:text-3xl'><FaSquareGithub/></motion.a>
                <motion.a 
                  whileHover={{scale:1.2}}
                  transition={{duration:0.9}}
                  href='https://in.linkedin.com/in/vikas-ipar-705b6922a' target='_blank' title='https://in.linkedin.com/in/vikas-ipar-705b6922a' className='text-2xl lg:text-3xl'><FaLinkedin/></motion.a>
                <motion.a 
                  whileHover={{scale:1.2}}
                  transition={{duration:0.9}}
                  href='https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08' target='_blank' title='https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08' className='text-2xl lg:text-3xl'><FaTwitterSquare/></motion.a>
                <motion.a 
                  whileHover={{scale:1.2}}
                  transition={{duration:0.9}}
                  href='mailto:vikasipar.scoe.it@gmail.com' title='vikasipar.scoe.it@gmail.com' target='_blank' className='text-[1.61rem] lg:text-[2.1rem]'><MdEmail/></motion.a>
            </div>

        </motion.div>

        <motion.div 
        initial={{x:-310, scale:0.4}}
        animate={{x:0, scale:1}}
        transition={{duration:2.5, ease:'easeIn', type:"spring"}}
        className='hidden lg:block w-[30%]'
        >
          <img src="/static/vikas-ipar.jpeg" alt="vikas-ipar" title='vikas-ipar' className={`w-[99%] left-0 rounded-full`} />
        </motion.div>

      </div>
    </>
  )
}

export default Hero;