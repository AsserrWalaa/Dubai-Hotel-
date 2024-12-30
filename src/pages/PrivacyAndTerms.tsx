// src/pages/About.tsx
import Footer from "../components/Footer";
import SecondaryHero from "./Privacy/HeroPrivacy";
import "../style/global.css";

const PrivacyAndTerms = () => {
  return (
    <>
      <SecondaryHero />
      <section className="container mt-5 h-100">
        <div>
          <h5 className="textOrange">Privacy Policy</h5>
          <div className="my-3">
            <h5>1. How We Collect Information</h5>
            <p className="text-secondary fs-5">
              We collect personal information such as name, email, phone number,
              and address when you register or book a service.
            </p>
            <p className="text-secondary fs-5">
              We also collect automatic information such as IP addresses,
              browser type, and pages visited using cookies to enhance your
              experience.
            </p>
          </div>
          <div className="my-3">
            <h5>2. How We Use Your Data</h5>
            <p className="text-secondary fs-5">
              <span className="text-dark"> Improve services :</span> We use the
              data to improve the services offered, personalize offers, and
              optimize the user experience
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark"> Account Management:</span> We use the
              data to facilitate registration, provide booking services, and
              assist in customer interactions
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark">
                Customer Support & Communication:
              </span>
              We use the data to respond to inquiries, resolve issues, and
              communicate important updates
            </p>
          </div>
          <div className="my-3">
            <h5>3. Data Protection</h5>
            <p className="text-secondary fs-5">
              <span className="text-dark">Encryption</span> We protect the data
              using advanced encryption technologies like SSL to ensure the
              security of data during transfer between users and the website.
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark">Access Control:</span> Access to
              personal user data is restricted to authorized personnel only
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark">Secure Storage:</span> Data is
              securely stored on protected servers and systems are updated
              regularly to prevent unauthorized access or cyber threats.
            </p>
          </div>
        </div>
        <div>
          <h5>Terms of Use</h5>
          <div className="my-3">
            <h5>1. Booking Conditions</h5>
            <p className="text-secondary fs-5">
              <span className="text-dark">Booking Process:</span>To confirm a
              booking, users must fill out the required form and provide
              necessary details such as name, phone number, date, and special
              requests
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark">Confirmation and Payment:</span>After
              completing the booking, users will receive a confirmation via
              email or SMS. Payment may be required upfront through secure
              payment gateways.
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark">Modifications & Cancellations: </span>
              Users can modify or cancel their booking within a certain time
              frame, such as 24 hours before the scheduled service, to avoid
              additional fees
            </p>
          </div>
          <div className="my-3">
            <h5>2. Handling Issues</h5>
            <p className="text-secondary fs-5">
              <span className="text-dark">During Service Provision:</span>If the
              service does not meet expectations or if there is a complaint
              about the service, users should contact customer support
              immediately. We will work to resolve the issue as quickly as
              possible.
            </p>
            <p className="text-secondary fs-5">
              <span className="text-dark">Rescheduling:</span>In case of
              technical issues or unexpected circumstances on the day of the
              service (e.g., delay in arrival or issues with the facilities),
              customers will be informed and the appointment will be rescheduled
              at the earliest opportunity
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyAndTerms;
