import React from 'react';
import './intro.css';

function Intro() {

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
        <img src="/static/vikas-ipar.jpeg" alt="vikas ipar portfolio" className='w-[20%] md:w-[7%] mx-auto rounded-full' />
        <div className='loader mt-3 rounded-xl'></div>
        {/* <img src="/static/progress.gif" alt="intro" className='w-[15%] md:w-[10%] mx-auto'/> */}
    </div>
  )
}

export default Intro;