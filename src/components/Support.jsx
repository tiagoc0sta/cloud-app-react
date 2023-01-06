import React from 'react';
import supportImg from '../assets/support.jpg';
import { AiOutlinePhone, AiOutlineArrowRight } from 'react-icons/ai';
import { FaMicrochip } from 'react-icons/fa';
import { HiOutlineSupport } from 'react-icons/hi';

const Support = () => {
  return (
    <div className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        {/*Overlay*/}
        <img
          className='w-full h-full object-cover mix-blend-overlay'
          src={supportImg}
          alt='/'
        />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>
            Fiding the right team
          </h3>
          <p className='py-4 text-3xl text-slate-300'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            sit facilis eius deserunt explicabo modi ab, nisi dolore magni error
            illum ea dolorem nostrum enim aliquid eaque sequi ipsum fuga.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
        <div className='bg-white rounded-xl shadow-2xl'>
          <div className='p-8'>
            <AiOutlinePhone
              size={60}
              className=' bg-indigo-600 text-white rounded-lg mt-[-4rem] p-3 rotate-90'
            />
            <h3 className='font-bold text-2xl my-6'>Sales</h3>
            <p className='text-gray-600  text-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              totam temporibus suscipit veniam blanditiis vel quia excepturi,
              magnam sed velit.
            </p>
          </div>
          <div className='bg-slate-100 pl-8 py-4'>
            <p className=' flex items-center text-indigo-600 gap-2'>
              Contact Us <AiOutlineArrowRight />
            </p>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-2xl'>
          <div className='p-8'>
            <HiOutlineSupport
              size={60}
              className=' bg-indigo-600 text-white rounded-lg mt-[-4rem] p-3'
            />
            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
            <p className='text-gray-600  text-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              totam temporibus suscipit veniam blanditiis vel quia excepturi,
              magnam sed velit.
            </p>
          </div>
          <div className='bg-slate-100 pl-8 py-4'>
            <p className=' flex items-center text-indigo-600 gap-2'>
              Contact Us <AiOutlineArrowRight />
            </p>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-2xl'>
          <div className='p-8'>
            <FaMicrochip
              size={60}
              className=' bg-indigo-600 text-white rounded-lg mt-[-4rem] p-4'
            />
            <h3 className='font-bold text-2xl my-6'>Sales</h3>
            <p className='text-gray-600  text-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              totam temporibus suscipit veniam blanditiis vel quia excepturi,
              magnam sed velit.
            </p>
          </div>
          <div className='bg-slate-100 pl-8 py-4'>
            <p className=' flex items-center text-indigo-600 gap-2'>
              Contact Us <AiOutlineArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
