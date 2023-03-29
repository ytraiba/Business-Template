import React from 'react'
import {
  FaLinkedin,
} from 'react-icons/fa';
import NatashaPhoto from '../assets/NatashaPhoto.jpeg';
import CliffPhoto from '../assets/CliffPhoto.jpeg';
import DavidPhoto from '../assets/DavidPhoto.jpeg';

const People = () => {
  
  const GridEntry = props => {
    return <div className='w-full mx-auto pt-4'>
    <div className='bg-transparent container flex justify-center rounded-lg overflow-hidden'>
        <div className='text-xl mb-2'>
          <p className='text-white text-center flex w-full flex-col space-y-0 items-center'>
            <img className='inline rounded-sm shadow-lg shadow-[#040c16] object-contain w-[185px] max-h-48 sm:max-h-60 sm:w-auto' src={props.img} alt="img" />
            <span className='text-xl sm:text-3xl border-b-2 border-[#b625d9] pt-2'>{props.name}</span>
            <span className='text-sm'>{props.alt}</span>
            
            <span className='text-sm px-2 '>{props.asset}</span>
            <span className='bg-gray-600 rounded-sm pt-2'href='/'><FaLinkedin size={30} /></span>
            
          </p>
        </div>
      
    </div>
  </div>
  };

  return (
    
    <div name='people' className='w-full h-full bg-gray-600 pb-12 '>

      {/* The Team  */}
      <div className='flex pl-4 sm:pl-0 sm:justify-center'>
      <p className='text-4xl sm:text-5xl border-b-4 border-[#b625d9] font-bold text-white mt-10 w-fit'>The Team</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 justify-center justify-self-auto items-center pt-12 sm:pl-32 sm:pr-32'>
      <GridEntry name="David" asset="david.rice@datanovae.com" alt="Founder and Leader" img={DavidPhoto}/>
      <GridEntry name="Cliff" asset="cliff.rotenberg@gmail.com" alt="Business Strategist" img={CliffPhoto}/>
      <GridEntry name="Natasha" asset="nmt303@nyu.edu" alt="Public Relations" img={NatashaPhoto}/>
      </div>
      
    </div>
  )
}

export default People