import React from "react";

function Home() {
  return (
    <div>
      <div id="top" class="hero background-overlay">
        <div class="hero-content">
          <h1>I am Shamanth Hegde</h1>
          <p class="hero-job">
            <span>I'M A CREATIVE WEB DEVELOPER</span>
          </p>
          <p class="hero-job-desc">
            I STAND ON A SWEET SPOT WHERE DESIGN &amp; CODE INTERSECTS.{" "}
          </p>
        </div>

        <div class="hero-arrow page-scroll home-arrow-down">
          <a class="" href="#intro">
            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <header id="masthead" class="site-header">
        <nav id="primary-navigation" class="site-navigation" data-spy="affix">
          <div class="container">
            <div class="navbar-header page-scroll">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#portfolio-perfect-collapse"
                aria-expanded="false"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <div class="page-scroll site-logo">
                <a href="#top">Shamanth</a>
              </div>
            </div>
            <div
              class="main-menu collapse navbar-collapse"
              id="portfolio-perfect-collapse"
            >
              <ul class="nav navbar-nav navbar-right">
                <li class="page-scroll">
                  <a href="#top">Home</a>
                </li>
                <li class="page-scroll">
                  <a href="#intro">Intro</a>
                </li>
                <li class="page-scroll">
                  <a href="#about">About</a>
                </li>
                <li class="page-scroll">
                  <a href="#services">Services</a>
                </li>
                <li class="page-scroll">
                  <a href="#team">Team</a>
                </li>
                <li class="page-scroll">
                  <a href="#history">History</a>
                </li>
                <li class="page-scroll">
                  <a href="#works">Works</a>
                </li>
                <li class="page-scroll">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Home;
