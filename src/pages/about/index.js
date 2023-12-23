import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

class About extends Component {

  // componentDidMount() {
  //   ReactGa.initialize("");
  //   ReactGa.pageview('shovo.tech - About Screen');
  //   
  // }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Samier Shovo</title>
                <link rel="canonical" href="http://shovo.tech/about" />
                <meta name="description" content="Samier Shovo | About - Flutter  Developer || Machine Learning Engineer || Fullstack Web Developer... 
                As a seasoned Flutter developer with three years of experience and a proficient full-stack web developer for two years, I bring a dynamic skill set to the world of software development. My expertise extends across diverse technologies, including React.js, Django, and the MERN stack. Throughout my career, I've demonstrated a passion for creating seamless user experiences and robust, scalable applications. My proficiency in Flutter has allowed me to craft cross-platform mobile solutions, while my full-stack capabilities enable me to navigate the complexities of web development with ease. With a keen eye for detail and a commitment to staying abreast of industry trends, I am dedicated to delivering high-quality, innovative solutions that meet the evolving needs of users and businesses alike. My journey in software development is characterized by continuous learning, problem-solving, and a relentless pursuit of excellence." />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />
              <CV/>
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default About;
