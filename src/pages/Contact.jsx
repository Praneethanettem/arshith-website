import "../styles/main.css";
import Navbar from "../components/Navbar";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import contacthero from "../assets/contact/contacthero.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

function Contact() {
  return (

    <>
    <Navbar />

     <section
  className="contact-page-hero"
  style={{
    backgroundImage: `url(${contacthero})`
  }}
>

        <div className="contact-page-overlay">

          <h1>
            Connect With Arshith Group
          </h1>

          <p>

            Let’s build innovative solutions,
            partnerships and successful
            digital experiences together.

          </p>

        </div>

      </section>
<section className="contact-page-section">

  <div className="contact-glow contact-glow1"></div>
  <div className="contact-glow contact-glow2"></div>

  <div className="contact-shape shape1"></div>
<div className="contact-shape shape2"></div>
<div className="contact-shape shape3"></div>

  <span className="contact-tag">
    GET IN TOUCH
  </span>

  <h2>
    Send Us A Message
  </h2>

  <p className="contact-subtext">
    Connect with Arshith Group for partnerships,
    business growth and innovative digital solutions.
  </p>

 <div className="contact-page-container">

    <form className="contact-page-form">

      <input
        type="text"
        placeholder="Full Name"
      />

      <input
        type="email"
        placeholder="Email Address"
      />

      <input
        type="text"
        placeholder="Phone Number"
      />

      <input
        type="text"
        placeholder="Subject"
      />

      <textarea
        placeholder="Write your message here..."
      ></textarea>

      <button>
        Send Message →
      </button>

    </form>

    <div className="contact-info-box">

  <div className="contact-info-item">
    <h3>📍 Office Address</h3>

    <p>
      Bengaluru, Karnataka, India - 560076
    </p>
  </div>

  <div className="contact-info-item">
    <h3>📞 Contact</h3>

    <p>
      +91 8618471424 <br />
      info@arshithgroup.com
    </p>
  </div>

  <div className="contact-info-item">
    <h3>⏰ Working Hours</h3>

    <p>
      Mon - Fri : 9:30 AM - 8:00 PM <br />
      Saturday : 10:00 AM - 2:00 PM <br />
      Sunday : Closed
    </p>
  </div>

  <div className="contact-socials">

    <a href="#">
      <FaLinkedin />
    </a>

    <a href="#">
      <FaInstagram />
    </a>

    <a href="#">
      <FaYoutube />
    </a>

    <a href="#">
      <FaWhatsapp />
    </a>

  </div>

</div>

  </div>

</section>



     {/* FOOTER */}

<footer className="footer">

  <div className="footer-grid">

    {/* COLUMN 1 */}

    <div>

      <h2>
        Arshith Group
      </h2>

      <p>

        Arshith Group is committed to innovation,
        sustainability and excellence across multiple
        industries including E-Commerce, Technology
        and Digital Services.

      </p>

      <div className="social-links">

        <a
          href="https://www.instagram.com/farook_suntech_arshith?igsh=MW1mYW05MDAwb3JwbQ=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/arshith-fresh-india-pvt-ltd/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="#">
          <FaYoutube />
        </a>

        <a
          href="https://www.linkedin.com/in/farook-n-2bb2b5344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="#">
          <FaWhatsapp />
        </a>

      </div>

    </div>

    {/* COLUMN 2 */}

    <div className="footer-links">

      <h3>
        About Us
      </h3>

      <Link to="/about#companies">
        CEO Office
      </Link>

      <Link to="/about#leadership">
        Leadership
      </Link>

      <Link to="/about#journey">
        Our Journey
      </Link>

      <Link to="/about#awards">
        Awards
      </Link>

    </div>

    {/* COLUMN 3 */}

    <div className="footer-links">

  <h3>
    Businesses
  </h3>

  <p>E-Commerce</p>

  <p>Business Consulting</p>

  <p>Digital Marketing</p>

  <p>Software Development</p>

</div>



    {/* COLUMN 4 */}

    <div className="footer-links">

      <h3>
        Connect
      </h3>

      <Link to="/about">
        About Us
      </Link>

      <Link to="/latestupdates">
        News
      </Link>

      <Link to="/">
        Business
      </Link>

      <Link to="/careers">
        Careers
      </Link>

      <Link to="/contact">
        Contact Us
      </Link>

    </div>

  </div>

  <div className="footer-bottom">

    © 2026 Arshith Group.
    Building Innovation Across Industries.

  </div>

</footer>

    </>

  );

}

export default Contact;