// bootstrap imposrts
import { Card, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Clock } from "react-bootstrap-icons";

// mui imports

// styles
import "../style/Home.css";
import "../style/global.css";

// components imports
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// our service imports
import star from "../assets/star.png";
import arrow from "../assets/arrow.png";
import arrowOrange from "../assets/arrowOrange.png";

// our work section imports
import bathroom from "../assets/bathroom.png";
import our1 from "../assets/our1.jpeg";
import our2 from "../assets/our2.jpeg";
import our3 from "../assets/our3.jpeg";
import our4 from "../assets/our4.jpeg";
import our5 from "../assets/our5.jpeg";
import our6 from "../assets/our6.jpeg";

// how work imports
import how1 from "../assets/how1.png";
import how2 from "../assets/how2.png";
import how3 from "../assets/how3.png";
import how4 from "../assets/how4.png";

// offers section imports
import layout from "../assets/window.jpeg";
import offer2 from "../assets/offer2.jpeg";
import offer3 from "../assets/offer3.jpeg";

// clients says section imports
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import says from "../assets/says.png";
// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
// services
const services = [
  {
    name: "Home Cleaning",
    className: "home-claening",
    rating: "4.8",
    link: "/homeCleaning",
  },
  {
    name: "Bathroom Cleaning",
    className: "bathroom-claening",
    rating: "4.8",
    link: "/bathroom",
  },
  {
    name: "Kitchen Cleaning",
    className: "kitchen-claening",
    rating: "4.8",
    link: "/kitchen",
  },
  {
    name: "Surface Cleaning",
    className: "surface-claening",
    rating: "4.8",
    link: "/surface",
  },
  {
    name: "Upholstery Cleaning",
    className: "Upholstery",
    rating: "4.8",
    link: "/upholstery",
  },
  {
    name: "Window Cleaning",
    className: "window-claening",
    rating: "4.8",
    link: "/window",
  },
  {
    name: "Room Layout and Furnishing",
    className: "roomLayout",
    rating: "4.8",
    link: "/layout",
  },
  {
    name: "Apartment Perfuming",
    className: "perfuming",
    rating: "4.8",
    link: "/perfuming",
  },
];

//client offers
const offers = [
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: layout, // Replace `layout` with the actual image import
  },

  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: offer2, // Duplicate for demo purposes
  },
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: offer3, // Duplicate for demo purposes
  },
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: bathroom, // Duplicate for demo purposes
  },
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: bathroom, // Duplicate for demo purposes
  },
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: bathroom, // Duplicate for demo purposes
  },
];
// end

// start clients
const clientTestimonials = [
  {
    name: "Alaa Ahmed",
    testimonial:
      "Exceptional service! The team was professional, thorough, and exceeded my expectations. Highly recommended!",
    rating: 4,
    image: c1,
  },
  {
    name: "Sarah Johnson",
    testimonial:
      "I’ve never seen our apartments this spotless. They pay attention to every detail and ensure everything is perfect.",
    rating: 5,
    image: c2,
  },
  {
    name: "Jacob Jones",
    testimonial:
      "Reliable and efficient. They made managing my properties so much easier with their excellent cleaning services.",
    rating: 5,
    image: c3,
  },
  {
    name: "Jacob Jones",
    testimonial:
      "Reliable and efficient. They made managing my properties so much easier with their excellent cleaning services.",
    rating: 5,
    image: c3,
  },
  {
    name: "Jacob Jones",
    testimonial:
      "Reliable and efficient. They made managing my properties so much easier with their excellent cleaning services.",
    rating: 5,
    image: c3,
  },
];
// end clients

