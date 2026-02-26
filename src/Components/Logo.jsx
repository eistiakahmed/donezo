import React from 'react';
import LogoImg from '../assets/logo.webp';
import { Link } from 'react-router';

export default function Logo() {
  return (
    <div className="mx-5">
      <Link to={'/'} className="flex  items-center mt-5 gap-2 ">
        <img
          src={LogoImg}
          alt="donezoLogo"
          className="w-12 h-12 rotate-270"
        />
        <h1 className="text-2xl font-bold">DONEZO</h1>
      </Link>

      
    </div>
  );
}
