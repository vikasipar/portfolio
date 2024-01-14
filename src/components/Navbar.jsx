import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavContext } from './NavContext';
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const navState = useContext(NavContext);
    const navvisible = navState.isNavVisible;

  return (
<>
<AnimatePresence>

    <motion.div 
        key="sidebar"
        initial={{x:-300}}
        animate={{x:0}}
        transition={{duration:0.9, ease:"easeIn", delay:2, type:"spring", stiffness:100}}
        className='hidden lg:flex bg-white shadow shadow-[#11181fbb] w-24 h-screen top-0 z-30 fixed flex-col py-7 text-center items-center' >
          <span className='text-xl bg-[#fca319]/90 text-white rounded-full p-3 mx-auto'>{ navvisible ? <AiOutlineClose onClick={() => navState.setIsNavVisible(!navState.isNavVisible)} className='cursor-pointer' title='Close'/> : <RiMenuFill onClick={() => navState.setIsNavVisible(!navState.isNavVisible)} className='cursor-pointer' title='Menu'/>}</span>
          <span className='-rotate-90 text-2xl w-max font-semibold text-[#8d9094]/70 my-auto'><Link to="/">Vikas Ipar</Link></span>
    </motion.div>

    <motion.div
        className='flex lg:hidden w-screen' >
          <span className='text-xl bg-[#fca319]/90 text-white w-9 h-9 ml-2 mt-2 z-40 rounded-[100%] text-center p-2'>{ navvisible ? <AiOutlineClose onClick={() => navState.setIsNavVisible(!navvisible)} className='cursor-pointer fixed m-[-2%] w-9 h-9 p-2 bg-inherit rounded-full' title='Close'/> : <RiMenuFill onClick={() => navState.setIsNavVisible(!navvisible)} className='cursor-pointer' title='Menu'/>}</span>
    </motion.div>

    {navvisible && (
        <motion.div 
            key="navbar"
            initial={{x:-500}}
            animate={{x:0}}
            exit={{x:-500}}
            transition={{duration:0.8, ease:"easeInOut"}} 
            // onExitComplete={() => null}
            className='fixed w-full md:w-[50vw] md:ml-[5.5rem] h-full bg-white/90 text-[#1f4167] z-20 overflow-hidden top-0' >
                <motion.ul
                    className='space-y-14 text-4xl md:text-5xl my-28 text-center md:text-left md:ml-48'>
                        <motion.li
                            whileHover={{x:30}}
                            transition={{duration:0.5, type:"spring", stiffness:130}}
                            className='cursor-pointer'>
                            <NavLink to="/" 
                                onClick={() => navState.setIsNavVisible(!navState.isNavVisible)}
                                style={({ isActive }) => ({
                                color: isActive && "#fca319"})}>Home</NavLink>
                        </motion.li>
                        <motion.li
                            whileHover={{x:30}}
                            transition={{duration:0.5, type:"spring", stiffness:130}}
                            className='cursor-pointer'>
                            <NavLink to="/about" 
                                onClick={() => navState.setIsNavVisible(!navState.isNavVisible)}
                                style={({ isActive }) => ({
                                color: isActive && "#fca319"})}>About</NavLink>
                        </motion.li>
                        <motion.li
                            whileHover={{x:30}}
                            transition={{duration:0.5, type:"spring", stiffness:130}}
                            className='cursor-pointer'>
                            <NavLink to="/contact" 
                                onClick={() => navState.setIsNavVisible(!navState.isNavVisible)}
                                style={({ isActive }) => ({
                                color: isActive && "#fca319"})}>Contact</NavLink>
                        </motion.li>
                        <motion.li
                            whileHover={{x:30}}
                            transition={{duration:0.5, type:"spring", stiffness:130}}
                            className='cursor-pointer'>
                            <a href='https://drive.google.com/file/d/1gwq4dXgKB4OWC_0pBeBr2z2zb3CHG7q-/view?usp=sharing' target='_blank'>Resume</a> 
                        </motion.li>
                </motion.ul>
        </motion.div>
    )}
        </AnimatePresence>

</>
);
};

export default Navbar;