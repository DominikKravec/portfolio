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
                            I’m a recent graduate of the Secondary School of Electrotechnical Engineering in Košice, where I studied programming for four years. Next year, I will continue my studies in programming and app development at Masaryk University in Brno. I’m passionate about web and app development, and my projects include both frontend and backend work.
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
