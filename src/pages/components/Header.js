import React from 'react';
import Logo from './Logo'
import styles from '../../styles/header.module.scss'

const Header = () => {
  return (
    <div className={styles.headerContainer}> 
      <header>
        <Logo />
        {/* Other header content goes here */}
      </header>
    </div> 
  );
}

export default Header;