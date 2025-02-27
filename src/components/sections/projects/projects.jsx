'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import images from '../../../constants/images'
import './style.css'

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch('/projects.json')
            const projectData = await response.json()
            console.log(projectData)
            setProjects(projectData)

        }

        getProjects()

    }, [])

  return (
    <section id="projects" className="">
        
        {
            projects ? projects.map(
                (project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                )
            ) : (<></>)
        }
        
        
    </section>
  )
}
