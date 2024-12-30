// bootstrap imposrts
import { Card, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Clock } from "react-bootstrap-icons";
import Fixed from "../components/FixedButtons";

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

// our work section imports
import bathroom from "../assets/bathroom.png";
import our1 from "../assets/our1.jpeg";
import our2 from "../assets/our2.jpeg";
import our3 from "../assets/our3.jpeg";
import our4 from "../assets/our4.jpeg";
import our5 from "../assets/our5.jpeg";
import our6 from "../assets/our6.jpeg";

// how it works imports
import howWorks from "../assets/how works.png";

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
  },
  {
    name: "Bathroom Cleaning",
    className: "bathroom-claening",
    rating: "4.8",
  },
  {
    name: "Kitchen Cleaning",
    className: "kitchen-claening",
    rating: "4.8",
  },
  {
    name: "Surface Cleaning",
    className: "surface-claening",
    rating: "4.8",
  },
  {
    name: "Window Cleaning",
    className: "window-claening",
    rating: "4.8",
  },
  {
    name: "Upholstery Cleaning",
    className: "Upholstery",
    rating: "4.8",
  },
  {
    name: "Room Layout and Furnishing",
    className: "roomLayout",
    rating: "4.8",
  },
  {
    name: "Apartment Perfuming",
    className: "perfuming",
    rating: "4.8",
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
        {/* pics */}

        <div className="container col-12 ">
          {/* For small screens, display as grid */}
          <Swiper
            slidesPerView={3} // Default slides per view (adjust this as needed)
            loop={true} // Enable looping
            spaceBetween={50} // Default space between slides
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
                <div
                  className={`ourServices rounded-3 position-relative d-flex flex-column ${service.className}`}
                  style={{ width: "18rem" }} // Similar to the Card layout
                >
                  <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
                    <img src={star} alt="star" /> <span>{service.rating}</span>
                  </div>
                  <h4 className="d-flex justify-content-center align-items-center mx-auto text-light mt-auto ">
                    {service.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* For large screens, display as grid */}
          <div className="gap-2 row justify-content-center align-items-center d-none d-lg-flex">
            {services.map((service, index) => (
              <div
                key={index}
                className={`ourServices d-flex rounded-3 position-relative col-sm-6 col-md-6 col-lg-3 ${service.className}`}>
                <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
                  <img src={star} alt="star" /> <span>{service.rating}</span>
                </div>
                <h4 className="d-flex justify-content-center align-items-center mx-auto text-light mt-auto pb-4">
                  {service.name}
                </h4>
              </div>
            ))}
          </div>
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
    <div className="howWorks px-1 py-5">
      <img src={howWorks} alt="howWorks" className="w-100" />
    </div>

    {/* end of section */}
    {/* Our offers*/}
    {/* end of section */}
    <section className="container">
      <div>
        <h3 className="text-center">
          Our exclusive offers for hotel services and furnished apartments
        </h3>
      </div>
      <Swiper
        slidesPerView={3} // Default slides per view
        loop={true} // Enable looping
        spaceBetween={50} // Default space between slides
        className="my-5 swiperHome"
        breakpoints={{
          1024: {
            slidesPerView: 3, // Desktop: 3 slides
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2, // Tablet: 2 slides
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 1, // Mobile: 1 slide
            spaceBetween: 50,
          },
        }}>
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <Card
              className="border-0 position-relative"
              style={{ width: "18rem", margin: "auto" }}>
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
    <section className="my-5 ms-3 me-4">
      <h3 className="text-center">What Our Client Say’s</h3>
      <div>
        <Swiper
          slidesPerView={3} // Default slides per view for wide screens
          loop={true} // Enable looping
          spaceBetween={30} // Default space between slides
          className="my-5 swiperHome container"
          breakpoints={{
            1024: {
              slidesPerView: 2, // Wide screens: 2 slides
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1, // Small screens: 1 slide
              spaceBetween: 20,
            },
          }}>
          {clientTestimonials.map((client, index) => (
            <SwiperSlide
              key={index}
              className={`${client.name
                .toLowerCase()
                .replace(" ", "")} position-relative`}>
              <div className="position-absolute ms-3">
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
          <Link to="customerReviews" className=" mx-auto">
            <button className="text-dark fs-4 px-5 rounded-3 mx-auto bg-transparent borderOrange bookNow">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
    {/* end of section */}
    <Fixed />
    {/* footer */}
    <Footer />
  </>
);

export default Home;
