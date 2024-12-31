import React from "react";
// Client testimonials imports
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
// Testimonials Data
const clientTestimonials = [
  {
    name: "Alaa Ahmed",
    date: "12/10/2024",
    testimonial:
      "Exceptional service! The team was professional, thorough, and exceeded my expectations. Highly recommended!",
    rating: 4,
    image: c1,
    service: "Kitchen and Bathroom Cleaning",
  },
  {
    name: "Sarah Johnson",
    date: "12/10/2024",
    testimonial:
      "I’ve never seen our apartments this spotless. They pay attention to every detail and ensure everything is perfect.",
    rating: 5,
    image: c2,
    service: "Kitchen and Bathroom Cleaning",
  },
  {
    name: "Jacob Jones",
    date: "12/10/2024",
    testimonial:
      "Reliable and efficient. They made managing my properties so much easier with their excellent cleaning services.",
    rating: 5,
    image: c3,
    service: "Kitchen and Bathroom Cleaning",
  },
];

// Apartment Images Data

const ThirdReview: React.FC = () => {
  return (
    <>
      <section className="container">
        {clientTestimonials.map((client, index) => (
          <div
            key={index}
            className="client-review px-4 p-1 borderOrange rounded-2 my-3 pt-3 d-flex flex-column">
            <div className="d-flex align-items-center">
              <img
                src={client.image}
                alt={`Client ${index + 1}`}
                className="rounded-5 me-3"
                width={30}
              />
              <div>
                <h6 className="mb-1">{client.name}</h6>
              </div>
              <div className="ms-auto">
                <h6 className="text-secondary">{client.date}</h6>
              </div>
            </div>
            <div className="d-flex">
              <h6 className="mt-3 pb-3">
                <span className="colorPrimary">Service : </span>
                {client.service}
              </h6>
              <span className="text-warning mx-3 mt-2 fs-4">
                {"★".repeat(client.rating)}
                {"☆".repeat(5 - client.rating)}
              </span>
            </div>
            <p className="">{client.testimonial}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default ThirdReview;
