import React from "react";
import headshot from "../assets/headshot.jpg"; 
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-6">
        <div className="col-md-6">
          <div className="about">
            <div className="name">
            <span className="headshot"> 
            <img src={headshot} alt="Headshot" /> 
          </span>
              <h2> Hi, My Name is Mitchell Stacy Kabenda</h2>
                <p className="description">A Self-taught developer with a passion for continuous learning and creating.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML5, CSS, Bootstrap, ReactJS, figma</span>
          </li>
          <li className="item">
            <h2>Version Control</h2>
            <span>Git</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

