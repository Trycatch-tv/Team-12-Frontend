import React from 'react'
import imgFirst from '/public/img/sliders/banner-avg.png';
import imgSecond from '/public/img/sliders/banner-promo.png';
export const Slider = () => {
  return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imgFirst} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgSecond} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
