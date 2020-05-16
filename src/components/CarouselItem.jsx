import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

import nuevo from '../assets/static/new.png'
import play from '../assets/static/play.png'
import download from '../assets/static/download.png'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt="People" />
        <div className="carousel-item__details">
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>

            <div className="carousel-item__buttons">
                <img className="carousel-item__newImg" src={nuevo} alt="New" />
                <img src={play} alt="Play" />
                <img src={download} alt="Download" />
            </div>
        </div>
    </div>
)

export default CarouselItem