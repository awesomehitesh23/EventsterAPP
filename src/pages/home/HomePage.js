import React from 'react';
import Navbars from '../../layouts/Navbars';
import homeimage from './../../assets/home.jpg'
const HomePage = () => {

  return (
    <>
      <div>
        <Navbars />
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
           
              <img src={homeimage} class="d-block w-100" alt="..." style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',with: '100vw',height: '91vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4 fw-bold">Welcome to Evenster!</h1>
    <hr/>
      <p>WORLD CLASS EVENTS</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./images/pic4.jpg" class="d-block w-100" alt="..." style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',with: '100vw',height: '91vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Football Match</h5>
                  <p>Football match location in Brazil.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./images/pic7.jpg" class="d-block w-100" alt="..." style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',with: '100vw',height: '91vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Basketball Match</h5>
                  <p>Basketball match location in India.</p>
                </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
    
  )
}

export default HomePage;