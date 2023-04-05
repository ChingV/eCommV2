import React from 'react';
import classess from './Footer.module.css'

function Footer() {
  return (
    <footer className={classess['footer']}>
      <p>Copyright © 2023</p>
      <p>Private Waves</p>
    </footer>
  );
}

export default Footer;
