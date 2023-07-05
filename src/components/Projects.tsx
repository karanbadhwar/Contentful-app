import React from "react";
import { useFetchProjetcs } from "../fetchProjects";

function Projects() {
  const { loading, projects } = useFetchProjetcs();
  // console.log(loading, projects);

  if (loading) {
    return (
      <section className="projects">
        <h2>Loadng....</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, title, url } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
