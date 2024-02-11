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
    className='w-full h-60 mt-16 flex flex-col-reverse md:flex-row justify-around items-center overflow-hidden bg-[#797c80]'>
        <span className='text-[#fcb419] md:text-[#fffefe]/70 text-xs md:text-xl pl-32 flex items-center'><motion.span whileHover={{scale: 1.2}} transition={{repeat: 2, repeatType: "reverse",duration:0.9}}><FaHeart className='mx-2 text-[#fcb419]' /></motion.span> Designed & Developed by Vikas Ipar.</span>
        <div className='flex space-x-20 md:space-x-28'>
            <div className='text-base md:text-xl font-bold text-[#fffefe]/60'>
                <h5 className='uppercase mb-2 md:mb-4'>Navigate</h5>
                <ul className='text-lg md:text-2xl font-normal space-y-1'>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>Home</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/blog" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>Blog</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/about" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>About</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><Link to="/contact" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>Contact</Link></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'>
                        <a href='https://drive.google.com/file/d/1TOKr8XDR9JiZQ5RmEDe-6GvwCIj7DNtb/view?usp=sharing' target='_blank'>Resume</a>
                    </motion.li>
                </ul>
            </div>
            <div className='text-base md:text-xl font-bold text-[#fffefe]/60'>
                <h5 className='uppercase mb-2 md:mb-4'>Contacts</h5>
                <ul className='text-lg md:text-2xl font-normal space-y-1'>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><a href='mailto:vikasipar.scoe.it@gmail.com' title='vikasipar.scoe.it@gmail.com' target='_blank'>Email</a></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><a href='https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08' title='x.com/vikas_ipar' target='_blank'>Twitter</a></motion.li>
                    <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer hover:text-[#fcb419]'><a href='https://in.linkedin.com/in/vikas-ipar-705b6922a' target='_blank' title='https://in.linkedin.com/in/vikas-ipar-705b6922a'>LinkedIn</a></motion.li>
                </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer;