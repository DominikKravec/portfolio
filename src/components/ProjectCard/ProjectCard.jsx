'use client'

import React from 'react'
import "./style.css"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import UsedTechnology from '../UsedTechnology/UsedTechnology';

export default function ProjectCard({project}) {

    const router = useRouter()

    let techs = project.technologies.slice(0, 3)
        
    return (
        <div className="project-card">
            <div className="img-container">
                <Image 
                    src={project.images[0]} 
                    alt="project"
                    fill={true}
                    layout="fill"
                    objectFit="cover" 
                    className="featureImg"
                />
            </div>
            <div className="project-info">
                <div className="project-title">
                    <p>{project.name}</p>
                </div>

                {project.technologies && (
                    <div className="project-technologies">
                        {techs.map(tech => (
                            <UsedTechnology
                                name={tech}
                            />
                        ))}

                        {techs.length >= 3 && (
                            <UsedTechnology
                                name={"..."}
                            />
                        )}
                    </div>
                )}

                <div className='desc'>
                    <p>{project.description}</p>
                </div>

                <div className="button-container">
                    <a className="button" 
                        onClick={() => {
                            console.log("aaaa")
                            router.push("/project/" + project.id)
                        }}
                    >
                        <p>
                            MORE
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
