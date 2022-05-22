import React from 'react'
import {
  FaLinkedin,
} from 'react-icons/fa';

import YasinPhoto from '../assets/YasinPhoto.jpeg';
import JaviPhoto from '../assets/JaviPhoto.jpeg';
import TerencePhoto from '../assets/Terrance.jpeg';
import NatashaPhoto from '../assets/NatashaPhoto.jpeg';
import CliffPhoto from '../assets/CliffPhoto.jpeg';
import DavidPhoto from '../assets/DavidPhoto.jpeg';

const People = () => {
  
  const GridEntry = props => {
    return <div className='w-full mx-auto pt-4'>
    <div className='bg-transparent container flex justify-center rounded-lg overflow-hidden'>
        <div className='text-xl mb-2'>
          <p className='text-white text-center flex w-full flex-col space-y-2 items-center'>
            <img className='inline rounded-sm shadow-lg shadow-[#040c16] object-contain w-[185px] min-h-48 max-h-72 sm:w-auto' src={props.img} alt="img" />
            <span className='text-xl sm:text-3xl border-b-2 border-[#b625d9] pt-2'>{props.name}</span>
            <span className='text-sm'>{props.alt}</span>
            <span className='flex items-center'>
            <span className='text-sm px-2 '>{props.asset}</span>
            <span className='bg-gray-500 rounded-sm 'href='/'><FaLinkedin size={30} /></span>
            </span>
          </p>
        </div>
      
    </div>
  </div>
  };

  return (
    
    <div name='people' className='w-full h-full bg-gray-600 pb-12 '>

      {/* The Team  */}
      <div className='flex justify-center'>
      <p className='text-4xl sm:text-5xl border-b-4 border-[#b625d9] font-bold text-white text-center mt-10 w-fit'>The Team</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 justify-center justify-self-auto items-center pt-12 sm:pl-32 sm:pr-32'>

      <GridEntry name="Yasin Traiba" asset="yasintraiba@gmail.com" alt="Software Engineer" img={YasinPhoto}/>
      <GridEntry name="David Rice" asset="Email" alt="Founder and Leader" img={DavidPhoto}/>
      <GridEntry name="Javier Cerdas" asset="Email" alt="Lead Software Engineer" img={JaviPhoto}/>
      <GridEntry name="Cliff Rotenburg" asset="Email" alt="Business Strategist" img={CliffPhoto}/>
      <GridEntry name="Natasha Treunen" asset="Email" alt="Public Relations" img={NatashaPhoto}/>
      <GridEntry name="Terence McNamee" asset="Email" alt="International Expert" img={TerencePhoto}/>
      </div>
      
    </div>
  )
}

export default People