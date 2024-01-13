import React from 'react';
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaNodeJs, FaGitAlt, FaFreeCodeCamp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase, IoExpand, IoDocument } from "react-icons/io5";
import { SiTailwindcss, SiRedux, SiExpress, SiCplusplus, SiC, SiCoursera, SiUdemy } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdOutlineFullscreen, MdOutlineLocationSearching, MdAutoFixHigh, MdDesignServices } from "react-icons/md";
import { GiStumpRegrowth, GiEagleHead, GiBookshelf } from "react-icons/gi";
import { IoMdDoneAll } from "react-icons/io";
import { RiTeamFill, RiPresentationFill, RiCoreosLine} from "react-icons/ri";
import { FaGofore } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { motion } from 'framer-motion';



function About() {
  return (
    <div className='w-[95%] mx-auto lg:w-[80%] lg:ml-[15%]'>
        <motion.h1 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5'>Who Am I?</motion.h1>
        <div className='flex flex-col-reverse lg:flex-row w-[90%] mx-auto'>
          <motion.p 
          initial={{x:150, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          className='text-lg lg:text-xl text-justify w-[90%] lg:w-[45%] mx-auto text-[#404242] -z-10'>
              Hello, myself <span className='font-bold'> Vikas Ipar</span>. I'm a <span className='text-[#fca319] font-bold'>Frontend Developer</span> based in Pune who is passionate about delivering value through technology. I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results.<br/>
              I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions.
              I pay great attention to detail in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the desired objectives.
          </motion.p>
          <motion.img 
          initial={{x:-150, opacity:0}}
          whileInView={{x:0, opacity:1}}
          whileHover={{y:-20}}
          transition={{duration:1.5, delay:0.3}}
          src="/src/assets/vikas.jpeg" alt="chatbot" className='w-[80%] md:w-[60%] lg:w-[35%] mb-5 mx-auto rounded border-r-4 lg:border-r-[#ffc445]' />
        </div>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5'>What have I done?</motion.h3>
        <motion.h6 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-sm lg:text-xl  w-[90%] lg:w-[80%] mx-auto text-[#fca319]/90 uppercase'>B.E. Final Year Project</motion.h6>
        <motion.h5 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-xl lg:text-3xl  w-[90%] lg:w-[80%] mx-auto text-[#1f4167]/90 mb-5'>CareTracker - A Passive Child Tracking System</motion.h5>
        <motion.img 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        src="/src/assets/caretracker.jpeg" alt="chatbot" className='w-[80%] lg:w-[60%] mx-auto' />
        <motion.p 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-base lg:text-xl py-5 text-justify w-[90%] lg:w-[80%] mx-auto text-[#404242]'>In my final year of engineering, I collaborated on the 'CareTracker' project, a child tracking system using HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, XAMPP, and PHPMyAdmin. The web-based platform allowed parents to register and update their child's information securely. Utilizing NFC technology, the system enabled communication with a finder person's phone, aiding in locating missing children. This project not only demonstrated my technical proficiency but also contributed to child safety. The real-time location sharing and streamlined information access showcased the potential impact of technology on addressing real-world challenges, solidifying my commitment to leveraging technology for social good.</motion.p>
        <motion.h6 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-sm lg:text-xl w-[90%] lg:w-[80%] mx-auto text-[#fca319]/90 uppercase'>Internship</motion.h6>
        <motion.h5 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-xl lg:text-3xl w-[90%] lg:w-[80%] mx-auto text-[#1f4167]/90 mb-5'>Covid-19 QnA Bot</motion.h5>
        <motion.img 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        src="/src/assets/chatbot.jpg" alt="chatbot" className='w-[80%] lg:w-[60%] mx-auto' />
        <motion.p 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-base lg:text-xl py-5 text-justify w-[90%] lg:w-[80%] mx-auto text-[#404242]'>As part of my academic journey in the third year of engineering, I engaged in a virtual internship with the <span className='font-bold'> Microsoft Future Ready Talent Program</span>. During this experience, I was tasked with conceptualizing and building a solution for a real-world problem using Azure services. In response to the global pandemic of Covid-19, I developed a chatbot that provides users with answers to frequently asked questions about the virus. Leveraging Azure Bot Service, QnA Maker, HTML, and CSS, I created a simple, minimal, and aesthetically pleasing user interface. This opportunity not only refined my technical skills but also allowed me to apply technology to address real-world challenges.</motion.p>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5'>What Are My Skills?</motion.h3>
        <div className='flex flex-col-reverse lg:flex-row'>
          <div className='w-[90%] lg:w-[30%] mx-auto '>
            <motion.span 
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5, delay:0.3}}
            className='text-xl lg:text-3xl text-[#fca319]'>Soft Skills</motion.span>
            <motion.ul 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5, delay:0.3}}
            className='text-lg lg:text-xl ml-9 text-[#1f4167] leading-relaxed'>
              <li className='flex items-center'><MdOutlineLocationSearching className='mx-5'/>Attention to Details</li>
              <li className='flex items-center'><IoMdDoneAll className='mx-5'/>Problem Solving</li>
              <li className='flex items-center'><GiStumpRegrowth className='mx-5'/>Adaptibility</li>
              <li className='flex items-center'><IoExpand className='mx-5'/>Flexibility</li>
              <li className='flex items-center'><MdAutoFixHigh className='mx-5'/>Creativity</li>
              <li className='flex items-center'><RiTeamFill className='mx-5'/>Teamwork</li>
              <li className='flex items-center'><GiEagleHead className='mx-5'/>Self Motivated</li>
              <li className='flex items-center'><GiBookshelf className='mx-5'/>Continuous Learning</li>
            </motion.ul>
          </div>
          
          <div className='w-[90%] lg:w-[50%] mx-auto text-lg lg:text-xl'>
            <motion.span 
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5, delay:0.3}}
            className='text-xl lg:text-3xl text-[#fca319]'>Hard Skills</motion.span>
            <div className='flex justify-around text-[#1f4167]'>
                <motion.ul 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1.5, delay:0.3}}
                className='leading-relaxed'>
                <li className='flex items-center'><FaHtml5 className='mx-5'/>HTML</li>
                <li className='flex items-center'><FaCss3Alt className='mx-5'/>CSS</li>
                <li className='flex items-center'><SiTailwindcss className='mx-5'/>Tailwind CSS</li>
                <li className='flex items-center'><IoLogoJavascript className='mx-5'/>JavaScript</li>
                <li className='flex items-center'><FaReact className='mx-5'/>React</li>
                <li className='flex items-center'><SiRedux className='mx-5'/>Redux</li>
                <li className='flex items-center'><FaNodeJs className='mx-5'/>Node.js</li>
                <li className='flex items-center'><SiExpress className='mx-5'/>Express.js</li>
              </motion.ul>
              <motion.ul 
              initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:1.5, delay:0.3}}
              className='leading-relaxed'>
                <li className='flex items-center'><FaPhp className='mx-5'/>PHP</li>
                <li className='flex items-center'><SiC className='mx-5'/>C Language</li>
                <li className='flex items-center'><SiCplusplus className='mx-5'/>C++</li>
                <li className='flex items-center'><GrMysql className='mx-5'/>MySQL</li>
                <li className='flex items-center'><IoLogoFirebase className='mx-5'/>Firebase</li>
                <li className='flex items-center'><FaGitAlt className='mx-5'/>Git/GitHub</li>
                <li className='flex items-center'><TbBrandFramerMotion className='mx-5'/>Framer Motion</li>
                <li className='flex items-center'><MdOutlineFullscreen className='mx-5'/>Responsive Design</li>
              </motion.ul>
            </div>
            
          </div>
        </div>
        

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5'>Achievements</motion.h3>
        <motion.ul 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-base lg:text-xl text-[#404242] lg:leading-relaxed text-justify w-[90%] lg:w-[80%] mx-auto'>
          <li className='flex items-center my-3 lg:my-auto'><MdDesignServices className='text-2xl mx-5'/>Received a certificate for participating in PICT's Impetus and Concepts’23 project competition, 2023.</li>
          <li className='flex items-center my-3 lg:my-auto'><RiPresentationFill className='text-2xl mx-5'/>Awarded a certificate for involvement in Astrothon by Sinhgad Academy of Engineering, 2023.</li>
          <li className='flex items-start'><IoDocument className='text-[2.6rem] mx-5'/>Received certificates for publishing two research papers on GIS Science Journal during my final year of engineering: 'CareTracer A Safety Band for Children' and 'Implementing Near-Field Communication System for Passive Child Tracking.</li>
        </motion.ul>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5'>Certifications</motion.h3>
        <motion.ul 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        className='text-base lg:text-xl text-[#404242] text-justify lg:leading-relaxed w-[80%] mx-auto'>
          <li className='flex items-center my-3 lg:my-auto'><SiCoursera className='mx-5 text-2xl'/>Coursera - Advanced React: Meta Front-End Developer Specialization.</li>
          <li className='flex items-center my-3 lg:my-auto'><FaFreeCodeCamp className='mx-5 text-2xl'/>freeCodeCamp - Responsive Web Design Course Certificate.</li>
          <li className='flex items-center my-3 lg:my-auto'><SiUdemy className='mx-5 text-2xl'/>Udemy - The Complete ReactJs Course.</li>
          <li className='flex items-center my-3 lg:my-auto'><FaGofore className='mx-5 text-2xl'/>Great Learning - UI/UX for Beginners Course.</li>
          <li className='flex items-center'><RiCoreosLine className='mx-5 text-2xl'/>Core2Web - The Complete C Programming Course</li>
        </motion.ul>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5'>Education</motion.h3>
        <div className='w-[80%] mx-auto'>
          <motion.h4 
          initial={{y:50, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          className='text-xl lg:text-2xl text-[#fca319]'>B.E. in Information Technology</motion.h4>
          <motion.h5 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          className='text-lg lg:text-xl text-[#404242]'>Sinhgad College of Engineering, Pune (SPPU)</motion.h5>
          <motion.h6 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          className='text-lg lg:text-xl text-[#404242]'><span className='font-semibold'>Completion:</span> 2023</motion.h6>
        </div>
        
    </div>
  )
}

export default About;