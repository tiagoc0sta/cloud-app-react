import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';

import bgImg from '../assets/cyber-bg.png';

const Hero = () => {
  return (
    <div
      name='home'
      className='w-full h-screen bg-zinc-200 flex flex-col justify-between'
    >
      {/*Lef Side*/}
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col jutsify-center md:itms-start w-full px-2 py-8'>
          <p className='text-2xl'>unique Sequence & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>
            Cloud Management
          </h1>
          <p className='text-2xl'>This is our Tech brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>

        {/*Right Side*/}
        <div>
          <img className='w-full' src={bgImg} alt='/' />
        </div>

        {/*Data Services*/}
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p>Data Services</p>
          <div className='flex justify-beetween flwx-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'>
              <BsFillCloudUploadFill className='h-6 text-indigo-600' />
              Icon. App Security
            </p>
            <p className='flex px-4 py-2 text-slate-500'>
              <FaDatabase className='h-6 text-indigo-600' /> Icon. Dashboard
              Design
            </p>
            <p className='flex px-4 py-2 text-slate-500'>
              <AiFillDatabase className='h-6 text-indigo-600' />
              Icon. Cloud Data
            </p>
            <p className='flex px-4 py-2 text-slate-500'>
              <HiPaperAirplane className='h-6 text-indigo-600' /> Icon. API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
