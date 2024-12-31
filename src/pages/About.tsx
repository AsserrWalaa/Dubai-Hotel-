// src/pages/About.tsx
import Footer from "../components/Footer";
import SecondaryHero from "../../src/pages/AboutUs/SecondaryHero";
import { Card } from "react-bootstrap";
import "../../src/style/global.css";
import p1 from "../assets/p12.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import group from "../assets/group.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Savannah Nguyen",
    title: "Founder & CEO",
    description:
      "Savannah Nguyen is the Founder and CEO With Over 10 years Experience in the hospitality and project management sectors",
    image: p1,
  },
  {
    id: 2,
    name: "Annette Black",
    title: "Founder & CEO",
    description:
      "Savannah Nguyen is the Founder and CEO With Over 10 years Experience in the hospitality and project management sectors",
    image: p2, // Replace with another image if needed
  },
  {
    id: 3,
    name: "Darlene Robertson",
    title: "Founder & CEO",
    description:
      "Savannah Nguyen is the Founder and CEO With Over 10 years Experience in the hospitality and project management sectors",
    image: p3, // Replace with another image if needed
  },
];
const About = () => {
  return (
    <>
      <SecondaryHero />
      <section className="container mt-5 h-75">
        <div>
          <h5>1. Company Introduction: Objective, Vision, and Mission</h5>
          <p>
            At DubaI Hotel Service , we believe that every furnished apartment
            has the potential to transform into a luxurious space that rivals
            the finest hotels. We provide professional cleaning and disinfection
            services with elegant design touches to turn apartments into
            environments that combine luxury and comfort.
          </p>
          <p>
            Our vision is to become the top choice in the market for
            transforming furnished apartments into luxurious hotel-style
            accommodations, through innovation and quality that adds real value
            to our clients.
          </p>
          <p>
            Our mission is to deliver exceptional services that adhere to the
            highest standards of professionalism, utilizing modern techniques
            and eco-friendly materials to ensure an unforgettable experience for
            every client."
          </p>
        </div>
        <div>
          <h5>2. Company Vision</h5>
          <p>
            Our vision is to redefine the concept of furnished living. We aim to
            deliver services that turn every apartment into a complete space
            reflecting luxury and distinction, inspired by the experience of
            staying in a high-end hotel. We strive to lead this field by
            implementing global best practices and offering customized solutions
            for every client.
          </p>
        </div>
        <div>
          <h5>3. Company Story</h5>
          <p>
            The journey of [Company Name] started with a simple idea:
            transforming furnished apartments into spaces that reflect luxury
            and distinction. We noticed that many clients seek a comprehensive
            service combining professional cleaning, disinfection, and design
            touches that bring a sense of sophistication.
          </p>
          <p>
            From day one, we committed to innovation and quality as core values,
            investing in the best tools and eco-friendly materials to ensure our
            clients' satisfaction. What sets us apart from competitors is our
            meticulous attention to detail, commitment to deadlines, and
            tailored services designed to meet each client’s unique needs.
          </p>
          <p>
            Over the years, we have grown steadily thanks to our clients’ trust
            and satisfaction. Today, we aim to expand our services to more
            regions and communities while maintaining the same high standards we
            have upheld since the beginning.
          </p>
        </div>
        <div>
          <h5>4. Team Work</h5>
          <p>
            At Dubai Hotel Services we are proud to have an exceptional team of
            experts specializing in cleaning, disinfection, and interior design
          </p>
          <p>
            Led by Ehab , who has extensive experience in managing hospitality
            projects and customer service
          </p>
        </div>
        <div className="team mt-5 py-5">
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {teamMembers.map((member) => (
              <Card
                style={{ width: "18rem" }}
                className="border-0"
                key={member.id}>
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-secondary">
                    {member.title}
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    {member.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="group d-flex flex-wrap justify-content-center gap-4 mt-5">
            <Card style={{ width: "40rem" }} className="border-0">
              <Card.Img variant="top" src={group} />
              <Card.Body>
                <Card.Text className="text-secondary">
                  Our team is a group of dedicated experts and specialists who
                  work passionately to deliver the best services to our clients.
                  We take pride in the diversity of skills within our team and
                  their commitment to realizing our vision.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
