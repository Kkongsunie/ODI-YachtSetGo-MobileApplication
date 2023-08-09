// Sidebar.js
import React from 'react';
import Link from 'next/link';
import styles from './styles/sidebar.module.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Sidebar content */}
      <button onClick={closeSidebar}>Close Sidebar</button>
      <ul>
      <li><Link href="./">Preference Sheet</Link></li>
      <li><Link href="./Itinerary/">All Itinerary</Link></li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
