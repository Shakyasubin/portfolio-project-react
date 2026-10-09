import React from "react";
import image from "../assets/a.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <section className="about" id="about">
      <Title title="About Me" />
      <div className="container flex about-content">
        <div className="flex-center myImg">
          <img src={image} alt="" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Subin Shakya</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            facilis deleniti quas ipsa ducimus amet, earum velit est officiis
            provident adipisci a illo quod debitis maiores? Doloremque,
            voluptas. Consectetur, aut?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            excepturi necessitatibus ullam et eligendi sunt aspernatur suscipit
            praesentium asperiores consequatur, maxime enim reprehenderit
            repellat vel officia natus? Quidem, explicabo veritatis?
          </p>
          <p>Khusibu, Nayabazar</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Superhero Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
