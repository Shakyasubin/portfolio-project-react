import React from "react";
import image from "../assets/a.png";

export const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I'm <span>Subin Shakya</span>
              <div className="tag">Soft. Engineer</div>
              <p>I love coding and teach others what I know</p>
              <div>
                <a href="">
                  <button>
                    Download CV<i className="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="right flex">
            <img src={image} alt="myPhoto" />
          </div>
        </div>
      </section>
      <section className="banner flex container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};
