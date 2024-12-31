<<<<<<< HEAD
import { Row, Col } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
=======
import { Container, Row, Col } from "react-bootstrap";
>>>>>>> 0686e2e61002fb7bdf6478c4fcf107660a2ad20f
import { Link } from "react-router-dom";
import footerLogo from "../assets/1-removebg-preview (3) 1.jpg";
import wp from "../assets/whtasapp.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="d-flex flex-column ">
      {/* Main content section */}
      {/* Footer */}
      <footer
        className="py-5 mt-auto w-100 mx-auto"
        style={{ backgroundColor: "#006f73" }}>
        <div className="d-flex container justify-content-center gap-5 flex-column flex-sm-row pb-4">
          <h4 className="text-light">Subscribe to Our Newsletter</h4>
          <div className="input-footer d-flex align-items-center">
            <div className="position-relative" style={{ width: 350 }}>
              <MdOutlineEmail
                className="position-absolute text-secondary"
                style={{
                  top: "50%",
                  left: "15px",
                  transform: "translateY(-50%)",
                  fontSize: "18px", // Adjust the size as needed
                }}
              />
              <div className="d-flex justify-content-end">
                <input
                  type="text"
                  className="w-100 rounded-5 border-0 py-2 px-5 ps-5"
                  id="input-field-footer"
                  placeholder="Enter Email"
                />
              </div>
              <button className="input-button-footer button rounded-5">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="mx-auto w-75 text-light " />
          <Row className="mt-5 text-center text-sm-start text-light justify-content-center align-items-start my-auto mx-auto gap-4">
            {/* Column 1 */}
            <Col md={2} sm={6} className="mb-3 d-flex justify-content-center">
              <img src={footerLogo} alt="footerLogo" className="img-fluid" />
            </Col>

            {/* Column 2 */}
            <Col md={2} sm={6} className="mb-3 d-flex justify-content-center">
              <p className="text-center text-sm-start">
                A specialized platform offering cleaning, sanitization, and
                luxury transformation services for apartments into high-standard
                hotel-like spaces. We provide an easy online booking.
              </p>
            </Col>

            {/* Column 3 */}
            <Col md={2} sm={6} className="mb-3">
              <h5 className="text-light fs-3 text-center text-sm-start">
                Link
              </h5>
              <Link
                to="/about"
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                About us
              </Link>
              <Link
                to="/services"
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Our Service
              </Link>
              <Link
                to="/contact"
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Contact us
              </Link>
              <Link
                to="/offers"
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Offers
              </Link>
              <Link
                to="/privacy&terms"
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Privacy & Terms
              </Link>
            </Col>

            {/* Column 4 */}
            <Col md={2} sm={6} className="mb-3">
              <h5 className="text-light fs-3 text-center text-sm-start">
                Service
              </h5>
              <Link
                to=""
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Property Cleaning
              </Link>
              <Link
                to=""
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Domestic Cleaning
              </Link>
              <Link
                to=""
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Window Cleaning
              </Link>
              <Link
                to=""
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                House Cleaning
              </Link>
              <Link
                to=""
                className="text-decoration-none fs-6 my-2 text-light d-block text-center text-sm-start">
                Office Cleaning
              </Link>
            </Col>

            {/* Column 5 */}
            <Col md={2} sm={6} className="mb-3">
              <h5 className="text-light text-center text-sm-start">
                Contact Us
              </h5>
              <ul className="list-inline mt-3 text-center text-sm-start">
                <li>
                  <h6 className="text-light fs-6">T - 01258639562</h6>
                </li>
                <li>
                  <h6 className="text-light fs-6">
                    E - Dubaihotelservice@gmail.com
                  </h6>
                </li>
              </ul>
              <div className="d-flex justify-content-center ms-lg-5 mt-4">
                <img src={fb} alt="fb" className="me-3" />
                <a
                  href="https://wa.me/201066607106"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={wp}
                    alt="wp"
                    width={50}
                    height={50}
                    className="mx-3 bg-success rounded-5"
                  />
                </a>
                <img src={ig} alt="ig" className="mx-3" />
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
