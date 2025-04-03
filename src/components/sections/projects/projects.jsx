"use client";

import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ScrollReveal from "@/components/Scrollreveal/ScrollReveal";
import "./style.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Store the interval ID
  const pauseTimeoutRef = useRef(null); // Store the pause timeout ID

  // Fetch projects
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("/projects.json");
      const projectData = await response.json();
      console.log(projectData);
      setProjects(projectData);
    };

    getProjects();
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!projects.length) return; // Don’t start if no projects

    // Function to start the interval
    const startInterval = () => {
      clearInterval(intervalRef.current); // Clear any existing interval
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 3 seconds
    };

    startInterval();

    // Cleanup on unmount or projects change
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [projects]); // Re-run when projects array changes

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    // Pause the interval for 10 seconds
    clearInterval(intervalRef.current);
    clearTimeout(pauseTimeoutRef.current); // Clear any existing timeout

    // Resume auto-scroll after 10 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Resume with 3-second intervals
    }, 10000); // Pause for 10 seconds
  };

  if (!projects.length) {
    return null;
  }

  return (
    <section id="projects" className="projects-section">
      <div className="carousel-container">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="carousel-item">
              <ScrollReveal>
                <ProjectCard project={project} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
      <div className="indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </section>
  );
}