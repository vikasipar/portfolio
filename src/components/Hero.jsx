import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  
  return (

      <div className='flex flex-wrap w-full xl:h-screen items-center overflow-hidden relative'>

        <motion.img
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:2, type:"spring"}}
        src="/src/assets/dev.jpeg" alt="vikasip" className='block lg:hidden w-[50%] md:w-[30%] mx-auto mt-16' />

        <motion.div 
        initial={{x: -760}}
        animate={{x: 0}}
        transition={{delay:1.3, ease:'easeIn', duration:1.6, type:"spring"}}
        className='lg:w-[43%] lg:ml-48 items-center space-y-8'>
                
                <h1 className='text-5xl xl:text-7xl mt-9 text-center lg:text-left font-bold text-[#1f4167]/90'>Hello, I'm Vikas.</h1>
                <p className='w-[90%] mx-auto text-xl md:text-2xl text-justify text-[#8d9094]'>I'm a <span className='text-[#fca319] font-bold text-2xl md:text-3xl'>front-end developer</span> with experience in many different languages, and technologies. I'm always looking for new challenges to tackle.</p>

        </motion.div>

        <motion.div 
        initial={{x:-1550, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{delay:0.2, ease:'easeIn', duration:1.9, type:"spring"}}
        className='hidden lg:block w-[30%]'
        >
          <img src="/src/assets/dev.jpeg" alt="vikasip" className={`w-[99%] left-0`} />
        </motion.div>

      </div>
  )
}

export default Hero;