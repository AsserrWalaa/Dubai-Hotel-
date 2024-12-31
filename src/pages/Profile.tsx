import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/global.css";
import { Form, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Profile: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h1 className="text-center">Profile</h1>
        <Container className="mt-4">
          <Form>
            {/* Full Name */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="  Full Name"
                className="icon-placeholder borderOrange"
              />
            </Form.Group>

            {/* Email Address */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="   Email Address"
                className="icon-placeholder borderOrange"
              />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup className="gap-2">
                {/* Country Code */}
                <InputGroup.Text className="borderOrange d-flex  align-items-center p-1 rounded">
                  <img
                    src="https://flagcdn.com/w40/ae.png" // UAE flag URL
                    alt="UAE Flag"
                    style={{
                      width: "20px",
                      height: "15px",
                      marginRight: "5px",
                    }}
                  />
                  +971 {/* Example country code */}
                </InputGroup.Text>

                {/* Phone Number */}
                <Form.Control
                  type="number"
                  placeholder="&#xf095; Phone Number"
                  className="icon-placeholder borderOrange rounded"
                />
              </InputGroup>
            </Form.Group>

            {/* Password */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Password"
                className="icon-placeholder borderOrange"
              />
            </Form.Group>
          </Form>
        </Container>
        <Link to="">
          <button className="w-100 button py-2 rounded text-light fw-bold">
            Edit Profile
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
