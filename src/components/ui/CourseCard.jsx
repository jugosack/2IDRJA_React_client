import React from 'react';
import PropTypes from 'prop-types';
import './CourseCard.css';

const CourseCard = ({
  image, title, duration, discount, price, places,
}) => (
  <>
    <div className="c-card d-flex flex-column justify-content-center align-items-center m-3 shadow-lg rounded">
      <img
        className="d-flex image-fluid rounded-top course-image shadow-lg"
        src={image}
        alt="course"
      />
      <div className="d-flex flex-row p-3 mt-3 rounded justify-content-center align-items-center w-100">
        <p className="cource-paragraph fs-2">{title}</p>
      </div>
      <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
        <p className="cource-paragraph-date m-0">{duration}</p>
      </div>
      <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
        <p className="fs-2 text-secondary fw-bold me-4">
          <s>{discount}</s>
        </p>
        <p className="fs-2 text-dark fw-bold">{price}</p>
      </div>
      <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
        <p className="places-left fs-4 text-danger">{places}</p>
      </div>

      <div className="d-flex flex-row px-5 pb-4 pt-3 mb-3 rounded w-100">
        <button type="button" className="btn text-dark btn-custom w-100">
          Enroll now
        </button>
      </div>
    </div>
  </>
);

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
};

export default CourseCard;
