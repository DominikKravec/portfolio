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
                <a href="#contact">Contact</a>
            </div>
        </header>
        <main>

            <ScrollReveal>
                <section id="introduction" className="">
                    <div id="opening-text">
                        <div id="text-container">
                            Web and app development
                        </div>
                    </div>
                    <div className="img-container">
                    <Image
                        src={icons.code}
                        alt='code'
                        width={300}
                        height={300}
                        className="featureImg"
                    />
                    </div>
                </section>

            </ScrollReveal>

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
           
            <ScrollReveal>
                <Projects/>
            </ScrollReveal>
            

            <section id="contact">
                <div className="contact-box">
                    <div className="img-container">
                        <Image
                        src={icons.phone}
                        />
                    </div>
                    <p>+421 915 389 823</p>
                </div>
                <div className="contact-box">
                    <div className="img-container">
                    <Image
                        src={icons.email}
                        />
                    </div>
                    <p>dominik.kravec0@gmail.com</p>
                </div>
            </section>
        </main>

    </>
  );
}
