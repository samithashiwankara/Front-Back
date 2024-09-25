import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <a href="#">
          <svg
            id="logo-15"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
              className="ccustom"
              fill="#17CF97"
            ></path>
            <path
              d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
              className="ccustom"
              fill="#17CF97"
            ></path>
            <path
              d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
              className="ccustom"
              fill="#17CF97"
            ></path>
            <path
              d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
              className="ccustom"
              fill="#17CF97"
            ></path>
          </svg>
        </a>
        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li><a href="/home">Home</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
      <div className="about-us-container">
        <header className="header">
          <h1>Welcome to Sign Language Detection</h1>
          <p>by Samitha Shiwankara</p>
        </header>
        <section className="content">
          <div className="intro">
            <h2>Introduction</h2>
            <p>
              At Sign Language Detection, we are committed to advancing communication through technology. Our goal is to develop a state-of-the-art system that interprets sign language, making communication more accessible and efficient for everyone.
            </p>
          </div>
          <div className="mission">
            <h2>Mission Statement</h2>
            <p>
              Our mission is to harness the power of AI to bridge communication gaps for individuals who use sign language. By leveraging cutting-edge technology, we aim to create an intuitive and reliable tool that enhances understanding and interaction.
            </p>
          </div>
          <div className="about-me">
            <h2>About Samitha Shiwankara</h2>
            <p>
              I am Samitha Shiwankara, the creator of this sign language detection project. This initiative is my final project, driven by a passion for both technology and communication. I am dedicated to developing solutions that improve accessibility and inclusively.
            </p>
          </div>
          <div className="values">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Innovation:</strong> Constantly seeking new ways to improve communication technology.</li>
              <li><strong>Inclusivity:</strong> Ensuring our solutions are accessible to all users.</li>
              <li><strong>Accuracy:</strong> Striving for precision in sign language interpretation.</li>
            </ul>
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <p>
              We would love to hear from you! For inquiries, feedback, or collaboration opportunities, please reach out to:
            </p>
            <ul>
              <li><strong>Email:</strong>samithashiwankara46@gmail.com</li>
              
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
