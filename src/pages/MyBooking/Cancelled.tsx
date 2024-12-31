import React from "react";
import "../../style/global.css";
import book from "../../assets/book.png";

// Define an array with the booking data
const bookings = [
  {
    id: "64327",
    service: "House Cleaning",
    date: "31 - 12 - 2024",
    time: "4 PM",
    price: "1500",
    address: "Downtown Dubai Appartment 501",
    status: "Cancelled",
  },
  {
    id: "64328",
    service: "Laundry Service",
    date: "01 - 01 - 2025",
    time: "10 AM",
    price: "800",
    address: "Palm Jumeirah Villa 120",
    status: "Cancelled",
  },
  {
    id: "64329",
    service: "Plumbing",
    date: "02 - 01 - 2025",
    time: "2 PM",
    price: "1200",
    address: "Burj Khalifa 405",
    status: "Cancelled",
  },
];

const Cancelled: React.FC = () => {
  return (
    <>
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="borderOrange rounded-2 d-lg-flex flex-wrap p-1 gap-3 w-100 my-5 mx-auto bookingCard ">
          <img
            src={book}
            alt="booking image"
            className="img-fluid h-100 p-2 d-block mx-auto"
            style={{ height: 300 }}
          />

          <div className="d-flex flex-column flex-lg-row gap-5">
            <div className="flex-column justify-content-between pe-5 ps-1">
              <div>
                <h6 className="my-4">
                  ID: <span className="text-secondary">{booking.id}</span>
                </h6>
                <h6 className="my-4">
                  Service:
                  <span className="text-secondary">{booking.service}</span>
                </h6>
                <h6 className="my-4">
                  Date: <span className="text-secondary">{booking.date}</span>
                </h6>
                <h6 className="my-4">
                  Time: <span className="text-secondary">{booking.time}</span>
                </h6>
                <h6 className="my-4">
                  Price: <span className="text-secondary">{booking.price}</span>
                </h6>
                <h6 className="my-4">
                  Address:
                  <span className="text-secondary">{booking.address}</span>
                </h6>
                <h6 className="my-4">
                  Status:
                  <span className="text-danger">{booking.status}</span>
                </h6>
              </div>
            </div>

            {/* Center the button and content for small screens */}
            <div className="d-flex justify-content-center mt-auto mb-2 ps-5 pe-3"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cancelled;
