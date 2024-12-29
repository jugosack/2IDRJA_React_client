import './TestimoniesCarousel.css';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ArrowSVGL } from '../icons/small-arrow-prev-small-svgrepo-com.svg';
import { ReactComponent as ArrowSVGR } from '../icons/small-arrow-next-small-svgrepo-com.svg';

const TestimoniesCarousel = () => {
  // Custom Next Arrow
  const CustomNextArrow = ({ className, onClick }) => (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <ArrowSVGR className="svgCarouselArrow" />

      {/* <img
        className="svgCarouselArrow"
        src="/images/BoldBg-arrow-circle-right-svgrepo-com.svg"
        alt="Next"
      /> */}
    </div>
  );

  CustomNextArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  CustomNextArrow.defaultProps = {
    className: '',
  };

  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        borderRadius: '50%',
        width: '14px',
        height: '14px',
        // display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        // right: '-20px',
        zIndex: 1,
        border: 'none',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <ArrowSVGL className="svgCarouselArrow" />

      {/* <img
        src="/images/BoldBg-arrow-circle-left-svgrepo-com.svg"
        alt="Previous"
      /> */}
    </div>
  );

  // PropTypes validation
  SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({}),
    onClick: PropTypes.func.isRequired,
  };

  SamplePrevArrow.defaultProps = {
    className: '',
    style: { backgroundColor: 'black' },
  };

  const settings = {
    dots: true,
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1395,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="SectionT p-3">
      {/* bg-primary bg-opacity-10 */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="d-flex justify-content-center mt-2 mb-4">Testimonials</h3>
          <p className="mb-3 pb-2 mb-md-4 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
            iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
            porro a pariatur veniam.
          </p>
        </div>
      </div>
      <div className="slider-container">
        {/*eslint-disable*/}
          <Slider {...settings}>
            {/* eslint-enable */}
            <div className="card shadow">
              <div className="carouselKarticka">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt=""
                  className="rounded-circle shadow-1-strong mt-3 "
                  width="150"
                  height="150"
                />
                <div className="card-body">
                  <h5 className="mb-3">Maria Smantha</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur
                    quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="carouselKarticka">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  alt=""
                  className="rounded-circle shadow-1-strong mt-3"
                  width="150"
                  height="150"
                />
                <div className="card-body">
                  <h5 className="mb-3">Lisa Cudrow</h5>
                  <h6 className="text-primary mb-3">Graphic Designer</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur
                    quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="carouselKarticka">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  alt=""
                  className="rounded-circle shadow-1-strong mt-3"
                  width="150"
                  height="150"
                />
                <div className="card-body">
                  <h5 className="mb-3">John Smith</h5>
                  <h6 className="text-primary mb-3">Marketing Specialist</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur
                    quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="carouselKarticka">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  alt=""
                  className="rounded-circle shadow-1-strong mt-3"
                  width="150"
                  height="150"
                />
                <div className="card-body">
                  <h5 className="mb-3">Jessica Storm</h5>
                  <h6 className="text-primary mb-3">Web app enthusiast</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur
                    quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="carouselKarticka">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                  alt=""
                  className="rounded-circle shadow-1-strong mt-3"
                  width="150"
                  height="150"
                />
                <div className="card-body">
                  <h5 className="mb-3">Bonnie West</h5>
                  <h6 className="text-primary mb-3">E-commerce Connoisseur</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur
                    quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
              </div>
            </div>

          </Slider>
      </div>
    </section>
  );
};

export default TestimoniesCarousel;
