import React from 'react';
import Link from 'next/link'
import logo from '../../../public/logo.png';


const Logo = () => {
  console.log(logo);
  return (
    <Link href="/">
      <img src={ logo.src } alt="Logo" />
    </Link>
  );
}

export default Logo;

