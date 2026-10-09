import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollYPos, setscrollYPos] = useState(0);

  const handleOnScrollY = (e) => {
    setscrollYPos(window.scrollY);
  };

  useEffect(() => {
    // When rendering ends, run this code
    window.addEventListener("scroll", handleOnScrollY);
    // Cleaning the events
    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  }, []);

  return (
    <>
      <footer className="flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">&copy Copyright All Rights Reserved 2026</div>
      </footer>
      {scrollYPos > 999 && (
        <a href="#hero" className="goUp flex-center">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      )}
    </>
  );
};
