import React from 'react';
import { Link } from 'react-router-dom';
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
        <li key={item.id}>
          <Link className={styles.navItem} to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavOptions;
