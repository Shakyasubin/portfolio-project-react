import React from "react";
import site from "../assets/screenshot.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const projects = [
    {
      image: site,
      github: "",
      url: "",
      title: "Personal Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
    {
      image: site,
      github: "",
      url: "",
      title: "Personal Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
    {
      image: site,
      github: "",
      url: "",
      title: "Personal Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
    {
      image: site,
      github: "",
      url: "",
      title: "Personal Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
  ];
  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />

      <div className="grid projects-container">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
