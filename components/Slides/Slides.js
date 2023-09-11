import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slides = () => {
    return (
        <div>
            <Carousel
            autoPlay={true} // Avança automaticamente
            infiniteLoop={true} // Continua percorrendo imagens
            showArrows={true} // Mostra botões de navageção
            showStatus={false} // Nao mostrar  stats (numero da imagem atual)
            showThumbs={false} // Nao mostrar miniaturas
            interval={3000} // Tempo em milisegundos
            > 
            
            <div>
             <img src="/images/slides/slides-01.jpg" alt="Extintores de incêndio" />
            </div>

            <div>
             <img src="/images/slides/slides-02.jpg" alt="Extintores de incêndio" />
            </div>

            <div>
             <img src="/images/slides/slides-03.jpg" alt="Extintores de incêndio" />
            </div>

            </Carousel>
        </div>
    )
}
export default Slides;