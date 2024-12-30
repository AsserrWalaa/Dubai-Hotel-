import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import sava from "../assets/sava.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import "../style/global.css";

const teamMembers = [
  { img: sava, name: "Savannah Nguyen", role: "Owner" },
  { img: p2, name: "Savannah Nguyen", role: "Owner" },
  { img: p3, name: "Savannah Nguyen", role: "Owner" },
  { img: p4, name: "Bessie Cooper", role: "Owner" },
  { img: p5, name: "Devon Lane", role: "Cleaning" },
  { img: p6, name: "Savannah Nguyen", role: "Cleaning" },
  { img: p7, name: "Bessie Cooper", role: "Cleaning" },
  { img: p8, name: "Eleanor Pena", role: "Cleaning" },
  { img: p9, name: "Robert Fox", role: "Cleaning" },
  { img: p10, name: "Jenny Wilson", role: "Cleaning" },
  { img: p11, name: "Darlene Robertson", role: "Cleaning" },
  { img: p12, name: "Ronald Richards", role: "Cleaning" },
];

const Team = () => (
  <>
    <div className="hero-two">
      <div className="hero-content">
        <Navbar />
        <div className="heroText">
          <h1 className="text-center text-white">Our Team</h1>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <div className="row justify-content-center container">
        {teamMembers.map((member, index) => (
          <div
            className="col-12 col-sm-10 col-md-10 col-lg-3 mb-4 "
            key={index}>
            <Card style={{ width: "18rem" }} className="person p-1">
              <Card.Img className="mt-1" src={member.img} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className="text-secondary fs-5">
                  {member.role}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default Team;
