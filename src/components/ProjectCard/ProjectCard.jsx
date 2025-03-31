'use client'

import React from 'react'
import "./style.css"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import UsedTechnology from '../UsedTechnology/UsedTechnology';

export default function ProjectCard({project}) {

    const router = useRouter()
        
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
            <div className="project-title">
                <p>{project.name}</p>
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
    )
}
