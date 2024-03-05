import React from 'react'

function Apropos() {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about section-bg">
        <div className="container" >
          <div className="section-title">
            <h2>A propos</h2>

            <p>Let us look for opportunities that allow us, in these temporal moments, to transcend all guilt, because each experience is an opportunity to learn and find satisfaction in the various facets of life.</p>
          </div>
          <div className="row">
            <div className="col-lg-6" >
              <img src="assets/img/about.jpg" className="img-fluid" alt />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos-delay={100}>
              <h3>Explore the world of adventure with our online booking service for exciting activities.</h3>
              <p className="fst-italic">
                Whether you are a thrill-seeker aboard a quad, passionate about horse riding, enthusiastic about jet ski tours,
                or simply looking for unique walks and tours, our platform offers you an unrivaled opportunity
              </p>
              <ul>
                <li>
                  <i className="bx bx-store-alt" />
                  <div>
                    <h5>Your next great experience awaits just a click away.</h5>
                    <p>
                      Explore the world with us and book the adventure of your choice with ease. </p>
                  </div>
                </li>
                <li>
                  <i className="bx bx-images" />
                  <div>
                    <h5>Discover an array of exciting activities just waiting for you to explore</h5>
                    <p>Immerse yourself in adventure and choose from a multitude of horse, quad, photo-taking experiences </p>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>{/* End About Section */}

    </div>
  )
}

export default Apropos
