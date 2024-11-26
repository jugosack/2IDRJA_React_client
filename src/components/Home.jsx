/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import OurMisiion from './ui/OurMission';
import Testimonials from './ui/Testimonials';
import Footer from './ui/Footer';
import CourseCard from './ui/CourseCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CustomNextArrow({ className, style, onClick }) {
  return (
    <button
      type="button"
      className={`${className} custom-arrow`}
      style={{
        ...style,
        borderRadius: '50%',
        width: '14px',
        height: '14px',
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        right: '7px',
        zIndex: 1,
        border: 'none',
      }}
      onClick={onClick}
      aria-label="Next slide"
    />
  );
}

CustomNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}), // Use shape or exact for stricter validation
  onClick: PropTypes.func,
};

CustomNextArrow.defaultProps = {
  className: '',
  style: { backgroundColor: 'black' },
  onClick: undefined,
};

function CustomPrevArrow({ className, style, onClick }) {
  return (
    <button
      type="button"
      className={`${className} custom-arrow`}
      style={{
        ...style,
        left: '7px',
        zIndex: 1,
        border: 'none',
      }}
      onClick={onClick}
      aria-label="Previous slide"
    />
  );
}

CustomPrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}), // Use shape or exact for stricter validation
  onClick: PropTypes.func,
};

CustomPrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: undefined,
};

function Home() {
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
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
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
    <>
      <div className="background w-100">
        <Navbar />
        <Hero />
      </div>
      <div className="d-flex flex-column">
        <OurMisiion />
      </div>

      <div className="course-list-container p-5">
        <div className="course-list-wrapper">
          <CourseCard
            image="/images/html-wallpaper.jpg"
            title="HTML Course"
            duration="01 January - 01 February"
            discount="120$"
            price="75$"
            places="2 places left"
          />
        </div>
        <div className="course-list-wrapper">
          <CourseCard
            image="./images/html-css-js-wallpapers.jpg"
            title="Frontend course"
            duration="01 March - 15 April"
            discount="150$"
            price="99$"
            places="7 places left"
          />
        </div>
        <div className="course-list-wrapper">
          <CourseCard
            image="./images/c-wallpaper.webp"
            title="C#"
            duration="01 September - 31 October"
            discount="200$"
            price="150$"
            places="7 places left"
          />
        </div>
      </div>

      <div className="slider-container my-4">
        {/*eslint-disable*/}
        <Slider {...settings}>
          {/* eslint-enable */}
          <div className="card">
            <div className="carouselKarticka">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt=""
                className="rounded-circle shadow-1-strong"
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

          <div className="card">
            <div className="carouselKarticka">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                alt=""
                className="rounded-circle shadow-1-strong"
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

          <div className="card">
            <div className="carouselKarticka">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                alt=""
                className="rounded-circle shadow-1-strong"
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

          <div className="card">
            <div className="carouselKarticka">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                alt=""
                className="rounded-circle shadow-1-strong"
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

          <div className="card">
            <div className="carouselKarticka">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                alt=""
                className="rounded-circle shadow-1-strong"
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

      <div className="d-flex flex-column">
        <Testimonials />
      </div>

      <div>
        <Footer />
        {/* <Footer2 /> */}
      </div>
    </>
  );
}

export default Home;
