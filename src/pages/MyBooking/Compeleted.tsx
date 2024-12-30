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
          className="borderOrange rounded-2 d-flex flex-wrap p-3 gap-3 w-100 my-3">
          <div className="flex-shrink-0">
            <img
              src={book}
              alt="booking image"
              className="img-fluid"
              style={{ maxHeight: "325px" }}
            />
          </div>
          <div className="d-flex flex-column justify-content-between my-3 flex-grow-1">
            <div>
              <h6 className="my-3">
                ID: <span className="text-secondary">{booking.id}</span>
              </h6>
              <h6 className="my-3">
                Service:
                <span className="text-secondary">{booking.service}</span>
              </h6>
              <h6 className="my-3">
                Date: <span className="text-secondary">{booking.date}</span>
              </h6>
              <h6 className="my-3">
                Time: <span className="text-secondary">{booking.time}</span>
              </h6>
              <h6 className="my-3">
                Price: <span className="text-secondary">{booking.price}</span>
              </h6>
              <h6 className="my-3">
                Address:
                <span className="text-secondary">{booking.address}</span>
              </h6>
              <h6 className="my-3">
                Status: <span className="text-secondary">{booking.status}</span>
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Compeleted;
