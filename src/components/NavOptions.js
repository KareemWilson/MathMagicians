import React from 'react';
import styles from '../styles/navOptions.module.css';

const navOptions = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 1,
    name: 'Calculator',
    path: '/calculator',
  },
  {
    id: 1,
    name: 'Quote',
    path: '/quote',
  },
];

function NavOptions() {
  return (
    <ul className={styles.navList}>
      {navOptions.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default NavOptions;
