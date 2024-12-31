import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/global.css";
import { Tab, Tabs } from "react-bootstrap"; // Import necessary components
import "@fortawesome/fontawesome-free/css/all.min.css";
import Pending from "../MyBooking/Pending";
import Cancelled from "../MyBooking/Cancelled";
import Compeleted from "../MyBooking/Compeleted";
import Confirmed from "../MyBooking/Confirmed";

const MyBooking: React.FC = () => {
  const [key, setKey] = useState("pending"); // State to track active tab

  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h3 className="text-center pb-3">My Booking</h3>
        <div className="mt-4"></div>

        {/* Tabs Section - Centering the tabs */}
        <div className="d-flex flex-column align-items-center">
          <Tabs
            id="booking-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k!)}
            className="mb-3 d-flex d-inline-block custom-tabs">
            <Tab eventKey="pending" title="Pending" className="">
              <div className="mt-4 w-100 col-12 ">
                <Pending />
              </div>
            </Tab>
            <Tab eventKey="confirmed" title="Confirmed">
              <div className="mt-4 w-100">
                <Confirmed />
              </div>
            </Tab>
            <Tab eventKey="completed" title="Completed">
              <div className="mt-4 w-100">
                <Compeleted />
              </div>
            </Tab>
            <Tab eventKey="cancelled" title="Cancelled">
              <div className="mt-4 w-100">
                <Cancelled />
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyBooking;
