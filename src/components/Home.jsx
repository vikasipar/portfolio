import react from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Vikas Ipar | Frontend Developer</title>
        <meta name="description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta name="keywords" content="vikas ipar portfolio, vikas, ipar, projects, frontend developer, React developer, javascript developer, ui developer, web developer, software developer, full stack developer, mern stack developer, animated portfolio, best portfolio, framer motion website, animation, vikas ipar, portfolio, vikas ipar portfolio, modern website, web developer in pune" />
        <meta name="author" content="Vikas Ipar" />
        <meta property="og:title" content="Vikas Ipar Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vikasipar.vercel.app" />
        <meta property="og:image" content="https://www.vikasipar.vercel.app/static/vikas-ipar.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vikas Ipar Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta name="twitter:image" content="https://www.vikasipar.vercel.app/static/vikas-ipar.png" />
      </Helmet>
      <div className='overflow-x-hidden'>
        <Hero />
        <Skills/>
        <Projects />
      </div>
    </>
  )
}

export default Home;
