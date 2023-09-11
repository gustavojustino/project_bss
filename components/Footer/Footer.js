// components/Footer.js
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYahoo, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <h3>Redes sociais</h3>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <p>Email: comercial@bssbrazil.com.br</p>
            </div>

            <div className={styles.footerNav}>
                <h3>Atendimento</h3>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Telefone</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/services">Parceiros</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">Orçamento</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">Perguntas Frequentes</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.footerAddress}>
                <h2>Venha nos visitar</h2>
                <br/>
                <h3>Macaé</h3>
                <p><span>Endereço:</span> Av. Pref. Aristeu Ferreira da Silva, N° 2121 - <br/> Novo Cavaleiros, Macaé - RJ</p>
                <p>Telefone: (22) 2791-7420</p>
                <br/>
                <h3>Rio de Janeiro</h3>
                <p><span>Endereço:</span> R. Maria da Glória, 377 - <br/> Ramos, Rio de Janeiro - RJ</p>
                <p>(21) 3197-3071</p>
            </div>

            <div className={styles.copyRight}>Website desenvolvido por Luis Gustavo - &copy; 2023</div>
        </footer>
    )
}
export default Footer;