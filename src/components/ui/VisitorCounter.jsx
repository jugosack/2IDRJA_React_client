import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  // Intersection Observer for triggering the CountUp animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.5, // Start the animation when 50% of the section is visible
  });

  useEffect(() => {
    const currentCount = localStorage.getItem('visitCount');
    if (currentCount) {
      const newCount = parseInt(currentCount, 10) + 1;
      setVisitCount(newCount);
      localStorage.setItem('visitCount', newCount);
    } else {
      setVisitCount(1);
      localStorage.setItem('visitCount', 1);
    }
  }, []);

  return (
    <section
      ref={ref}
      className="CounterSection p-3 d-flex justify-content-center align-items-center"
    >
      <div className="row text-center w-100">
        <div className="col-12 col-xl-4 col-md-3">
          <div className="text-box">
            <p className="visits">
              This page was visited
              <br />
              {inView ? <CountUp end={visitCount} duration={5} /> : 0}
              &nbsp;times
            </p>
          </div>
        </div>

        <div className="col-12 col-xl-4 col-md-3">
          <div className="text-box">
            <p className="visits">
              Courses
              <br />
              {inView ? <CountUp end={5} duration={9} /> : 0}
            </p>
          </div>
        </div>

        <div className="col-12 col-xl-4 col-md-3">
          <div className="text-box">
            <p className="visits">
              Students
              <br />
              {inView ? <CountUp end={1230} duration={5} /> : 0}
              +
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
