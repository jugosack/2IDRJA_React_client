import React from 'react';
import './OurMission.css';

const OurCoreBeliefs = () => (
  <>

    {/* 3rd row */}
    <div className="d-flex flex-md-row flex-sm-column  background-info py-5 w-100 w-lg-auto">
      <div className="frame mt-5">
        {/* problematic row */}
        <div className="d-flex flex-lg-row flex-md-column">
          {/* 1st col */}
          <div className="col-lg-6 col-sm-12 ">
            <h2 className="mt-3 my-4 ms-5">Our core beliefs</h2>

            <div className="box mb-4" />

            <p className="text-start fs-3 fw-bold  ms-5">PURPOSE</p>
            <div>
              <p className="text-start fs-4 ms-5 me-3">
                &quot;Meaningful work gives life purpose & connects you to something bigger than
                yourself.&quot;
              </p>
              <p className="text-start mb-2 ms-5">
                <small className="text-body-secondary">Germany Kent</small>
              </p>
            </div>
          </div>

          {/* 2nd col */}
          <div className="col-lg-6 col-sm-12">
            <div className=" flex-lg-column p-3 pe-5 paragraph lh-lg">
              <p className="ps-4 paragraph lh-lg pt-4 paragraph-justified">
                At the core of our organization lies a bold and unwavering mission: to pioneer
                transformative change through relentless innovation and purpose-driven research.
                We are on a quest to redefine possibilities, pushing the frontiers of knowledge
                to address complex challenges and shape a future marked by progress. Guided by a
                commitment to excellence, collaboration, and societal benefit, our mission is to
                be a catalyst for positive impact. We aspire to lead the way in pioneering
                breakthroughs, fostering a culture of curiosity, and driving meaningful
                advancements that resonate globally. Join us on this journey as we strive to
                make an indelible mark on the world, driven by a mission that transcends
                boundaries and inspires a legacy of innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
);

export default OurCoreBeliefs;
