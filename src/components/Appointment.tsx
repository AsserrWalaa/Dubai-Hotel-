import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons"; // Importing the WhatsApp icon

const AppointmentForm = () => {
  // Form data state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number as string
  const [city, setCity] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [numRooms, setNumRooms] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Please enter a valid phone number");
      return;
    }

    // Format the WhatsApp message with the form data
    const message =
      `*Appointment Details*\n\n` +
      `First Name: ${firstName}\n` +
      `Last Name: ${lastName}\n` +
      `Phone Number: ${phoneNumber}\n` +
      `City: ${city}\n` +
      `Service Type: ${serviceType}\n` +
      `Service Date: ${serviceDate}\n` +
      `Number of Rooms: ${numRooms}`;

    // URL encode the message to handle special characters
    const encodedMessage = encodeURIComponent(message);

    // Send the message to the fixed phone number +201090009330
    const whatsappUrl = `https://wa.me/+201090009330?text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section className="Appointment my-5 py-5">
        <div className="form">
          <div className="container form-content">
            <div className="p-5">
              <h1 className="text-center text-white p-4 ">
                Appointment Your Service
              </h1>
            </div>
            {/* First name, last name */}
            <Row>
              <Col>
                <Form.Label className="text-light name">First name</Form.Label>
                <Form.Control
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label className="text-light name">Last name</Form.Label>
                <Form.Control
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Col>
            </Row>
            {/* Mobile, city */}
            <Row className="mt-4">
              <Col>
                <Form.Label className="text-light phone">
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number with country code"
                />
              </Col>
              <Col>
                <Form.Label className="text-light city">City</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}>
                  <option>city 1</option>
                  <option>city 2</option>
                  <option>city 3</option>
                  <option>city 4</option>
                </Form.Select>
              </Col>
            </Row>
            {/* Service type, date */}
            <Row className="mt-4">
              <Col>
                <Form.Label className="text-light serviceType">
                  Service type
                </Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}>
                  <option>service 1</option>
                  <option>service 2</option>
                  <option>service 3</option>
                  <option>service 4</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label className="text-light serviceDate">
                  Service date
                </Form.Label>
                <Form.Control
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                />
              </Col>
            </Row>
            {/* Number of rooms */}
            <Row className="mt-4">
              <Form.Label className="text-light numRooms">
                Number of rooms
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  value={numRooms}
                  onChange={(e) => setNumRooms(e.target.value)}
                />
              </Col>
            </Row>
            {/* Submit button */}
            <Row>
              <Button
                type="submit"
                className="btn-lg w-100 text-white d-flex align-items-center justify-content-center my-5"
                style={{ backgroundColor: "#8B4513" }}
                onClick={handleSubmit} // Trigger WhatsApp message on submit
              >
                Send <Whatsapp className="ms-3 text-success" size={20} />
              </Button>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentForm;
