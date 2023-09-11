// pages/index.js
import React from 'react';
import Head from 'next/head';

// components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Slides from '../components/Slides/Slides';


const Home = () => {
    return (
        
        <div>
            <Head>
                <title>Brazil Safety Service - Página Inicial</title>
                <meta name="description" content="Brazil Safety Service - Empresa especializada em manutenções de extintores de incêndio." />
                <link rel="icon" href="/images/favicon.jpg" width={50} height={50}/>
            </Head>

            <Navbar/>
            <Slides/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home;