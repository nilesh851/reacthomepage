import React from 'react'

export default function Carousel(props) {
  return(
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="reactbanner carousel-inner">
    <div className="carousel-item active">
      <img src="https://dummyimage.com/1900x500/7a006c/fff" className="d-block w-100 text-center" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dummyimage.com/1900x500/000/fff" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dummyimage.com/1900x500/03cdff/0011ff" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}


