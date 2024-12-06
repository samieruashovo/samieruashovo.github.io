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
              Hello! My name is <strong>Samier Uddin Ahammad Shovo</strong>.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I am a passionate and skilled Flutter developer with a keen eye
              for creating dynamic, user-friendly applications. With expertise
              in state management, clean architecture (MVVM), and API
              integrations, I thrive on delivering robust and scalable
              solutions. My journey in app development includes publishing
              successful apps like 2048 - Number Merge, featuring multiple board
              sizes, 13+ themes, and a polished user experience.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Beyond Flutter, I have hands-on experience in Django, I have
              published Django backend on AWS, DigitalOcean, Apache/Nginx
              Server. This dual expertise in development and security enables me
              to craft applications with a strong focus on secure coding
              practices. Whether it’s building seamless user experiences,
              optimizing performance, or ensuring application security, I am
              committed to delivering excellence in every project I undertake.
              Let’s connect and build something amazing together!
              <div className="tagline2">
                I have expertise with the following technologies:
              </div>
            </ScrollAnimation>

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
