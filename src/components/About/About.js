import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hey there! I’m <strong>Samier Uddin Ahammad Shovo</strong>.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            <div class="skills-title">🔹 Mobile Engineer</div>
              My expertise lies in Flutter, where I design and develop
              full-featured mobile applications with clean architecture, MVVM architecture
              and state management solutions like and BloC & GetX.
              I’ve worked on various apps, from productivity tools to
              games, including my published 2048 - Number Merge game,
              which features multiple themes, customizable board sizes,
              and a sleek UI.
              I also focus on app performance optimization,
              offline-first architectures, and native
              integrations to ensure smooth user experiences
              across devices.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            <div class="skills-title">🔹 Machine Learning & Computer Vision</div>
              I’m also deeply interested in machine learning and computer vision.
              Recently, I trained a YOLO model on a marine debris dataset to detect
              objects like cans, foam, plastic, and bottles. I enjoy working on
              real-world AI applications and optimizing models for mobile and
              edge computing.
              <a href="https://ietresearch.onlinelibrary.wiley.com/doi/pdf/10.1049/ccs2.12114" target="_blank" rel="noopener noreferrer" > Click here to view my research</a>


            </ScrollAnimation>
            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            <div class="skills-title">🔹 Awards </div>
            1st Place among 30 participating teams at Bangladesh University of Business & Technology Brainstorming Week - 2024 IoT
            competition


            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
        

              <div class="skills-title">🔹 Other Technical Skills & Interests</div>
              <div>
                <ul class="skills-list">
                  <li>-  Flutter Maps & Routing – Built a map-based app using Barikoi API with navigation features</li>
                  <li>- NFC Development – Worked with the nfc_manager package for Flutter-based NFC operations</li>
                  <li>- Fake Data Generation – Currently working on a Flutter package to generate realistic test data</li>
                  <li>- Clean Architecture & MVVM – Completed an advanced Udemy course on Flutter Clean Architecture with MVVM</li>
                </ul>
              </div>

              <div className="tagline2">
                I have expertise with the following technologies:
              </div>
            </ScrollAnimation>

            <br />
            <br />
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
