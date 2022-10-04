import React from 'react'
import Cards from '../Cards/Cards'
import './Info.css'
import SideNav from '../SideNav/SideNav'

function Info() {
  return (
    <>
      <div className="Hero">
        <SideNav />

        <div className="card mb-3 text-white border-0">
          <img
            src="./images/imgc.jpg"
            className="card-img"
            alt="Background"
            height="700px"
          />
          <div className="card-img-overlay">
            <div className="container">
              <h5 className="card-title">Hi I'm John Smith</h5>
              <p className="card-text ">
                I'm an <b>indepent creative web developers</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
