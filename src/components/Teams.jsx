import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
//   FaGithub,
//   FaLinkedin,
} from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Teams = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#90BEDE] text-[#233dff]'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            David
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            Cliff
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Javi
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Natasha
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Yasin
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#90BEDE] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            David
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Cliff
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Javi
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Natasha
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Yasin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Teams;