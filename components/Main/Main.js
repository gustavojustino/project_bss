// components/Main.js
import React from 'react';
import styles from './Main.module.css';
import Link from 'next/link';

const Main = () => {
    return (
        <main className={styles.mainContainer}>
            <hr />

            <section className={styles.sectionReasons}>
                <div className={styles.titleReasons}>
                    <img src="/images/main/icon-reasons.png" className={styles.imgReason} width="50" alt="Icone número 5" />
                    <h2>
                        Motivos para escolher <span className={styles.title}>Brazil Safety Service</span> como prestadora do seu serviço!
                    </h2>
                </div>
                <div className={styles.descriptionReasons}>
                    <div>
                        <img src="/images/main/icon-01.png" width="60" alt="Icone satisfação" />
                        <h2 className={styles.title}>Satisfação</h2>
                        <p>Buscamos a satisfação de nossos clientes, parceiros e fornecedores</p>
                    </div>

                    <div>
                        <img src="/images/main/icon-02.png" width="60" alt="Icone qualidade" />
                        <h2 className={styles.title}>Qualidade</h2>
                        <p>Garantimos qualidade nos serviços prestados</p>
                    </div>

                    <div>
                        <img src="/images/main/icon-03.png" width="60" alt="Icone economia" />
                        <h2 className={styles.title}>Economia</h2>
                        <p>Preços compatíveis com a realidade</p>
                    </div>

                    <div>
                        <img src="/images/main/icon-04.png" width="60" alt="Icone atendimento" />
                        <h2 className={styles.title}>Atendimento</h2>
                        <p>Estamos prontos para atender qualquer dúvida ou necessidade</p>
                    </div>

                    <div>
                        <img src="/images/main/icon-05.png" width="60" alt="Icone especialista" />
                        <h2 className={styles.title}>Especialista</h2>
                        <p>Estamos há mais de <span>8 anos</span> no mercado</p>
                    </div>
                </div>
            </section>

            <section className={styles.sectionMoreInfo}>
                <h2 className={styles.title}>Manutenção de extintores e combate a incêndio</h2>
                <Link className={styles.linkMoreInfo} href="">Saiba mais!</Link>
            </section>

            <section className={styles.sectionAbout}>
                <div className={styles.textAbout}>
                    <h2>A nossa trajetória carrega experiência</h2>
                    <br />
                    <p>
                        &nbsp;&nbsp;A Brazil Safety Service (BSS) foi fundada em 30 de maio de 2014, na cidade nacional do Petróleo Macaé-Rj. Com objetivo de atuar no mercado de serviços e comercialização de equipamentos de segurança, visando o atendimento nas áreas de Comércio, Indústria, Forças Armadas, Navegação Mercantil e Apoio Offshore.
                    </p>
                    <p>
                        &nbsp;Com alta tecnologia e capacidade de sua estrutura, somadas a uma política de aperfeiçoamento constante no desenvolvimento de suas atividades, proporcionando a garantida total qualidade dos seus serviços, visando atender as expectativas dos seus clientes.
                    </p>
                    <p>
                        &nbsp;Nossa missão é oferecer soluções de segurança de alta qualidade e inovação para nossos clientes, garantindo a total conformidade com as regulamentações e normas de segurança. Nosso compromisso com a segurança é incansável, e nosso objetivo é proporcionar tranquilidade aos nossos clientes, onde quer que estejam.
                    </p>
                    <ul>
                        <li>&nbsp;Compromisso com a Qualidade: Buscamos continuamente aprimorar nossos serviços e produtos para garantir que nossos clientes tenham acesso às melhores soluções de segurança.</li>
                        <li>&nbsp;Inovação: Abraçamos a tecnologia e a inovação como parte integrante de nosso compromisso com a segurança.</li>
                        <li>&nbsp;Integridade: Nossa conduta é pautada pela ética e transparência em todas as interações com clientes, parceiros e colaboradores.</li>
                        <li>&nbsp;Segurança em Primeiro Lugar: Colocamos a segurança no centro de tudo o que fazemos, priorizando a vida e o bem-estar das pessoas.</li>
                    </ul>
                    <p>
                        &nbsp;A BSS orgulha-se de sua matriz (BSS Rio) no Rio de Janeiro, uma localização estratégica que nos permite atender às demandas de uma clientela diversificada em todo o país. Estamos preparados para enfrentar desafios e ambientes regulamentados, especialmente na indústria offshore, onde nossa experiência é particularmente valiosa.
                    </p>
                </div>
                <img className={styles.imageAbout} src="/images/main/image-BSS.jpg" alt='Imagem da sede BSS' />
            </section>

            <section className={styles.sectionServices}>
                <div>
                    <img src="/images/main/extinguisher-services.jpg" alt="Serviço de extintores" width="250" />
                    <h2>Extintor</h2>
                    <p>
                        O teste hidrostático em extintores de incêndio deve ser realizado seguindo a portaria Nº 58, neste caso, a cada 5 anos, observando também a recarga a ser realizada, obrigatóriamente a cada 12 meses.</p>
                </div>

                <div>
                    <img src="/images/main/firehose-services.jpg" alt="Serviço de mangueiras" width="250" />
                    <h2>Mangueiras</h2>
                    <p>
                        O teste hidrostático em mangueiras de incêndio deve ser realizado               obrigatoriamente a cada 12 meses, a NBR 12779, é a norma da ABNT que trata de mangueiras de combate a incêndio e estabelece requisitos para testes hidrostáticos.
                    </p>
                </div>

                <div>
                    <img src="/images/main/co2systems-services.jpg" alt="Serviço de sistema de co2" width="250" />
                    <h2>Sistema de co2</h2>
                    <p>
                        Somos especializados em manutenção de sistema fixo de CO2, realizamos montagem e desmontagem do sistema, manutenção dos cilindros, recargas, testes hidrostáticos, manutenção nas válvulas de comando e cabeça de acionamento do sistema.
                    </p>
                </div>
            </section>


        </main>
    )
}

export default Main;