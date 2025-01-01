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
    status: "Compeleted",
  },
  {
    id: "64327",
    service: "House Cleaning",
    date: "31 - 12 - 2024",
    time: "4 PM",
    price: "1500",
    address: "Downtown Dubai Appartment 501",
    status: "Compeleted",
  },
  {
    id: "64327",
    service: "House Cleaning",
    date: "31 - 12 - 2024",
    time: "4 PM",
    price: "1500",
    address: "Downtown Dubai Appartment 501",
    status: "Compeleted",
  },
];

const Compeleted: React.FC = () => {
  return (
    <>
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="borderOrange rounded-2 d-lg-flex  align-items-stretch p-1 gap-3 w-100 my-5 mx-auto bookingCard">
          {/* Booking Image */}
          <img
            src={book}
            alt="bookingImage"
            className="img-fluid h-auto p-2 d-block mx-lg-0 mx-auto"
          />

          {/* Booking Details and Button */}
          <div className="d-flex flex-column flex-lg-row justify-content-between py-2 w-100">
            {/* Booking Details */}
            <div className="d-flex flex-column justify-content-between pe-lg-5 ps-1">
              <h6 className="my-1">
                ID : <span className="text-secondary">{booking.id}</span>
              </h6>
              <h6 className="my-1">
                Service :
                <span className="text-secondary">{booking.service}</span>
              </h6>
              <h6 className="my-1">
                Date : <span className="text-secondary">{booking.date}</span>
              </h6>
              <h6 className="my-1">
                Time : <span className="text-secondary">{booking.time}</span>
              </h6>
              <h6 className="my-1">
                Price : <span className="text-secondary">{booking.price}</span>
              </h6>
              <h6 className="my-1">
                Address :
                <span className="text-secondary"> {booking.address}</span>
              </h6>
              <h6 className="my-1">
                Status :
                <span className="text-secondary"> {booking.status}</span>
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Compeleted;
