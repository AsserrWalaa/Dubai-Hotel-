import React from "react";
import SecondaryNav from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/global.css";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlinePhoneInTalk, MdOutlineCalendarMonth } from "react-icons/md";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { GoNote } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

const Booking: React.FC = () => {
  return (
    <>
      <SecondaryNav />
      <section className="container my-5">
        <h2 className="text-center">Booking</h2>
        <Container className="mt-4">
          <Form>
            {/* First Name */}
            <Form.Group className="position-relative my-5 ">
              <Form.Label>First Name</Form.Label>
              <div className="position-relative">
                <FiUserPlus
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1  "
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="ps-4 borderPrimary rounded-2"
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
                  className="ps-4 borderPrimary rounded-2"
                />
              </div>
            </Form.Group>
            {/* City */}
            <Form.Group className="position-relative my-5">
              <Form.Label>City</Form.Label>
              <div className="position-relative">
                <CiLocationOn
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  type="text"
                  placeholder="City"
                  className="ps-4 borderPrimary rounded-2"
                />
              </div>
            </Form.Group>
            {/* Service Type */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Service Type</Form.Label>
              <div className="position-relative">
                <GoNote
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                <Form.Select className="ps-4 icon-placeholder borderPrimary rounded-2 ps-4">
                  <option value="" disabled selected>
                    Service Type
                  </option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </Form.Select>
              </div>
            </Form.Group>
            {/* Service Date */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Service Date</Form.Label>
              <div className="position-relative">
                <MdOutlineCalendarMonth
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                <Form.Control
                  className="ps-4 icon-placeholder borderPrimary rounded-2 ps-4"
                  placeholder="Service Date"
                  style={{
                    appearance: "none",
                    MozAppearance: "none",
                    WebkitAppearance: "none",
                  }}
                />
              </div>
            </Form.Group>
            {/* Select Time */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Select Time</Form.Label>
              <div className="position-relative">
                {/* Clock Icon */}
                <CiClock2
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                {/* Time Input */}
                <Form.Control
                  className="ps-4 icon-placeholder borderPrimary rounded-2 ps-4"
                  placeholder="Select Time"
                  style={{
                    appearance: "none",
                    MozAppearance: "none",
                    WebkitAppearance: "none",
                  }}
                />
              </div>
            </Form.Group>
            {/* Address */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Address</Form.Label>
              <div className="position-relative">
                {/* Home Icon */}
                <IoHomeOutline
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none" }}
                />
                {/* Address Input */}
                <Form.Control
                  type="text"
                  className="ps-4 icon-placeholder borderPrimary rounded-2 ps-4"
                  placeholder="Address"
                />
              </div>
            </Form.Group>
            {/* Notes */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Notes</Form.Label>
              <div className="position-relative">
                {/* Message Detail Icon */}
                <BiMessageDetail
                  className="position-absolute t start-0 translate-middle-y text-muted ms-1"
                  style={{ pointerEvents: "none", top: 20 }}
                />
                {/* Notes Textarea */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="ps-4 icon-placeholder borderPrimary rounded-2 ps-4"
                  placeholder="Notes"
                />
              </div>
            </Form.Group>
          </Form>
        </Container>
        <Link to="">
          <button className="w-100 button py-2 rounded text-light fw-bold">
            Confirm Booking
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
