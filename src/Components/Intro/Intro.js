import React from 'react'
import Footer from '../Footer/Footer'
import './Intro.css'

function Intro() {
  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/home.jpg"
                className="img-fluid rounded-start"
                alt="Background"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-greet">Hi</p>
                <h5 className="card-title">I'm Shamanth Hegde</h5>
                <p className="card-text">I'm A Front Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Intro
