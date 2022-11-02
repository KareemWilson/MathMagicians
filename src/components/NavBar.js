import React from 'react';
import NavOptions from './NavOptions';
import Title from './Title';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <Title />
      <NavOptions />
    </div>
  );
}

export default NavBar;
