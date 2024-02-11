import React from 'react';

function Intro() {

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
        <img src="/static/vikas-ipar.jpeg" alt="vikas ipar portfolio" className='w-[20%] md:w-[7%] mx-auto rounded-full' />
        <img src="/static/progress.gif" alt="intro" className='w-[10%] mx-auto'/>
    </div>
  )
}

export default Intro;