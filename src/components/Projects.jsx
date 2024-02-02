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
      desc: "I crafted dynamic React.js components styled with Tailwind CSS, enabling intuitive product listing and filtering via FakeStoreAPI. Utilizing Redux Toolkit, I efficiently managed state for seamless cart operations. Firebase integration ensures secure user authentication with email and password login.",
      img: "/static/ezmart-mockup.png",
    },
    {
      id: 2,
      title: "YouTube Clone",
      live: "https://betayoutube.vercel.app/",
      github: "https://github.com/vikasipar/youtube-clone",
      stack: ['React.js', 'Tailwind', 'YouTube Data API'],
      desc: "I led frontend development and API integration using React.js, Tailwind CSS, and YouTube Data. Created a video player for seamless YouTube video streaming. Designed a user-friendly search bar. Ensured responsiveness for diverse screen sizes.",
      img: "/static/youtube-clone-mockup.jpeg",
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      live: "https://about:blank",
      github: "https://github.com/vikasipar/chat-app",
      stack: ['Node.js', 'React.js', 'Tailwind', 'Socket.io'],
      desc: " Leveraging React.js, I delivered a dynamic frontend experience, incorporating the react-scroll-to-bottom library and Tailwind CSS for responsive user interfaces. Additionally, I implemented Socket.io to facilitate swift and real-time interactions. On the backend, I developed a robust system using Node.js and Express.js to handle seamless communication between users.",
      img: "/static/chatapp-mockup.png",
    },
    
    {
      id: 4,
      title: "Superhero App",
      live: "https://mysuperheros.vercel.app/",
      github: "https://github.com/vikasipar/superhero-app",
      stack: ['React.js', 'Tailwind', 'Superhero API'],
      desc: "I developed the Superhero App, a dynamic web application using React.js and Tailwind CSS. Leveraging the Superhero API, I implemented features that allow users to explore details about their favorite superheroes. The project showcases my skills in frontend development, user interface design, and API integration.",
      img: "/static/superhero-mockup.jpeg",
    },
  ];

  return (
<>
      <motion.h1 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        className='w-full pl-2 lg:pl-32 text-4xl mt-9 lg:mt-20 xl:mt-9 md:mt-0 md:text-5xl xl:text-6xl text-[#1f4167]'>Projects</motion.h1>
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
            <div className='md:space-x-9 mt-2 md:mt-5 flex justify-around text-base md:text-lg'>
              <a href={`${project.github}`} target='_blank'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.7, type:"spring"}}
              className='px-5 py-1 bg-[#0a1520]/90 text-white rounded flex items-center'>Code Files<FaGithub className='ml-2' /></motion.button></a>
              <a href={`${project.live}`} target='_blank'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.7, type:"spring"}}
              className='px-5 py-1 rounded bg-[#ffb412] text-white flex items-center'>Live Site<TbWorld className='ml-2 text-lg' /></motion.button></a>
            </div>
          </motion.div>
       </div>
      ))
    }
    </>
  )
}

export default Projects;