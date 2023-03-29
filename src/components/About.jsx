import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-600 text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#b625d9]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. This is our company. Please take a look around.</p>
            </div>
            <div className='text-xl'>
              <p>Every business shares a common need for timely, accurate, and relevant information in order to
              make better business decisions. Throughout under-developed countries in Africa, firms suffer from 
              a fundamental lack of useful economic information. 
              </p>  
              <p className='pt-4'>
              Our company is focusing on collecting real-time market data directly from stakeholders at the local level in order to 
              aggregate anonymized information to a common platform.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
