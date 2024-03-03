import React from 'react';
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiRedux, SiC } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { motion } from 'framer-motion';

function Skills() {
  return (
    <div className='py-2 mb-10 md:mb-20 mt-9 my-3 md:my-10 overflow-hidden'>
        <motion.h1 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        className='block md:hidden w-full pl-2 lg:pl-32 mt-9 mb-5 lg:mt-20 xl:mt-9 md:mt-0 md:text-5xl xl:text-6xl text-[#1f4167] ml-4 md:ml-auto overflow-hidden'>Skills</motion.h1>
        <motion.ul 
        initial={{scale:0.9}}
        whileInView={{scale:1}}
        transition={{duration:0.5}}
        viewport={{once:true}}
        className='lg:ml-36 w-[83vw] flex flex-wrap items-center justify-around mx-auto text-2xl md:text-3xl text-[#e6b367] space-x-5'>
            <li><FaHtml5 className='hover:text-[#fca319]' title="HTML"/></li>
            <li><FaCss3Alt className='hover:text-[#fca319]' title='CSS'/></li>
            <li><SiTailwindcss className='hover:text-[#fca319]' title='Tailwind CSS'/></li>
            <li><IoLogoJavascript className='hover:text-[#fca319]' title='JavaScript'/></li>
            <li><FaReact className='hover:text-[#fca319]' title='React'/></li>
            <li><SiRedux className='hover:text-[#fca319]' title='Redux'/></li>
            <li><FaPhp className='hover:text-[#fca319]' title='PHP'/></li>
            <li><SiC className='text-xl md:2xl hover:text-[#fca319]' title='C Language'/></li>
            <li><GrMysql className='hover:text-[#fca319]' title='MySQL'/></li>
            <li><IoLogoFirebase className='hover:text-[#fca319]' title='Firebase'/></li>
            <li><FaGitAlt className='hover:text-[#fca319]' title='Git'/></li>
            <li><FaGithub className='hover:text-[#fca319]' title='GitHub'/></li>
            <li><TbBrandFramerMotion className='hover:text-[#fca319]' title='Framer Motion'/></li>
        </motion.ul>
    </div>
  )
}

export default Skills;