import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/global.css";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Profile: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h1 className="text-center">Profile</h1>
        <Container className="mt-4">
          <Form>
            {/* Full Name */}
            <Form.Group className="position-relative my-5 ">
              <Form.Label>Full Name</Form.Label>
              <div className="position-relative">
                <FiUserPlus
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1  "
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="ps-4 borderOrange rounded-2"
                />
              </div>
            </Form.Group>
            {/* Email Address */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Email Address</Form.Label>
              <div className="position-relative">
                <MdEmail
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="ps-4 borderOrange rounded-2"
                />
              </div>
            </Form.Group>
            {/* Phone Number */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Phone Number</Form.Label>
              <div className="position-relative">
                <MdOutlinePhoneInTalk
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  className="ps-4 borderOrange rounded-2"
                />
              </div>
            </Form.Group>
            {/* Password */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Password</Form.Label>
              <div className="position-relative">
                <TbLockPassword
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="ps-4 borderOrange rounded-2"
                />
              </div>
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
