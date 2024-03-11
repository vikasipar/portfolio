import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Projects = () => {

  const projectdata = [
      {
        id: 5,
        title: "Popupz",
        live: "https://www.npmjs.com/package/popupz",
        github: "https://github.com/vikasipar/popupz",
        stack: ['React.js', 'Tailwind CSS', 'React-Icons', 'Vite'],
        desc: "Popupz is a simple and customizable popup notification library designed specifically for React applications. It provides an easy way to display popup notifications with customizable themes and message content. Over 1500+ weekly downloads.🍿",
        img: "/static/popupz.png",
    },
    {
        id: 0,
        title: "CoWatch",
        live: "https://cowatch.vercel.app/",
        github: "https://github.com/vikasipar/cowatch",
        stack: ['React.js', 'Recoil', 'Peerjs', 'Tailwind CSS'],
        desc: "Redefining how users experience content on YouTube! It  can seamlessly watch YouTube videos together with their friends while enjoying integrated video call and screen sharing features. 🚀",
        img: "/static/cowatch.png",
    },
    {
      id: 1,
      title: "E-commerce Application",
      live: "https://ezmartshop.vercel.app/",
      github: "https://github.com/vikasipar/ecommerce-app",
      stack: ['React.js', 'Redux', 'Tailwind CSS', 'Firebase', 'FakeStoreAPI'],
      desc: "It imulates a real-world shopping experience with dynamic components for intuitive product listing and filtering. Ensured seamless cart operations, secure user authentication, and more. 🛒",
      img: "/static/ezmart.png",
    },
    {
        id: 2,
        title: "Social Media App",
        live: "https://ezgram.vercel.app/",
        github: "https://github.com/vikasipar/social-media-app",
        stack: ['React.js', 'Tailwind CSS', 'Firebase', 'Recoil'],
        desc: "It facilitates a vibrant social experience with features such as user authentication, posting content, liking, commenting, friend suggestions, and viewing stories. 📱",
        img: "/static/ezgram.png",
      },
    // {
    //   id: 3,
    //   title: "YouTube Clone",
    //   live: "https://betayoutube.vercel.app/",
    //   github: "https://github.com/vikasipar/youtube-clone",
    //   stack: ['React.js', 'Tailwind', 'YouTube API'],
    //   desc: "I led frontend development and API integration, ensuring smooth YouTube video streaming, content discovery with a user-friendly search bar & responsiveness. 🎬",
    //   img: "/static/yt-clone.png",
    // },
    {
      id: 4,
      title: "Superhero App",
      live: "https://mysuperheros.vercel.app/",
      github: "https://github.com/vikasipar/superhero-app",
      stack: ['React.js', 'Tailwind CSS', 'Superhero API'],
      desc: "Dive into the world of superheroes! Developed a dynamic web application that showcases my skills in frontend development and API integration. 🦸",
      img: "/static/mysuperheros.png",
    },
  ];

  return (
<>
      <motion.h1 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        className='w-full pl-2 lg:pl-32 text-4xl mt-9 lg:mt-20 xl:mt-9 md:mt-0 md:text-5xl xl:text-6xl text-[#1f4167] ml-4 md:ml-auto overflow-hidden'>Projects</motion.h1>
      {
      projectdata.map(project => (
        <div key={`${project.id}`} className='w-[90vw] md:w-[95%] md:flex md:justify-center md:space-x-9 items-center mx-auto text-base lg:ml-20 py-2 mb-10 md:mb-9 my-3 md:my-14 lg:mb-10 xl:mb-5 overflow-hidden'>
          
          <h1 className='block md:hidden font-bold text-2xl mb-2 md:text-3xl text-[#fca319]'>{project.title}</h1>

          <a href={`${project.live}`} target='_blank'
          className='md:w-[40%] lg:w-[42%] w-[99%] mb-2 md:mb-0 aspect-video shadow md:drop-shadow md:border-y-2 border-gray-200'>
          <motion.img 
          initial={{scale: 0.92}}
          whileInView={{scale:1}}
          transition={{duration:1, delay:0.1}}
          whileHover={{scale:1.06}}
          viewport={{once:true}}
          src={`${project.img}`} alt={`Screenshot of ${project.title}`} />
          </a>

          <motion.div
          initial={{scale: 0.92}}
          whileInView={{scale:1}}
          transition={{duration:1, delay:0.1}}
          viewport={{once:true}}
          className='w-[95%] md:w-[35%] lg:w-[40%]' >
            <h1 className='hidden mb-5 md:block font-bold text-2xl md:text-3xl text-[#1f4167]/80'>{project.title}</h1>
            <h3 className='text-sm w-[89vw] md:w-auto mx-auto md:text-base text-[#474646] flex flex-wrap justify-center lg:justify-around my-2'>{project.stack.map((tech) => (<span className='px-2 bg-[#ffbb29]/40 border border-[#ffbb29] md:shadow mx-1 my-[2px] rounded-2xl'>{tech}</span>)) }</h3>
            <p className='text-justify text-[#606570] text-lg'>{project.desc}</p>
            <div className='md:space-x-9 mt-2 md:mt-5 flex flex-wrap justify-around text-base md:text-lg'>
              <a href={`${project.github}`} target='_blank'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1.4, type:"spring"}}
              className='px-3 md:px-5 py-1 bg-[#0a1520]/90 text-white rounded flex items-center'>Code Files<FaGithub className='ml-2' /></motion.button></a>
              <a href={`${project.live}`} target='_blank'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1.4, type:"spring"}}
              className='px-3 md:px-5 py-1 rounded bg-[#eca60d] text-white flex items-center'>Live Site<TbWorld className='ml-2 text-lg' /></motion.button></a>
            </div>
          </motion.div>
       </div>
      ))
    }
    </>
  )
}

export default Projects;