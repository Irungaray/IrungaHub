import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

import pelicula7 from '../assets/images/carousel (7).jpg'
import nuevo from '../assets/static/new.png'
import play from '../assets/static/play.png'
import download from '../assets/static/download.png'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={pelicula7} alt="People" />
        <div className="carousel-item__details">
            <p className="carousel-item__details--title">Faro del fin del Uruguay</p>
            <p className="carousel-item__details--subtitle">2021 +12 120 min.</p>

            <div className="carousel-item__buttons">
                <img className="carousel-item__newImg" src={nuevo} alt="New" />
                <img src={play} alt="Play" />
                <img src={download} alt="Download" />
            </div>
        </div>
    </div>
)

export default CarouselItem