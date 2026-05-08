'use client'

import React from 'react'
import "./style.css"
import Image from "next/image";
/* 1. Import Link from next/link instead of useRouter */
import Link from 'next/link'; 
import UsedTechnology from '../UsedTechnology/UsedTechnology';

export default function ProjectCard({project}) {
    // 2. You no longer need the router here!
    
    let techs = project.technologies.slice(0, 3)
        
    return (
        <div className="project-card">
            <div className="img-container">
                <Image 
                    src={project.images[0]} 
                    alt="project"
                    fill={true}
                    style={{ objectFit: 'cover' }} 
                    className="featureImg"
                />
            </div>
            <div className="project-info">
                <div className="project-title">
                    <p>{project.name}</p>
                </div>

                {project.technologies && (
                    <div className="project-technologies">
                        {techs.map((tech, index) => (
                            <UsedTechnology
                                key={index}
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
                    
                    <Link href={"/project/" + project.id} className="button">
                        <p>
                            MORE
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}