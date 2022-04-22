import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#90BEDE]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#b625d9] text-3xl '>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#0a192f]'>
          David Rice
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#0a192f]'>
          This is DataNovae.
        </h2>
        <p className='text-[#0a192f] py-4 max-w-[700px]'>
          I am a person specializing in this. Currently, I’m focused on
          building this to help solve problems.
        </p>
        <div>
          <button className='text-[#0a192f] group border-2 border-[#0a192f] px-6 py-3 my-2 flex items-center hover:text-white hover:border-white'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
