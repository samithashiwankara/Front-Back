import React, { useState } from 'react';
import './ServicePage.css'; // Import your CSS file

const ServicePage = () => {
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
                        <li><a href="#r">Service</a></li>
                        <li><a href="/aboutUs">About Us</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            <div className="service-page">
                <header className="service-header">
                    <h1>Sign Language Detection Service</h1>
                </header>

                <section className="service-overview">
                    <h2>Overview</h2>
                    <p>
                        Our advanced sign language detection service empowers seamless communication between hearing-impaired individuals and the rest of the world. Utilizing cutting-edge AI and machine learning technology, we ensure accurate and real-time interpretation of sign language, bridging the gap and enhancing inclusivity.
                    </p>
                </section>

                <section className="service-technology">
                    <h2>Technology Used</h2>
                    <p>
                        We leverage leading technologies such as MediaPipe for hand tracking and gesture recognition, TensorFlow for powerful machine learning models, and OpenCV for real-time image processing. These tools work together to deliver a robust and reliable sign language detection system that adapts to various environments and lighting conditions.
                    </p>
                </section>

                <section className="service-features">
                    <h2>Features</h2>
                    <div className="feature-list">
                        <div className="feature-item">
                            <i className="fas fa-clock"></i>
                            <h3>Real-time Recognition</h3>
                            <p>Experience instantaneous feedback as signs are performed, ensuring smooth communication without delays.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-bullseye"></i>
                            <h3>High Accuracy</h3>
                            <p>Benefit from precise and reliable sign interpretation, minimizing errors and enhancing communication quality.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-globe"></i>
                            <h3>Multi-Language Support</h3>
                            <p>Access a range of sign languages, making our service versatile and inclusive for different linguistic needs.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-plug"></i>
                            <h3>Platform Integration</h3>
                            <p>Seamlessly integrate our service into various platforms, from educational tools to public information systems.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-adjust"></i>
                            <h3>Adaptive Performance</h3>
                            <p>Enjoy consistent performance across different lighting conditions and environments, ensuring reliable use.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-cog"></i>
                            <h3>User-friendly Interface</h3>
                            <p>Navigate the system with ease using a clear and intuitive interface, designed for users of all skill levels.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-cogs"></i>
                            <h3>Customizable Settings</h3>
                            <p>Adjust settings to fit your needs, including recognition parameters and integration options.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-sync-alt"></i>
                            <h3>Continuous Updates and Improvements</h3>
                            <p>Stay up-to-date with regular updates and enhancements that reflect the latest technological advancements.</p>
                        </div>
                    </div>
                </section>

                <section className="service-use-cases">
                    <h2>Use Cases</h2>
                    <p>
                        Our sign language detection service can be applied in educational tools, communication aids, and accessibility solutions for public spaces. Enhance learning for students with hearing impairments, improve communication in workplaces, and make digital content accessible to everyone.
                    </p>
                </section>

                <section className="service-customization">
                    <h2>Customization</h2>
                    <p>
                        We offer tailored solutions to meet your unique needs. Whether you need to support a specific sign language or integrate with specialized hardware, our service can be customized to fit your requirements.
                    </p>
                </section>

                <section className="service-support">
                    <h2>Support and Maintenance</h2>
                    <p>
                        We offer comprehensive support, including regular updates to improve detection accuracy and compatibility with new technologies. Our dedicated customer service team is available 24/7 to address any issues or queries.
                    </p>
                </section>
            </div>
        </>
    );
}

export default ServicePage;
