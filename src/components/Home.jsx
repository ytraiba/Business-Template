import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#90BEDE]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#b625d9] text-3xl sm:text-4xl pb-2'>Welcome!</p>
        <h2 className='text-4xl sm:text-7xl font-bold text-black'>
          This is Our Company.
        </h2>
        <p className='text-black sm:text-xl py-4 max-w-[700px]'>
          We are specializing in providing relevant economic information and financial tools 
          to people in under-developed countries and informal markets. 
        </p>
        <div>
          <Link to='about' smooth={true} duration={500}>
          <button className='text-black group border-2 border-[#0a192f] px-6 py-3 flex items-center hover:text-[#b625d9] hover:border-[#b625d9]'>
            Learn More
          <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3 ' /></span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