const Home = () => (
  <>
    <Hero />
    {/* Our Service*/}
    <section className="container my-5">
      {/* our Services */}
      <div>
        <div className="text-center">
          <h1 className="text-dark p-3">our Services</h1>
          <p className="text-center fs-4 text-secondary pb-3">
            We provide comprehensive solutions tailored to meet your needs in
            hotels and furnished apartments. From professional cleaning to
            thorough sanitization, we ensure your spaces are pristine, safe, and
            welcoming. Our commitment is to deliver reliable, high-quality
            services that exceed expectations, allowing you to focus on what
            matters most. Let us take care of the details, so you can enjoy
            peace of mind.
          </p>
        </div>
      </div>
      {/* pics */}

      <div className="container col-12 ">
        {/* For small screens, display as grid */}
        <Swiper
          slidesPerView={1} // One slide per view by default for mobile (small screens)
          loop={true} // Enable looping
          spaceBetween={20} // Adjust the gap for mobile
          className="my-5 swiperHome d-lg-none gap-5"
          breakpoints={{
            1024: {
              slidesPerView: 8, // Desktop: 8 slides
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 4, // Tablet: 4 slides
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1, // Mobile: 1 slide per view
              spaceBetween: 20, // Adjust the gap for mobile
            },
          }}>
          {services.map((service, index) => (
            <SwiperSlide key={index} className="gap-5">
              {/* Link added here */}
              <Link to={service.link} className="text-decoration-none">
                <div
                  className={`ourServices rounded-3 position-relative d-flex flex-column ${service.className}`}
                  style={{ width: "100%" }} // Make the width 100% to take full container width
                >
                  <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
                    <img src={star} alt="star" /> <span>{service.rating}</span>
                  </div>
                  <h4 className="d-flex justify-content-center align-items-center mx-auto text-light mt-auto">
                    {service.name}
                  </h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* For large screens, display as grid */}
        <div className="gap-2 row justify-content-center align-items-center d-none d-lg-flex">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.className} ourServices d-flex rounded-3 position-relative col-12 col-sm-6 col-md-6 col-lg-3`}>
              {service.link ? (
                <Link to={service.link} className="text-decoration-none">
                  <div className="">
                    <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
                      <img src={star} alt="star" />
                      <span>{service.rating}</span>
                    </div>
                    <h4 className="d-flex justify-content-center align-items-center serviceName mx-auto text-light position-absolute bottom-0  ">
                      {service.name}
                    </h4>
                    <div>
                      <img src={arrow} alt="arrow" className="arrow-white" />
                      <img
                        src={arrowOrange}
                        alt="arrow"
                        className="arrowOrange"
                      />
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  className={`ourServices d-flex rounded-3 position-relative ${service.className}`}>
                  <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
                    <img src={star} alt="star" /> <span>{service.rating}</span>
                  </div>
                  <h4 className="d-flex justify-content-center align-items-center text-center mx-auto text-light mt-auto pb-4 serviceName">
                    {service.name}
                  </h4>
                  <div>
                    <img src={arrow} alt="arrow" className="arrow-white" />
                    <img
                      src={arrowOrange}
                      alt="arrow"
                      className="arrowOrange"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* end of section */}
    {/* Our Work*/}
    <section className="container py-5">
      <h2 className="text-center pb-3">Our Work</h2>
      <p className="text-center fs-5 pb-3 text-secondary">
        Explore some of our recent projects and see the quality of our work
        firsthand. Each image showcases the care and attention to detail that
        goes into every service we provide. We take pride in delivering results
        that not only meet but exceed expectations, ensuring every space we work
        on is treated with the utmost professionalism
      </p>
      <div className="container d-flex flex-wrap">
        <Col className="flex-column col-12 col-md-4 justify-content-center d-flex align-items-center">
          <img
            src={our1}
            alt="our1"
            width={350}
            height={300}
            className="rounded-3 my-2"
          />
          <img
            src={our2}
            alt="our2"
            width={350}
            height={380}
            className="rounded-3 my-2"
          />
        </Col>
        <Col className="flex-column col-12 col-md-4 justify-content-center d-flex align-items-center">
          <img
            src={our3}
            alt="our3"
            width={350}
            height={380}
            className="rounded-3 my-2"
          />
          <img
            src={our4}
            alt="our4"
            width={350}
            height={300}
            className="rounded-3 my-2"
          />
        </Col>
        <Col className="flex-column col-12 col-md-4 justify-content-center d-flex align-items-center">
          <img
            src={our5}
            alt="our5"
            width={350}
            height={300}
            className="rounded-3 my-2"
          />
          <img
            src={our6}
            alt="our6"
            width={350}
            height={380}
            className="rounded-3 my-2"
          />
        </Col>
      </div>
    </section>
    {/* how it works */}
    <div className="my-5 d-lg-block h-75">
      <div className="howWorks px-1 py-5">
        <h2 className="text-light text-center pt-5">How it Works</h2>
        <h5 className="text-light text-center pt-5 container">
          "Discover how our service works in four simple steps: choose your
          service, set your schedule, confirm your booking, and enjoy a
          professional hotel-like experience
        </h5>
        <div className="d-flex howWorkScroll container mt-5 ">
          <img src={how1} alt="how1" className="h-25" />
          <img src={how2} alt="how2" className="h-25" />
          <img src={how3} alt="how3" className="h-25" />
          <img src={how4} alt="how4" className="h-25" />
        </div>
      </div>
    </div>

    {/* end of section */}
    {/* Our offers*/}
    {/* end of section */}
    <section className="container p-5">
      <div>
        <h3 className="text-center">
          Our exclusive offers for hotel services and furnished apartments
        </h3>
      </div>
      <Swiper
        slidesPerView={1} // Default: Single card
        loop={true} // Enable infinite looping
        spaceBetween={30} // Default space between slides
        className="my-5 swiperHome"
        breakpoints={{
          1024: {
            slidesPerView: 3, // Large screens: 3 cards
            spaceBetween: 30,
          },
        }}>
        {offers.map((offer, index) => (
          <SwiperSlide
            key={index}
            className="d-flex justify-content-center align-items-center">
            <Card
              className="border-0 position-relative"
              style={{
                width: "18rem",
                background: "#FCFCFC",
              }}>
              <div
                className="position-absolute top-0 end-0 text-white p-1 rounded-2"
                style={{ backgroundColor: "#F7712E" }}>
                Offer 10%
              </div>
              <Card.Img variant="top" src={offer.image} height={200} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="offer-text">
                  <Clock className="me-1" /> {offer.validUntil}
                </Card.Text>
                <div className="d-flex justify-content-center mt-3">
                  <Link to="booking" className="text-decoration-none">
                    <button
                      type="submit"
                      className="p-2 borderOrange bg-white rounded px-5 d-flex justify-content-center align-items-center w-100 bookNow">
                      Book now
                    </button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    {/* end of section */}
    {/* Client */}
    <section className="my-5 ms-3 me-4 pt-5">
      <h4 className="text-center">What Our Client Say’s</h4>
      <div className="container">
        <Swiper
          slidesPerView={1} // Default: Single card
          loop={true} // Enable infinite looping
          spaceBetween={30} // Default space between slides
          className="my-5 swiperHome"
          breakpoints={{
            1024: {
              slidesPerView: 3, // Large screens: 3 cards
              spaceBetween: 80,
            },
          }}>
          {clientTestimonials.map((client, index) => (
            <SwiperSlide
              key={index}
              className={`${client.name
                .toLowerCase()
                .replace(" ", "")} position-relative`}
              style={{ minWidth: 350 }}>
              <div className="position-absolute ms-3 mx-auto">
                <img src={says} alt="says" width={50} />
              </div>
              <div className="client px-4 p-1 rounded-3 my-3">
                <p className="mt-5 pb-3">{client.testimonial}</p>
                <hr className="mx-auto" />
                <div className="d-flex align-items-center">
                  <img
                    src={client.image}
                    alt={`Client ${index + 1}`}
                    className="rounded-5 me-3"
                    width={30}
                  />
                  <div>
                    <h6 className="mb-1">{client.name}</h6>
                    <span className="text-warning">
                      {"★".repeat(client.rating)}
                      {"☆".repeat(5 - client.rating)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex justify-content-center mt-5 w-100">
          <Link to="customerReviews" className="mx-auto">
            <button
              className="text-dark fs-4 px-5 rounded-3 bg-transparent borderOrange bookNow "
              style={{ width: 250 }}>
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
    {/* end of section */}
    {/* footer */}
    <Footer />
  </>
);

export default Home;
