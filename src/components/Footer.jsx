import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <motion.div 
    initial={{opacity: 1, y:0}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.7, delay:0.2}}
    className='w-full h-52 mt-16 flex flex-col-reverse md:flex-row justify-around items-center overflow-hidden bg-[#797c80]'>
        <motion.span className='text-[#fcb419] md:text-[#fffefe]/70 text-base md:text-2xl pl-32 flex items-center' whileHover={{scale: 1.1}} transition={{repeat: 4, repeatType: "reverse",duration:0.9}}>Made with <FaHeart className='mx-2 text-[#fcb419]' /> by Vikas Ipar.</motion.span>
        <div className='flex space-x-20 md:space-x-28'>
            <div className='text-base md:text-xl font-bold text-[#fffefe]/60'>
                <h5 className='uppercase mb-2 md:mb-4'>Navigate</h5>
                <ul className='text-lg md:text-2xl font-normal space-y-1'>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/">Home</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/about">About</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/contact">Contact</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'>
                        <a href='https://drive.google.com/file/d/1OeGeaj1e8o4eRxs2S3UITbH0PP3dIo4U/view?usp=sharing' target='_blank'>Resume</a>
                    </motion.li>
                </ul>
            </div>
            <div className='text-base md:text-xl font-bold text-[#fffefe]/60'>
                <h5 className='uppercase mb-2 md:mb-4'>Contacts</h5>
                <ul className='text-lg md:text-2xl font-normal space-y-1'>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><a href='mailto:vikasipar.scoe.it@gmail.com' title='vikasipar.scoe.it@gmail.com' target='_blank'>Email</a></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><a href='https://in.linkedin.com/in/vikas-ipar-705b6922a' target='_blank' title='https://in.linkedin.com/in/vikas-ipar-705b6922a'>LinkedIn</a></motion.li>
                </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer;