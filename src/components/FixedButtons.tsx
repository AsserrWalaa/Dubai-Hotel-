import React from "react";
import WhatsappButton from "../assets/whtasapp.png"; // Update with the correct path
import Call from "../assets/call.png"; // Update with the correct path
import "../style/global.css";

const FixedButtons: React.FC = () => {
  const whatsappNumber = "+201066607106";
  const callNumber = "+201066607106";

  return (
    <div
      className="fixed-buttons position-fixed d-flex flex-column gap-2 z-3"
      style={{ bottom: "20px", right: "20px" }}>
      {/* WhatsApp Button */}
      <button
        className="border-0 rounded-5 bg-transparent"
        onClick={() => {
          window.open(`https://wa.me/${whatsappNumber}`, "_blank");
        }}>
        <img src={WhatsappButton} alt="WhatsApp" />
      </button>

      {/* Call Button */}
      <button
        className="border-0 rounded-5 bg-transparent"
        onClick={() => {
          window.location.href = `tel:${callNumber}`;
        }}>
        <img src={Call} alt="Call" />
      </button>
    </div>
  );
};

export default FixedButtons;
