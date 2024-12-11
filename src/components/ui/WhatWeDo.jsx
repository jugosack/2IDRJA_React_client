import React from 'react';
import './OurMission.css';

const WhatWeDo = () => (
  <>
    <div className=" pt-5">
      {/* 1st row */}
      <div className="d-flex flex-column flex-lg-row w-100 w-lg-auto">
        <div className="frame d-flex flex-column col-lg-6">
          {/* header */}
          <h1 className="mt-3 mb-2 ms-5 ps-lg-5">WHAT WE DO</h1>
          {/*  line */}

          <div className="box mb-5">
            {/* <---------------------lines---------------------> */}
            {/* <div className="lines">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                </div>
              </div> */}
            {/* <---------------------lines---------------------> */}
          </div>
          <div className="ps-lg-5">
            <p className="fw-bold fs-5 text-start ps-5 pb-5 pe-3 pe-md-0">
              &quot;Unleashing Innovation, Igniting Change: Where
              <br />
              Boundless Research Shapes a Limitless Future!&quot;
            </p>
          </div>
        </div>

        {/* text */}
        {/* <div className="d-flex flex-row flex-lg-column col-lg-6 w-100"> */}
        <div className="d-flex flex-row flex-lg-column col-lg-6 ps-5 pe-5 paragraph lh-lg pb-5 paragraph-justified">
          We are driven by a profound commitment to catalyzing progress through pioneering
          research and innovation.Our focal point is a versatile approach aimed at advancing
          knowledge, fostering groundbreaking discoveries, and pushing the boundaries of
          possibility. Through strategic initiatives in research and development, technological
          innovation, and collaborative partnerships with leading institutions and experts, we
          endeavor to spearhead transformative changes in various fields.Our dedicated team is at
          the forefront of scientific exploration, working tirelessly to unlock new solutions,
          technologies, and methodologies that have the potential to reshape industries and
          improve the overall human experience.Join us in our relentless pursuit of knowledge, as
          we strive to create a world where innovation thrives and groundbreaking research propels
          us towards a brighter
        </div>
        {/* </div> */}
      </div>
    </div>
  </>
);

export default WhatWeDo;
