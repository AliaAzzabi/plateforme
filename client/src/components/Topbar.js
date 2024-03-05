import React from 'react'

function Topbar() {
  return (
    <div>
       {/* ======= Top Bar ======= */}
<section id="topbar" className="d-flex align-items-center">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">informationadvan@gmail.com</a></i>
      <i className="bi bi-phone d-flex align-items-center ms-4"><span>+216 28237481</span></i>
    </div>
    <div className="social-links d-none d-md-flex align-items-center">
     
      <a href="https://www.facebook.com/ActiviteDjerba" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="https://www.instagram.com/djerba619/" className="instagram"><i className="bi bi-instagram" /></a>
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Topbar
