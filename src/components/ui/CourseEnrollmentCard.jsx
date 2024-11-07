import React from 'react';
import PropTypes from 'prop-types';

import './CourseEnrollmentCard.css';

const CourseEnrollmentCard = ({
  image, title, duration, price, places,
}) => (
  <>
    <>
      <div className="enrollment-card d-flex justify-content-center align-items-cente m-3">
        <div className="card-background">
          <img className="card-wallpaper rounded-top" src={image} alt="" />
          <div className="card-body justify-content-center align-items-center pt-4">
            <h6 className="card-title text-center text-secondary fs-3 fw-bold pb-4">
              {title}
            </h6>
            <p className="card-text text-dark text-center p-2">{duration}</p>
            <p className="card-text text-dark fs-3 fw-bold text-center p-2">{price}</p>
            <p className="card-text text-dark text-center pb-3">{places}</p>
            <div className="pt-5 d-flex justify-content-center align-items-center w-100">
              <button type="button" className="btn text-dark btn-custom w-75">
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  </>
);

CourseEnrollmentCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
};

export default CourseEnrollmentCard;
