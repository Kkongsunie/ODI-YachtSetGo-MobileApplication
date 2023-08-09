'use client'

// RootLayout.js
import React, { useState } from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import styles from './styles/layout.module.css';
import Image from 'next/image';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Sidebar from './Sidebar';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
});

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <html lang="en">
      <body className={poppins.className}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Top Navigation */}
          <div className={styles.headerContainer}>
            <div className={styles.headerBox}>
              <div className={styles.leftIcon}>
                <MenuIcon className={styles.menuIcon} onClick={toggleSidebar} />
              </div>
              <div className={styles.rightIcon}>
                <DarkModeOutlinedIcon className={styles.darkModeIcon} />
                <Image
                  src="/images/profile.png"
                  width={42}
                  height={42}
                  className={styles.profilePic}
                  alt="profile"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

          {/* Main Content */}
          <div className={`${styles.mainContainer} ${isSidebarOpen ? styles.shifted : ''}`}>
            {/* Your main content goes here */}
            {children}
          </div>
        </LocalizationProvider>
      </body>
    </html>
  );
}

