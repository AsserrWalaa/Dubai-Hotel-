import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OurTeam from "../pages/OurTeam";
import Service from "../pages/Service";
import Offers from "../pages/Offers";
import OfferDetails from "./../pages/Offers/OfferDetails";
import Booking from "./../pages/Offers/Booking";
import Privacy from "../pages/PrivacyAndTerms";
import Reviews from "../pages/CustomerReview";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking/myBooking";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/services" element={<Service />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/offerDetails" element={<OfferDetails />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/privacy&terms" element={<Privacy />} />
      <Route path="/customerReviews" element={<Reviews />} />
      <Route path="/myProfile" element={<Profile />} />
      <Route path="/myBooking" element={<MyBooking />} />
    </Routes>
  </Router>
);

export default AppRoutes;
