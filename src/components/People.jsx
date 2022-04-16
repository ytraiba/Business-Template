import React from 'react'

import YasinPhoto from '../assets/YasinPhoto.jpeg';
import JaviPhoto from '../assets/JaviPhoto.jpeg';
import TerencePhoto from '../assets/Terrance.jpeg';
import NatashaPhoto from '../assets/NatashaPhoto.jpeg';
import CliffPhoto from '../assets/CliffPhoto.jpeg';
import DavidPhoto from '../assets/DavidPhoto.jpeg';
// import realEstate from '../assets/realestate.jpg';
// import Article3 from '../assets/Article3.jpeg';


const People = () => {
  
  const GridEntry = props => {
    return <div className='w-full max-w-sm s mx-auto my-10'>
    <div className='bg-transparent container flex justify-center shadow-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>
          <p className='text-gray-300 flex flex-col space-y-2 items-center justify-center'>
            <span className='font-serif font-bold'>{props.name}</span>
            <img className='inline object-contain h-48 w-96' src={props.img} alt="img" />
            <span className='text-gray-300 font-serif font-bold'>{props.asset}</span>
            <span className='text-gray-300 text-sm font-serif'>{props.alt}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  };

  return (
    
    <div name='people' className='w-full h-full bg-[#0a192f] pt-40 pb-20'>
      {/* The Team  */}
      <h4 className='text-center text-white text-3xl font-serif font-bold'>The Team</h4>
      <div className='flex flex-wrap justify-center justify-self-auto items-center'>
      <GridEntry name="David Rice" asset="Email" alt="Founder and Leader. Nickname: Uber Driver" img={DavidPhoto}/>
      <GridEntry name="Natasha Treunen" asset="Email" alt="PHD student at Oxford. Nickname: Bubbles" img={NatashaPhoto}/>
      <GridEntry name="Javier Cerdas" asset="Email" alt="Software Engineer. Nickname: Keep" img={JaviPhoto}/>
      <GridEntry name="Cliff Rotenburg" asset="Email" alt="Operations and Managment. Nickname: " img={CliffPhoto}/>
      <GridEntry name="Yasin Traiba" asset="Email" alt="Intern. Nickname: TBD" img={YasinPhoto}/>
      <GridEntry name="Terence McNamee" asset="Email" alt="International Relations. Nickname: SilverFox" img={TerencePhoto}/>
      </div>
    </div>
  )
}

// flex flex-wrap justify-center justify-self-auto items-center

export default People