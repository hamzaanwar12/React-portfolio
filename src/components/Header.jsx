import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube, FaStackOverflow } from "react-icons/fa";

function Header() {
  return (
    <div className='py-2 bg-black  text-white flex item items-center'>
      <div className='w-[30%] flex  justify-around'>
        <a href="https://mail.google.com/mail"><FaEnvelope className='text-white text-xl' /></a>
        <a href="https://github.com/"><FaGithub className='text-white text-xl'  /></a>
        <a href="https://www.linkedin.com/"><FaLinkedin className='text-white text-xl' /></a>
        <a href="https://www.youtube.com/"><FaYoutube className='text-white text-xl' /></a>
        <a href="https://stackoverflow.com/"><FaStackOverflow className='text-white text-xl' /></a>
      </div>
      <div className='flex w-[65%] text-lg justify-end'>
        <a href="i#Products" className='mr-16 hover:underline'>Projects</a>
        <a href="#Conatctme" className='hover:underline'>Contact Me</a>
      </div>
    </div>
  );
}

export default Header;