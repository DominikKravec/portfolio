import Image from "next/image";
import './style/home.css'
import images from '../constants/images.js'
import icons from "../constants/icons";

import Projects from "@/components/sections/projects/projects";

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
          <section id="about-me" className="">
              <div className="heading-container">
                  <h1>About me</h1>
              </div>
              <div id="info-container">
                  <div id="info-text-container">
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
                      
                      </p>
                  </div>
              </div>
          </section>
          
          <Projects/>

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
