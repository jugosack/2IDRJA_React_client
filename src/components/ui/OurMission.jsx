import React from 'react';
import './OurMission.css';
import projectimg from '../images/passion.png';

const OurMisiion = () => (
  <>

    {/* 2nd row */}
    <div className="d-flex flex-column flex-lg-row h-75 ps-lg-5 w-100 w-lg-auto">
      <div className="d-flex flex-column col-lg-6 p-3">
        <h2 className="ps-5">Our mission</h2>
        <hr />
        <p className="ps-3  paragraph lh-lg pe-3 paragraph-justified">
          At the core of our organization lies a bold and unwavering mission: to pioneer
          transformative change through relentless innovation and purpose-driven research. We
          are on a quest to redefine possibilities, pushing the frontiers of knowledge to
          address complex challenges and shape a future marked by progress.
          <br />
          <br />
          Guided by a commitment to excellence, collaboration, and societal benefit, our mission
          is to be a catalyst for positive impact. We aspire to lead the way in pioneering
          breakthroughs, fostering a culture of curiosity, and driving meaningful advancements
          that resonate globally.
          {' '}
          <br />
          <br />
          Join us on this journey as we strive to make an indelible mark on the world, driven by
          a mission that transcends boundaries and inspires a legacy of innovation.
        </p>
      </div>
      <div className="d-flex flex-row flex-lg-col col-lg-6 p-3 pe-5 ">
        <img className="img-fluid" src={projectimg} alt="us" />
      </div>
    </div>

  </>
);

export default OurMisiion;
