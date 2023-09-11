// components/Logo.js
import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
    return ( 
    <div className={styles['logoNavbar-container']}>
        <img src="/images/global/logo.png" width="120" alt="Logotipo da bss"/>
    </div>
    )
} 
export default Logo;