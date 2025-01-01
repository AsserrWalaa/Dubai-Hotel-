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
import HomeCleaning from "../pages/EightService/HomeCleaning";
import BathroomCleaning from "../pages/EightService/Bathroom";
import KitchenCleaning from "../pages/EightService/Kitchen";
import SurfaceCleaning from "../pages/EightService/Surface";
import Upholstery from "../pages/EightService/Upholstery";
import Window from "../pages/EightService/Window";
import Layout from "../pages/EightService/Layout";
import Perfuming from "../pages/EightService/Perfuming";

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
      <Route path="/homeCleaning" element={<HomeCleaning />} />
      <Route path="/bathroom" element={<BathroomCleaning />} />
      <Route path="/kitchen" element={<KitchenCleaning />} />
      <Route path="/surface" element={<SurfaceCleaning />} />
      <Route path="/upholstery" element={<Upholstery />} />
      <Route path="/window" element={<Window />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/perfuming" element={<Perfuming />} />
    </Routes>
  </Router>
);

export default AppRoutes;
