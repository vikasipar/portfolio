import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Projects = () => {

  const projectdata = [
    {
      id: 1,
      title: "E-commerce Application",
      live: "https://ezmartshop.vercel.app/",
      github: "https://github.com/vikasipar/ecommerce-app",
      stack: ['React.js', 'Redux', 'Tailwind', 'Firebase', 'FakeStoreAPI'],
      desc: "It imulates a real-world shopping experience with dynamic components for intuitive product listing and filtering 🛒. Ensured seamless cart operations, secure user authentication, and added toast notifications for improved user experience.",
      img: "/static/ezmart-mockup.png",
    },
    {
      id: 2,
      title: "YouTube Clone",
      live: "https://betayoutube.vercel.app/",
      github: "https://github.com/vikasipar/youtube-clone",
      stack: ['React.js', 'Tailwind', 'YouTube Data API'],
      desc: "I led frontend development and API integration, ensuring smooth YouTube video streaming 🎬, intuitive content discovery with a user-friendly search bar, and consistent experience across various screen sizes.",
      img: "/static/youtube-clone-mockup.jpeg",
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      live: "https://about:blank",
      github: "https://github.com/vikasipar/chat-app",
      stack: ['Node.js', 'React.js', 'Tailwind', 'Socket.io'],
      desc: "Crafted a dynamic frontend with responsive interfaces using React.js. Facilitated swift and real-time interactions 💬with Socket.io. Developed a robust backend system to ensure seamless communication between users.",
      img: "/static/chatapp-mockup.png",
    },
    
    {
      id: 4,
      title: "Superhero App",
      live: "https://mysuperheros.vercel.app/",
      github: "https://github.com/vikasipar/superhero-app",
      stack: ['React.js', 'Tailwind', 'Superhero API'],
      desc: "Dive into the world of superheroes🦸! Developed a dynamic web application that showcases my skills in frontend development and API integration. Leveraging React and Tailwind CSS, along with the Superhero API, users can explore details about their favorite superheroes with ease.",
      img: "/static/superhero-mockup.jpeg",
    },
  ];

  return (
<>
      <motion.h1 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        className='w-full pl-2 lg:pl-32 text-4xl mt-9 lg:mt-20 xl:mt-9 md:mt-0 md:text-5xl xl:text-6xl text-[#1f4167] ml-4 md:ml-auto'>Projects</motion.h1>
      {
      projectdata.map(project => (
        <div key={`${project.id}`} className='w-[86vw] md:flex items-center mx-auto text-base lg:ml-24 mb-16 md:mb-4 lg:mb-10 xl:mb-5 overflow-hidden'>

          <motion.img 
          initial={{opacity:0, x:-200}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.3, type:"spring"}}
          whileHover={{scale:1.06}}
          className={`${project.id%2!==0 ? 'md:w-[55%] md:mx-auto' : 'md:w-[45%]'} md:ml-auto w-[99%]`} src={`${project.img}`} alt='proj1' />

          <motion.div
          initial={{opacity: 0, x:200}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.3}} 
          className={`${project.id%2!==0 ? 'md:w-[45%] mx-auto' : 'md:w-[43%]'} w-[92%] mx-auto`} >
            <h1 className='font-bold text-2xl md:text-3xl text-[#1f4167]/80'>{project.title}</h1>
            <h3 className='text-base w-[82vw] md:w-auto mx-auto md:text-lg text-[#474646] flex flex-wrap justify-center my-2'>{project.stack.map((tech) => (<span className='px-2 bg-[#ffbb29]/50 border border-[#ffbb29] shadow mx-1 my-[2px] rounded-2xl'>{tech}</span>)) }</h3>
            <p className='text-justify text-[#606570] text-lg'>{project.desc}</p>
            <div className='md:space-x-9 mt-2 md:mt-5 flex flex-wrap justify-around text-base md:text-lg'>
              <a href={`${project.github}`} target='_blank'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1.4, type:"spring"}}
              className='px-5 py-1 bg-[#0a1520]/90 text-white rounded flex items-center'>Code Files<FaGithub className='ml-2' /></motion.button></a>
              <a href={`${project.live}`} target='_blank'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1.4, type:"spring"}}
              className='px-5 py-1 rounded bg-[#eca60d] text-white flex items-center'>Live Site<TbWorld className='ml-2 text-lg' /></motion.button></a>
            </div>
          </motion.div>
       </div>
      ))
    }
    </>
  )
}

export default Projects;