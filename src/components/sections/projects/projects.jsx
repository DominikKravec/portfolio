"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ScrollReveal from "@/components/Scrollreveal/ScrollReveal";
import "./style.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const projectData = await response.json();
        console.log(projectData);
        setProjects(projectData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    getProjects();
  }, []);

  if (!projects.length) {
    return null;
  }

  return (
    <section id="projects" className="projects-section">
      <ScrollReveal>
        <div className="heading-container">
            <h1>Projects</h1>
        </div>
      </ScrollReveal>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <ScrollReveal>
              <ProjectCard project={project} />
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}