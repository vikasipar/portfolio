import React from 'react';
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaGitAlt, FaFreeCodeCamp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase, IoDocument } from "react-icons/io5";
import { SiTailwindcss, SiRedux, SiC, SiCoursera, SiUdemy } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { RiPresentationFill, RiCoreosLine} from "react-icons/ri";
import { FaGofore } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
    <Helmet>
        <title>About - Vikas Ipar | Frontend Developer</title>
        <meta name="description" content="Learn more about Vikas Ipar, a frontend developer passionate about creating modern web experiences." />
        <meta name="keywords" content="vikas ipar portfolio, projects, frontend developer, React developer, javascript developer, ui developer, web developer, software developer, full stack developer, mern stack developer, animated portfolio, best portfolio, framer motion website, animation, vikas ipar, portfolio, vikas ipar portfolio, modern website, web developer in pune, about me, who is vikas ipar, who is vikas" />
        <meta name="author" content="Vikas Ipar" />
        <meta property="og:title" content="About - Vikas Ipar Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vikasipar.vercel.app" />
        <meta property="og:image" content="https://www.vikasipar.vercel.app/static/vikas-ipar.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Vikas Ipar Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta name="twitter:image" content="https://www.vikasipar.vercel.app/static/vikas-ipar.png" />
    </Helmet>

    <div className='w-[95%] mx-auto lg:w-[80%] lg:ml-[15%] overflow-x-hidden'>
        <motion.h1 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5 ml-4 md:ml-auto'>Who Am I?</motion.h1>
        <div className='flex flex-col-reverse lg:flex-row w-[90%] mx-auto'>
          <motion.p 
          initial={{x:150, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          viewport={{once:true}}
          className='text-lg lg:text-xl text-justify w-[90%] lg:w-[45%] mx-auto text-[#404242] -z-10'>
              Hello, myself <span className='font-bold'> Vikas Ipar</span>. I'm a <span className='text-[#fca319] font-bold'>Frontend Developer</span> based in Pune who is passionate about delivering value through technology. I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results.<br/>
              I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions.
              I pay great attention to detail in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the desired objectives.
          </motion.p>
          <motion.img 
          initial={{x:-150, opacity:0}}
          whileInView={{x:0, opacity:1}}
          whileHover={{y:-20}}
          viewport={{once:true}}
          transition={{duration:1.5, delay:0.3}}
          src="/static/about-vikas-ipar.jpeg" alt="about-vikas-ipar" title='vikas-ipar' className='w-[80%] md:w-[60%] lg:w-[35%] mb-5 mt-2 mx-auto rounded-lg lg:border-r-4 lg:border-r-[#ffc445]' />
        </div>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5 ml-4 md:ml-auto'>What have I done?</motion.h3>
        <div className='flex flex-wrap items-start'>
          <div className='w-[90%] lg:w-[45%] mx-auto'>
        <motion.h6 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-sm lg:text-lg w-[90%] lg:w-full mx-auto text-[#fca319]/90 uppercase'>B.E. Final Year Project</motion.h6>
        <motion.h5 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-xl lg:text-2xl  w-[90%] lg:w-full mx-auto text-[#1f4167]/90 mb-5'>CareTracker - A Passive Child Tracking System</motion.h5>
        <motion.img 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        src="/static/caretracker.jpeg" alt="vikas-ipar-project-caretracker" title='caretracker-project' className='w-[80%] lg:w-[80%] mx-auto overflow-x-hidden' />
        <motion.p 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-base lg:text-lg py-5 text-justify w-[90%] lg:w-full mx-auto text-[#404242] overflow-x-hidden'>In my final year of engineering, I collaborated on the 'CareTracker' project, a child tracking system using HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, XAMPP, and PHPMyAdmin. The web-based platform allowed parents to register and update their child's information securely. Utilizing NFC technology, the system enabled communication with a finder person's phone, aiding in locating missing children. This project not only demonstrated my technical proficiency but also contributed to child safety. The real-time location sharing and streamlined information access showcased the potential impact of technology on addressing real-world challenges, solidifying my commitment to leveraging technology for social good.</motion.p>
        </div>
        <div className='w-[90%] lg:w-[45%] mx-auto'>
        <motion.h6 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-sm lg:text-lg w-[90%] lg:w-full mx-auto text-[#fca319]/90 uppercase'>Internship</motion.h6>
        <motion.h5 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-xl lg:text-2xl w-[90%] lg:w-full mx-auto text-[#1f4167]/90 mb-5'>Covid-19 QnA Bot</motion.h5>
        <motion.img 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        src="/static/chatbot.jpg" alt="vikas-ipar-project-chatbot" title='chatbot-project' className='w-[80%] lg:w-[80%] mx-auto' />
        <motion.p 
        initial={{y:80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-base lg:text-lg py-5 text-justify w-[90%] lg:w-full mx-auto text-[#404242]'>As part of my academic journey in the third year of engineering, I engaged in a virtual internship with the <span className='font-bold'> Microsoft Future Ready Talent Program</span>. During this experience, I was tasked with conceptualizing and building a solution for a real-world problem using Azure services. In response to the global pandemic of Covid-19, I developed a chatbot that provides users with answers to frequently asked questions about the virus. Leveraging Azure Bot Service, QnA Maker, HTML, and CSS, I created a simple, minimal, and aesthetically pleasing user interface. This opportunity not only refined my technical skills but also allowed me to apply technology to address real-world challenges.</motion.p>
        </div>
        </div>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5 ml-4 md:ml-auto'>What Are My Skills?</motion.h3>
        <div className='flex flex-col-reverse lg:flex-row'>
          
          <div className='w-[97%] md:w-[90%] mx-auto text-lg lg:text-xl'>
            
            <div className='flex flex-wrap justify-around text-[#404242]'>
                <motion.ul 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1.5, delay:0.3}}
                viewport={{once:true}}
                className='leading-relaxed flex flex-wrap space-x-2 md:space-x-16 space-y-2 justify-center items-baseline'>
                <li className='flex items-center'><FaHtml5 className='mx-1 md:mx-5'/>HTML</li>
                <li className='flex items-center'><FaCss3Alt className='mx-1 md:mx-5'/>CSS</li>
                <li className='flex items-center'><SiTailwindcss className='mx-1 md:mx-5'/>Tailwind CSS</li>
                <li className='flex items-center'><IoLogoJavascript className='mx-1 md:mx-5'/>JavaScript</li>
                <li className='flex items-center'><FaReact className='mx-1 md:mx-5'/>React</li>
                <li className='flex items-center'><SiRedux className='mx-1 md:mx-5'/>Redux/Recoil</li>
                <li className='flex items-center'><FaPhp className='mx-1 md:mx-5'/>PHP</li>
                <li className='flex items-center'><SiC className='mx-1 md:mx-5'/>C Language</li>
                <li className='flex items-center'><GrMysql className='mx-1 md:mx-5'/>MySQL</li>
                <li className='flex items-center'><IoLogoFirebase className='mx-1 md:mx-5'/>Firebase</li>
                <li className='flex items-center'><FaGitAlt className='mx-1 md:mx-5'/>Git/GitHub</li>
                <li className='flex items-center'><TbBrandFramerMotion className='mx-1 md:mx-5'/>Framer Motion</li>
              </motion.ul>
            </div>
            
          </div>
        </div>
        

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5 ml-4 md:ml-auto'>Achievements</motion.h3>
        <motion.ul 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-base lg:text-xl text-[#404242] lg:leading-relaxed text-justify w-[90%] lg:w-[80%] mx-auto'>
          <li className='flex items-center my-3 lg:my-auto'><MdDesignServices className='text-4xl mx-5'/>Received a certificate for participating in PICT's Impetus and Concepts’23 project competition, 2023.</li>
          <li className='flex items-center my-3 lg:my-auto'><RiPresentationFill className='text-4xl mx-5'/>Awarded a certificate for involvement in Astrothon by Sinhgad Academy of Engineering, 2023.</li>
          <li className='flex items-start'><IoDocument className='text-7xl mx-5'/>Received certificates for publishing two research papers on GIS Science Journal during my final year of engineering: 'CareTracer A Safety Band for Children' and 'Implementing Near-Field Communication System for Passive Child Tracking'.</li>
        </motion.ul>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5 ml-4 md:ml-auto'>Certifications</motion.h3>
        <motion.ul 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5, delay:0.3}}
        viewport={{once:true}}
        className='text-base lg:text-xl text-[#404242] text-justify lg:leading-relaxed w-[80%] mx-auto'>
          <li className='flex items-center my-3 lg:my-auto'><SiCoursera className='mx-5 text-2xl'/>Coursera - Advanced React: Meta Front-End Developer Specialization.</li>
          <li className='flex items-center my-3 lg:my-auto'><FaFreeCodeCamp className='mx-5 text-4xl'/>freeCodeCamp - Responsive Web Design Course Certificate.</li>
          <li className='flex items-center my-3 lg:my-auto'><SiUdemy className='mx-5 text-2xl'/>Udemy - The Complete ReactJs Course.</li>
          <li className='flex items-center my-3 lg:my-auto'><FaGofore className='mx-5 text-2xl'/>Great Learning - UI/UX for Beginners Course.</li>
          <li className='flex items-center'><RiCoreosLine className='mx-5 text-2xl'/>Core2Web - The Complete C Programming Course</li>
        </motion.ul>

        <motion.h3 
        initial={{x:-250, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.2}}
        viewport={{once:true}}
        className='text-3xl lg:text-4xl text-[#1f4167] my-5 ml-4 md:ml-auto'>Education</motion.h3>
        <div className='w-[80%] mx-auto'>
          <motion.h4 
          initial={{y:50, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          viewport={{once:true}}
          className='text-xl lg:text-2xl text-[#fca319]'>B.E. in Information Technology</motion.h4>
          <motion.h5 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          viewport={{once:true}}
          className='text-base lg:text-xl text-[#404242]'>Sinhgad College of Engineering, Pune (SPPU)</motion.h5>
          <motion.h6 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5, delay:0.3}}
          viewport={{once:true}}
          className='text-lg lg:text-xl text-[#404242]'><span className='font-semibold'>Completion:</span> 2023</motion.h6>
        </div>
        
    </div>
  </>
  )
}

export default About;