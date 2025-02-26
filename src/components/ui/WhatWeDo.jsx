import React, { useState } from 'react';
import './OurMission.css';

const WhatWeDo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="pt-5">
      <div className="d-flex flex-column flex-lg-row w-100 w-lg-auto">
        <div className="frame d-flex flex-column col-lg-6">
          <h1 className="mt-3 mb-2 ms-5 ps-lg-5">WHAT WE DO</h1>
          <div className="box mb-5" />
          <div className="ps-lg-5">
            <p className="fw-bold fs-5 text-start ps-5 pb-3 pe-4 pe-md-0">
              &quot;Unleashing Innovation, Igniting Change:
              <br />
              Where Boundless Research Shapes a Limitless Future!&quot;
            </p>
          </div>
        </div>
        <div className="What-we-do-text">
          <div className="d-flex flex-row flex-lg-column ps-5 pe-4 pb-3 paragraph lh-lg paragraph-justified">
            <div className="text-container">
              <div
                className={`paragraph-content ${
                  isExpanded ? '' : 'text-truncated-mobile'
                }`}
              >
                We are driven by a profound commitment to catalyzing progress through pioneering
                research and innovation. Our focal point is a versatile approach aimed at advancing
                knowledge, fostering groundbreaking discoveries, and pushing the boundaries of
                possibility. Through strategic initiatives in research and development, technological
                innovation, and collaborative partnerships with leading institutions and experts, we
                endeavor to spearhead transformative changes in various fields. Our dedicated team is at
                the forefront of scientific exploration, working tirelessly to unlock new solutions,
                technologies, and methodologies that have the potential to reshape industries and
                improve the overall human experience. Join us in our relentless pursuit of knowledge, as
                we strive to create a world where innovation thrives and groundbreaking research propels
                us towards a brighter future.
              </div>
              {!isExpanded && (
                <span
                  id="see-more-what-we-do"
                  className="toggle-text-inline"
                  role="button"
                  tabIndex="0"
                  onClick={handleToggle}
                  onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
                >
                  ... View More
                </span>
              )}
            </div>
          </div>
          {isExpanded && (
            <div className="toggle-text-container">
              <span
                className="toggle-text"
                role="button"
                tabIndex="0"
                onClick={handleToggle}
                onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
              >
                View Less
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
