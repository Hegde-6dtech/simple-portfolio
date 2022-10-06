import React from 'react'
import './About.css'

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src="./images/Anie2.jpg" alt="" />
            </div>
            <div className="right">
              <div className="topic">Designing Is My Passion</div>
              <p>
                I work with forward-thinking people to design and build
                interactive, accessible websites and products. From working on
                projects for likes of Aardman Animations, UNHCR, RNLI, and
                Honda, to working at startups in Tokyo, I've devoted more than a
                decade to making the web a little bit brighter.
              </p>
              <div className="button">
                <button>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
