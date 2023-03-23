import React from 'react';
import Link from 'next/link'
import logo from '../../../public/logo.png';
import styles from '../../styles/header.module.scss'


const Logo = () => {
  return (
    <Link href="/">
      <img src={ logo.src } className={ styles.pic } alt="Logo" />
    </Link>
  );
}

export default Logo;

