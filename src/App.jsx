import React, {useState} from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Intro from './components/Intro';
import Blog from './components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(()=> setLoading(false), 1500);

  return (
    <div>
        <BrowserRouter>  
        {
        loading? 
        <AnimatePresence>
        <motion.div
        key="intro"
        initial={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0, ease:"easeInOut"}}>
          <Intro/>
        </motion.div>
        </AnimatePresence>
        :
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
          <Analytics />
          <Footer />
          </>}
        </BrowserRouter>
    </div>
  )
}

export default App;