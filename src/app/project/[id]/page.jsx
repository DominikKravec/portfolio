'use client'

import React, { useEffect, useState } from 'react'

import '../../style/home.css'
import ImageScroller from '@/components/ImageScroller/ImageScroller'
import { useParams } from 'next/navigation'

export default function ProjectPage() {

    const params = useParams()

    const [project, setProject] = useState({})

    useEffect(() => {
        const fetchProject = async () => {
            const response = await fetch(`/projects.json`)
            const data = await response.json()
            console.log(data)
            setProject(data[params.id])
        }

        fetchProject()

    }, [])

  return (
    <>
        <header>
            <div id="logo">
                <span>Dominik Kravec</span>
            </div>

            <div id="navbar">
                <a href="/">Home</a>
            </div>
        </header>

        {project ? (

            <main className='projectPage'>
                <h1>
                    {console.log(project)}
                    {project.name}
                </h1>

                {project.images && (
                    <ImageScroller
                        images={project.images}
                    />
                )}

                <div id="info-text-container">
                    <p>
                        {project.description}
                    </p>
                </div>

                {project.links && (
                        <section className="links">
                            {          
                                project.links.map(link => {
                                    return (
                                        <a href={link.url}>
                                            <p>
                                                {link.name}
                                            </p>
                                        </a>
                                    )
                                })
                            }
                        </section>
                    )
                    
                    
                }

            </main>
        
        ) : (<div>Loading...</div>)}

        

    </>
  )
}
