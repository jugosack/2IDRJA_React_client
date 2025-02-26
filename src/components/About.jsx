import React from 'react';
import Navbar from './ui/Navbar';
import library from './images/Library.png';
import './About.css';
import Footer from './ui/Footer';

const About = () => (
  <div>
    <Navbar className="active text-white" />
    {/* title frame */}
    <div className="frame py-5 my-3">
      <h1 className="ps-5 mt-3 mb-3 py-2 aboutus">About us</h1>
      {/* <div className="lines">
          <div className="overlap-group">
            <div className="rectangle"></div>
            <div className="rectangle-2"></div>
          </div>
        </div> */}
    </div>
    {/* 1st row */}
    <div className="d-flex flex-lg-row flex-sm-column py-5 w-100 w-lg-auto justify-content-around">
      {/* left column */}
      <div className="d-flex flex-column col-lg-6 col-sm-12  pt-3">
        <p className="fw-bold fs-4 text-info ps-5">How we started</p>

        <h1 className="ps-5 mt-3 mb-3 about--title">
          Our Goal Is
          <br />
          {' '}
          Global Learning
          <br />
          Transformation
        </h1>
        <div>
          <p className="paragraph ps-5 pe-5 pt-5 paragraph-justified lh-lg">
            Welcome to 2IDRJA – Where Innovation Meets Expertise in Programming Education Since 2004!
            At 2IDRJA, we have been at the forefront of empowering aspiring developers and designers
            to unleash their full potential in the dynamic world of programming and web development. Established
            in 2021, our commitment to excellence has driven us to continually evolve and offer cutting-edge
            courses that reflect the latest industry trends.

            Our comprehensive programming curriculum encompasses a range of courses designed to equip you with
            the skills demanded by today&apos;s tech landscape. Dive into the fundamentals with our Front-End
            Development course, covering HTML, CSS, and JavaScript, laying the groundwork for your programming
            journey.

            Elevate your expertise further with our React.js course, exploring the intricacies of one of the most
            popular JavaScript libraries used in modern web development. For those passionate about crafting
            seamless user experiences, our UI/UX Design course provides a deep dive into the principles, processes,
            and tools essential for creating captivating digital interfaces.
          </p>

        </div>
      </div>
      {/* right column */}
      <div className="d-flex flex-column col-lg-6 col-sm-12  py-5 ">
        <img className="img-fluid library-image" src={library} alt="A Library" />
        <div className="boxes d-flex flex-column mx-3 rounded bg-gray-200 p-3 shadow-lg">
          <div className="inside--boxes d-flex flex-row justify-content-around">
            <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
              <h1>90+</h1>
              <p>Satisfied students</p>
            </div>
            <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
              <h1>4</h1>
              <p>Projects completed</p>
            </div>
          </div>
          <div className="inside--boxes d-flex flex-row justify-content-around">
            <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
              <h1>3+</h1>
              <p>years of experience</p>
            </div>
            <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
              <h1>6</h1>
              <p>Successful courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 2nd row */}
    <div>
      <p className="fs-5 ps-5 ms-4 pt-2 pb-3">Explore Our Showcase of Completed Projects:</p>
      <ul className="ps-5 ms-5">
        <li>
          <p className="paragraph ps-5 pe-5 pt-2">
            &quot;2IDRJA Pro&quot; - A Front-End Development Project: Students demonstrate their mastery
            of HTML, CSS, and JavaScript by crafting a responsive and visually engaging website.
          </p>
        </li>
        <li>
          <p className="paragraph ps-5 pe-5 pt-2">
            &quot;Asprovaltam &quot; - Website where you can book you holiday or summer days.
            Made with Html,React,Node,CSS,Bootstrap.
          </p>
        </li>
        <li>
          <p className="paragraph ps-5 pe-5 pt-2">
            &quot;FakeShop&quot; - In this shop you can find any clothes you want.
            Made with Html,React,Node,CSS,Bootstrap.
          </p>
        </li>
        <li>
          <p className="paragraph ps-5 pe-5 pt-2">
            &quot;InnoCode Academy&quot; - Education-Driven Project: This collaborative endeavor highlights
            the impact of effective programming education, demonstrating the transformative power
            of knowledge in shaping innovative solutions.
          </p>
        </li>
        <li>
          <p className="paragraph ps-5 pe-5 pt-5">
            At 2IDRJA, our mission is to foster a collaborative learning environment
            where passion meets expertise. Join us on this educational journey, where each course
            is a step toward realizing your programming aspirations. Enroll today, and let&apos;s code
            the future together!
          </p>
        </li>
        <p>💻 💡 #CodeWithPassion #ProgrammingExcellence</p>
      </ul>
      <p className="paragraph ps-5 pe-5 pt-5" />
    </div>
    <Footer />
  </div>
);

export default About;
