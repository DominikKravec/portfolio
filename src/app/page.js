import Image from "next/image";
import './style/home.css'
import images from '../constants/images.js'
import icons from "../constants/icons";

import Projects from "@/components/sections/projects/projects";
import ScrollReveal from "@/components/Scrollreveal/ScrollReveal";

export default function Home() { 

  return (
    <>
        <header>
            <div id="logo">
                <span>Dominik Kravec</span>
            </div>

            <div id="navbar">
                <a href="#about-me">About me</a>
                <a href="#projects">Projects</a>
                <a href="https://github.com/DominikKravec/">GitHub</a>
            </div>
        </header>
        <main>

            <ScrollReveal>
                <section id="about-me" className="">
                    <div className="heading-container">
                        <h1>About me</h1>
                    </div>
                    <div id="info-container">
                        <div id="info-text-container">
                            <p>
                            I am currently a student at the Faculty of Informatics at Masaryk University, where I study programming and application development. 
                            Prior to this, I graduated from the Secondary Technical School of Electrical Engineering in Košice, which also focused on software development. 
                            Through my academic background and various personal projects, 
                            I have gained several years of practical programming experience, specializing in both front-end and back-end development.
                            </p>
                        </div>
                    </div>
                </section>

            </ScrollReveal>
           
            
            <Projects/>

            
        </main>

    </>
  );
}
