import React from 'react';
import styles from '../styles/Home.module.css';
import NavBar from './NavBar';

const Emily = () => {
  return (
    <div className={styles.main}>
      <NavBar></NavBar>
      <h1>Hi, Im Emily!</h1>
    </div>
  );
};

export default Emily;
