import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavProvider } from './components/NavContext.jsx';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Page404 from './components/Page404.jsx';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <NavProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Page404/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NavProvider> 
    </HelmetProvider>
  </React.StrictMode>,
)
