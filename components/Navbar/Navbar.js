// components/Navbar.js

import React, { useState } from 'react'; 
import Link from 'next/link'; 
import styles from './Navbar.module.css'; 
import {FaWhatsapp} from 'react-icons/fa';

// components
import Logo from '/components/Logo/Logo';

const Navbar = () => {
    const [mobileDropDown, setMobileDropDown] = useState(false); // Estado para controlar a abertura do Navbar

    // Função para alternar o estado do menu móvel
    const toggleMobileMenu = () => {

        setMobileDropDown(!mobileDropDown);
    };
    
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.logo}><Link href="/"><Logo/></Link></div>
                <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                     <img src="/images/global/icon-menu.svg"/>
                </div>

                
                
                <ul className={`${styles.navList} ${mobileDropDown ? styles.mobile : ''}`}>
                    {/* Listas de rotas do Navbar abaixo */}
                   
                    <li className={styles.navItem}>
                        <Link href="/" className={`${styles.link} ${styles.homeLink}`}>Página Inicial</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/services" className={styles.link}>Nossos Serviços</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about" className={styles.link}>Sobre Nós</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact" className={styles.link}>Contato</Link>
                    </li>
                    <span className={styles.whatsAppContactItem}>
                        <Link href="in-soon" className={styles['link-whatsApp']}><FaWhatsapp/></Link>
                    </span>

                </ul>
            </nav>

        </div>
    );
};

export default Navbar;