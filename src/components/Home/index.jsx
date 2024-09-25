import { Component } from "react";
import "./NavbarStyles.css";
import image from '../../Assets/img-8.jpg'; // Ensure this path is correct
import dataIcon from '../../Assets/img-2.webp'; // Example path for icons
import gestureIcon from '../../Assets/img-4.webp';
import featureIcon from '../../Assets/img-8.jpg';
import translateIcon from '../../Assets/img-10.png';

class Home extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
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
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li><a href="/home">Home</a></li>
              <li><a href="/service">Service</a></li>
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>


        {/* Additional Description */}
        <div className="additional-description">
          {/* <h2>Sign Language Recognition: Bridging Communication Gaps with Advanced Technology</h2> */}
          <div className="image-container">
            <img src={image} className="sign-language-image" alt="Sign Language" />
          </div>
          <p><strong>What is Sign Language Recognition?</strong></p>
          <p>Sign Language Recognition (SLR) is an advanced technology designed to translate sign language gestures into readable text or spoken language, facilitating communication between sign language users and those who do not understand it. Leveraging sophisticated machine learning algorithms, computer vision, and natural language processing, SLR systems offer real-time interpretation and seamless interaction.</p>

          {/* Cards for How It Works */}
          <div className="card-container">
            <div className="card">
              <img src={dataIcon} alt="Data Collection" />
              <h3>Data Collection</h3>
              <p>Collects extensive datasets of gestures to train the model effectively.</p>
            </div>
            <div className="card">
              <img src={gestureIcon} alt="Gesture Detection" />
              <h3>Gesture Detection</h3>
              <p>Uses computer vision to track hand movements and positions accurately.</p>
            </div>
            <div className="card">
              <img src={featureIcon} alt="Feature Extraction" />
              <h3>Feature Extraction</h3>
              <p>Extracts key features like joint positions and hand contours for classification.</p>
            </div>
            <div className="card">
              <img src={translateIcon} alt="Translation" />
              <h3>Translation</h3>
              <p>Translates recognized gestures into text or speech for real-time communication.</p>
            </div>
          </div>

          <p><strong>Applications and Benefits</strong></p>
          <ul>
            <li><strong>Enhanced Accessibility:</strong> SLR systems bridge communication gaps for individuals who are deaf or hard of hearing, enabling them to interact more easily with the hearing community.</li>
            <li><strong>Real-time Communication:</strong> Advanced SLR applications facilitate instant translation, making it easier to engage in conversations and access information without delays.</li>
            <li><strong>Integration in Various Platforms:</strong> SLR technology can be integrated into a range of applications, from mobile apps and websites to virtual assistants and customer service platforms, making communication more inclusive.</li>
            <li><strong>Educational and Support Tools:</strong> SLR provides valuable resources for learning sign language and improving literacy, offering interactive tools and real-time feedback for learners.</li>
          </ul>

          <p><strong>Future Prospects</strong></p>
          <p>The field of Sign Language Recognition is rapidly evolving, with ongoing research focused on improving accuracy, reducing latency, and expanding language coverage. Innovations in deep learning, sensor technology, and user interface design promise to enhance the capabilities of SLR systems, paving the way for more inclusive and accessible communication solutions.</p>
        </div>
      </>
    );
  }
}

export default Home;