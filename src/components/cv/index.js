import React from 'react';
import '../cv/style.css';
import {
  Col,
  Row
} from 'react-bootstrap';
import CLC from '../cv_left_content';
import CRI from '../cv_img';

// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiWindows11,
//   SiGit,
// } from "react-icons/si";

function CV() {
  const transparentDivStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.09)', // Adjust the alpha value for transparency
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px', // Adjust the width as needed
    margin: 'auto',
    marginTop: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    
    
  };
  const textStyle = {
    fontSize: '25px', // Add font size
    color: 'white',
  };
  return (
      <Row style={{height:'100%', width:'100%'}}>
        <Col xl={7} >
         < CLC />
        </Col>
        <Col xl={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={transparentDivStyle}>
          <p style={textStyle}>
        As a seasoned Flutter developer with three years of experience and a proficient full-stack web developer for two years, I bring a dynamic skill set to the world of software development. My expertise extends across diverse technologies, including React.js, Django, and the MERN stack. Throughout my career, I've demonstrated a passion for creating seamless user experiences and robust, scalable applications. My proficiency in Flutter has allowed me to craft cross-platform mobile solutions, while my full-stack capabilities enable me to navigate the complexities of web development with ease. With a keen eye for detail and a commitment to staying abreast of industry trends, I am dedicated to delivering high-quality, innovative solutions that meet the evolving needs of users and businesses alike. My journey in software development is characterized by continuous learning, problem-solving, and a relentless pursuit of excellence.
      </p>
          </div>
          <div>
          {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
    </Row> */}
          </div>

        
         {/* < CRI /> */}
        </Col>
      </Row>
  );
}

export default CV;
