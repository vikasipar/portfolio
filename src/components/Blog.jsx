import React from 'react';
import { Helmet } from 'react-helmet-async';
import { easeIn, motion } from 'framer-motion';

function Blog() {
  const blogdata=[
    {
      id: 1,
      topic: "APIs",
      url: "https://medium.com/@vikasipar/mastering-api-integration-in-react-a-practical-guide-with-examples-23748d68b3fa",
      title: "Mastering API Integration in React: A Practical Guide with Examples",
      img: "/static/api.png",
      desc: "What exactly is an API? Well, let's break it down. API stands for Application Programming Interface. Think of it as a",
    },
    {
      id: 2,
      url: "https://medium.com/@vikasipar/understanding-redux-toolkit-a-practical-guide-with-an-e-commerce-application-938cf07d38a0",
      topic: "Redux Toolkit",
      title: "Understanding Redux Toolkit: A Practical Guide with an E-commerce Application",
      img: "/static/redux.jpg",
      desc: "Introduction Redux Toolkit has revolutionized state management in React applications, offering a simpler and more",
    },
    {
      id: 3,
      topic: "Recoil",
      url: "https://medium.com/@vikasipar/exploring-recoil-simplifying-state-management-in-react-projects-b19adbe3445b",
      title: "Exploring Recoil: Simplifying State Management in React Projects",
      img: "/static/recoil.png",
      desc: "Recoil is a state management library for React that made my life as a developer so much easier. Being an enthusiast delving",
    },
    {
      id: 4,
      topic: "Router",
      url: "https://medium.com/@vikasipar/navigating-the-web-with-react-router-d68416bd79c8",
      title: "Navigating the Web with React Router",
      img: "/static/router.jpg",
      desc: "Hey coders! So, you've dipped your toes into the vast ocean of web development, and now you're eyeing that treasure",
    },
    {
      id: 5,
      topic: "Responsiveness",
      url: "https://medium.com/@vikasipar/flexbox-the-easiest-path-to-responsive-websites-688415a06c57",
      title: "Flexbox: The Easiest Path to Responsive Websites",
      img: "/static/responsive.png",
      desc: "Hey there! Are you ready to level up your web design game and make your websites look amazing on all devices?",
    },
  ];
  return (
    <>
    <Helmet>
        <title>Blog - Vikas Ipar | Frontend Developer</title>
        <meta name="description" content="Learn more about Vikas Ipar, a frontend developer passionate about creating modern web experiences." />
        <meta name="keywords" content="vikas ipar portfolio, projects, frontend developer, React developer, javascript developer, ui developer, web developer, software developer, full stack developer, mern stack developer, animated portfolio, best portfolio, framer motion website, animation, vikas ipar, portfolio, vikas ipar portfolio, modern website, web developer in pune, about me, who is vikas ipar, who is vikas" />
        <meta name="author" content="Vikas Ipar" />
        <meta property="og:title" content="Blog - Vikas Ipar Portfolio" />
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
        className='text-3xl lg:text-4xl text-[#1f4167] my-9 ml-4 md:ml-auto'>Blog</motion.h1>
      <div className='flex flex-wrap gap-9 items-start overflow-hidden'>{
        blogdata.map(data => (
          <motion.div 
            initial={{y:100}}
            animate={{y:0}}
            transition={{duration: 1, ease:easeIn}}
            key={data.id} className='w-[88%] md:w-[45%] xl:w-80 mx-auto border border-gray-300 px-2 py-3 rounded-lg shadow md:shadow-lg hover:shadow-xl'>
            <a href={data.url} target='_blank'>
              <img src={data.img} alt={data.topic} className='aspect-video'/>
              <h2 className='text-xl md::text-2xl text-stone-800 font-semibold my-2'>{data.title}</h2>
              <h4 className='text-sm md:text-base text-stone-700'>{data.desc}..</h4>
            </a>
          </motion.div>
        ))
        }</div>

    </div>
    </>
  )
}

export default Blog;