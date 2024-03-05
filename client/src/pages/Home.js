import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Home() {
  const containerStyle = {
    marginTop: '5rem', // Adjust the top margin as needed
  };

  const titleStyle = {
    fontSize: '2rem', // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '1rem', // Adjust the font size as needed
  };

  return (
    <div>
      {/* ======= Hero Section ======= */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
          {/* Ajoutez des boutons pour chaque diapositive supplémentaire */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '625px', marginTop: '-100px' }}>
            <img src="/jetski.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item" style={{ height: '625px', marginTop: '-100px' }}>
            <img src="/q.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item" style={{ height: '625px', marginTop: '-100px' }}>
            <img src="/chev.jpeg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item" style={{ height: '625px', marginTop: '-100px' }}>
            <img src="/k.jpg" className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item" style={{ height: '625px', marginTop: '-100px' }}>
            <img src="/h.jpg" className="d-block w-100" alt="Slide 5" />
          </div>

          {/* Ajoutez des divs .carousel-item pour chaque diapositive supplémentaire */}
        </div>
        <div className="container mt-5" style={containerStyle}>
          <h5 style={titleStyle}>Welcome to  <span>AdventureBooking :</span></h5>
          <p style={descriptionStyle}>
            Discover pure adventure with our online booking site! Explore the wonders of Houmt Souk,
            Midoun and beyond by easily booking your favorite experience among our incredible quad ride offers,
            scooters, horseback riding, water skiing, and much more. Get ready to experience unforgettable moments with
            AdventureBooking - your portal to exceptional adventures in Djerba. Easily book your activity
            favorite among our selection.
          </p>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div>
        {/* ======= End Hero Section ======= */}
        {/* ======= Featured Services Section ======= */}
        <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" >
                  <div className="icon"><i className="bx bxl-dribbble" /></div>
                  <h4 className="title"><a href>  Speed</a></h4>
                  <p className="description">We are never safe from an incident. It is the speed and effectiveness of the interventions that make the difference.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" >
                  <div className="icon"><i className="bx bx-file" /></div>
                  <h4 className="title"><a href>Custom made</a></h4>
                  <p className="description">Pass by the locals and enjoy this authentic experience far from mass tourism and the beaten track.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer" /></div>
                  <h4 className="title"><a href>Availability</a></h4>
                  <p className="description">With us, there is never a time when you cannot be disruptive. We are always at your disposal.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" >
                  <div className="icon"><i className="bx bx-world" /></div>
                  <h4 className="title"><a href>Local Experience</a></h4>
                  <p className="description">Pass by the locals and enjoy this authentic experience far from mass tourism and the beaten track.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Featured Services Section */}
      </div>


    </div>
  );
}

export default Home;
