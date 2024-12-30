import React from "react";
import SecondaryNav from "../../components/Navbar";
import "../../style/global.css";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Booking: React.FC = () => {
  return (
    <>
      <SecondaryNav />
      <section className="container my-5">
        <h2 className="text-center">Booking</h2>
        <Container className="mt-4">
          <Form>
            {/* First Name */}
            <Form.Group className="position-relative my-5">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="&#xf007;   First Name"
                className="icon-placeholder"
              />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="&#xf095;   Phone Number"
                className="icon-placeholder"
              />
            </Form.Group>

            {/* City */}
            <Form.Group className="position-relative my-5">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="&#xf64f;   City"
                className="icon-placeholder"
              />
            </Form.Group>

            {/* Service Type */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Service Type</Form.Label>
              <Form.Select className="icon-placeholder">
                <option value="" disabled selected>
                  &#xf0ae; Service Type
                </option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </Form.Select>
            </Form.Group>

            {/* Service Date */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Service Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="&#xf073;   Service Date"
                className="icon-placeholder"
              />
            </Form.Group>

            {/* Select Time */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Select Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="&#xf017;   Select Time"
                className="icon-placeholder"
              />
            </Form.Group>

            {/* Address */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="&#xf015;   Address"
                className="icon-placeholder"
              />
            </Form.Group>

            {/* Notes */}
            <Form.Group className="position-relative my-5">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="&#xf249;   Notes"
                className="icon-placeholder "
              />
            </Form.Group>
          </Form>
        </Container>
        <Link to="">
          <button className="w-100 button py-2 rounded text-light fw-bold">
            Confirm Booking
          </button>
        </Link>
      </section>
    </>
  );
};

export default Booking;
