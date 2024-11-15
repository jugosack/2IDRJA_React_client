import React from 'react';
import { Link } from 'react-router-dom';
import projectimg from '../images/AsprovaltaM.png';
import projectimg2 from '../images/programming courses.png';
import './Project.css';

const Project = () => (
  <div className="d-flex flex-column w-100 py-3">
    {/* 1st row */}
    <div className="d-flex flex-column flex-lg-row h-75 ps-lg-5 w-100 w-lg-auto">
      <div className="frame d-flex flex-column col-lg-6 p-3">
        <h1 className="mt-3 mb-3 ms-5">Asprovalta M</h1>
        {/* <---------------------lines---------------------> */}
        {/* <div className="box mb-4">
            <div className="lines">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="rectangle-2" />
              </div>
            </div>
          </div> */}
        {/* <---------------------lines---------------------> */}

        <h3 className="mb-1 mx-5">Appartment booking website</h3>
        <p className="pt-3 mx-3 ">
          This is our first web programming project, it is a fully functional
          platform for booking apartments in Asprovalta.
          <br />
          <br />
          The website was built using React, Bootstrap and Ruby on Rails to create a seamless,
          user-friendly experience. It features a responsive front end design to adapt to any
          screen size including mobile.
          <br />
          <br />
          Visitors are able to create accounts, while signing up
          they will receive an e-mail to verify their e-mail address, then they can log in,
          search for available bookings based on specific dates and months.
          We have integrated a secure booking and payment system, allowing users to conveniently
          reserve and pay for their chosen apartments.
          <br />
          <br />
          This project reflects our commitment to delivering functional, real-world
          applications and demonstrates our growing expertise in web development.
          Our team has worked diligently to ensure the platform offers the best possible
          user experience.
        </p>
        <div className="parent-container d-flex flex-column justify-content-end" style={{ height: '100%' }}>
          <div className="button-container">
            <div>
              <Link
                to="/coursesreact"
                className="btn custom-btn px-3 m-1 ms-3"
              >
                React
              </Link>
              <Link
                to="/coursesfrontend"
                className="btn custom-btn px-3 m-1"
              >
                CSS
              </Link>
            </div>
            <div>
              <Link
                to="/coursesfrontend"
                className="btn custom-btn px-3 m-1"
              >
                Bootstrap
              </Link>
              <Link
                to="/coursesuiux"
                className="btn custom-btn px-3 m-1"
              >
                UI
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-6 col-md-12 col-lg-6 p-4 image-container">
        <div className="scroll-container">
          <div className="scroll-image">
            <img className="img-fluid" src={projectimg} alt="Project" />
            <img className="img-fluid" src={projectimg} alt="Project" />
          </div>
        </div>
      </div>
    </div>
    <div className="divider-xs" />
    {/* 2nd row */}
    <div className="d-flex flex-column flex-lg-row w-100 py-lg-4">
      <div className="col-12 col-lg-6 p-4 order-lg-1 order-2 image-container">
        <div className="scroll-container">
          <div className="scroll-image">
            <img className="img-fluid unselectable" src={projectimg2} alt="Project" />
            <img className="img-fluid unselectable" src={projectimg2} alt="Project" />
          </div>
        </div>
      </div>

      <div className="frame d-flex flex-column col-12 col-lg-6 order-lg-2 order-1 no-padding-onSmall">
        <h1 className="mt-2 mb-3 ms-3 ms-lg-5 pe-3 pe-lg-5">Inovation & Research</h1>
        <h3 className="mb-2 ms-3 ms-lg-5 pe-3 pe-lg-5">Programming courses platform</h3>
        <p className="d-flex flex-row pt-4 px-3">
          Our project is built on a commitment to empowering future developers through accessible,
          high-quality programming courses. Created in collaboration with a team of dedicated students as
          part of their learning journey.
          <br />
          <br />
          This web page offers an array of courses tailored to beginners and seasoned programmers,
          covering essential languages and frameworks such as
          React, JavaScript, Bootstrap and C#.
          <br />
          <br />
          With each course, students engage in practical exercises and interactive lessons,
          designed to deepen understanding and spark curiosity in the vast world of web development.
          <br />
          <br />
          We believe in the transformative power of technology and the importance of equipping
          learners with the tools to thrive in a tech-driven world.
        </p>
        <div className="parent-container d-flex flex-column justify-content-end" style={{ height: '100%' }}>
          <div className="button-container pb-3">
            <div>
              <Link
                to="/coursesreact"
                className="btn custom-btn px-3 m-1 ms-3"
              >
                React
              </Link>
              <Link
                to="/coursesfrontend"
                className="btn custom-btn px-3 m-1"
              >
                Java Script
              </Link>
            </div>
            <div>
              <Link
                to="/coursesfrontend"
                className="btn custom-btn px-3 m-1"
              >
                CSS
              </Link>
              <Link
                to="/coursesuiux"
                className="btn custom-btn px-3 m-1"
              >
                UI
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Project;
