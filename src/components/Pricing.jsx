import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold py-8'>
            The right price for your research.
          </h3>
          <p className='text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at
            facere optio fuga asperiores assumenda rem ullam, accusantium sequi
            voluptate?
          </p>
        </div>

        <div className='grid md:grid-cols-2'>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
              Standard
            </span>
            <div>
              <p className='text-6xl font-bol py-4 flex'>
                $49
                <span className='text-xl text-slate-500 flex flex-col justify-end'>
                  /mo
                </span>
              </p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, blanditiis.
              <div>
                <p>
                  <BsCheckLg className='mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p>
                  <BsCheckLg className='mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p>
                  <BsCheckLg className='mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p>
                  <BsCheckLg className='mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p>
                  <BsCheckLg className='mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <button>Get Started</button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;