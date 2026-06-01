import "../styles/main.css";
import Navbar from "../components/Navbar";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

import aboutbanner from "../assets/about/aboutbanner.avif";
import grouppic from "../assets/about/grouppic.png";
import vision from "../assets/about/vision.jpg";
import mission from "../assets/about/mission.jpg";
import ethics from "../assets/about/ethics.jpg";

import office from "../assets/about/office.webp";
import suntech from "../assets/about/suntech.jpg";

import farook from "../assets/founders/farook.jpeg";
import pallavi from "../assets/founders/pallavi.jpeg";
import { Link } from "react-router-dom";

import companyvideo from "../assets/video/companyvideo.mp4";
function About() {

  return (
    <>
  <Navbar />

  <div className="scroll-progress"></div>


      {/* HERO */}

      <section className="about-hero" data-aos="fade-up">

        <img
          src={aboutbanner}
          alt=""
          className="about-banner-image"
        />

        <div className="about-overlay">

          <h1>
            About Arshith Group
          </h1>

          <p>

            Arshith Group is a growing ecosystem
            powered by innovation, technology
            and customer-focused solutions.

            Through Arshith Infotech and
            Suntech Solutions, we continue
            to empower businesses with
            digital transformation and
            scalable modern solutions.

          </p>

        </div>

      </section>

      {/* STORY */}

     <section className="story-section" data-aos="fade-right">

        <img src={grouppic} alt="" />

        <div className="story-content">

          <h2>
            Our Journey of Growth
          </h2>

          <p>

            Arshith Group began with a vision
            to build businesses driven by trust,
            innovation and meaningful impact.

            Over the years, we have expanded
            into technology, ecommerce and
            digital services while continuously
            empowering businesses through
            scalable and customer-focused solutions.

          </p>

        </div>

      </section>

      {/* COMPANIES */}

     <section className="business-section" data-aos="zoom-in">

        <h2>
          Our Companies
        </h2>

        <div className="business-grid">

          <a
            href="https://arshithfresh.com/"
            target="_blank"
            rel="noreferrer"
            className="business-card"
data-aos="zoom-in"
          >

            <img src={office} alt="" />

            <h3>
              Arshith Group
            </h3>

            <p>

              Delivering ecommerce,
              technology and customer-driven
              digital experiences for modern industries.

            </p>

          </a>

          <a
            href="https://suntechorganization.com/"
            target="_blank"
            rel="noreferrer"
           className="business-card"
data-aos="zoom-in"
          >

            <img src={suntech} alt="" />

            <h3>
              Suntech Solutions
            </h3>

            <p>

              Empowering businesses through
              software development,
              IT consulting and digital transformation.

            </p>

          </a>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section" data-aos="fade-up">

        <div className="stat-card" data-aos="fade-up">
          <h2>7+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="stat-card" data-aos="fade-up">
          <h2>10+</h2>
          <p>Services & Solutions</p>
        </div>

       <div className="stat-card" data-aos="fade-up">
          <h2>100+</h2>
          <p>Quality Products</p>
        </div>

        <div className="stat-card" data-aos="fade-up">
          <h2>30K+</h2>
          <p>Happy Customers</p>
        </div>

      </section>

      {/* LEADERS */}

<section className="leaders-section" data-aos="fade-left">

  <h2>
    Visionary Leadership
  </h2>

  {/* FAROOK */}

  <div
  className="leader-card"
  data-aos="fade-left"
    style={{
      display: "flex",
      flexDirection:
        window.innerWidth <= 768
          ? "column"
          : "row",
      alignItems: "center",
      gap: "40px"
    }}
  >

    <img
      src={farook}
      alt=""
      style={{
        width:
          window.innerWidth <= 768
            ? "100%"
            : "45%",
        height: "auto",
        borderRadius: "30px",
        objectFit: "cover"
      }}
    />

    <div
      style={{
        width:
          window.innerWidth <= 768
            ? "100%"
            : "55%"
      }}
    >

      <h3
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "38px"
              : "52px",
          lineHeight: "1.2"
        }}
      >
        Farook N
      </h3>

      <h4
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "24px"
              : "32px",
          lineHeight: "1.4"
        }}
      >
        Chairman - Arshith Group
      </h4>

      <p
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "17px"
              : "20px",
          lineHeight: "1.9"
        }}
      >

        As a proudly rooted Indian brand,
        Arshith Group is dedicated to creating
        honest, high-quality and meaningful solutions
        that positively impact businesses and communities.

        Our journey is driven by trust,
        innovation and sustainable growth
        while building long-term relationships
        through transparency and responsibility.

      </p>

      <div className="leader-links">

        <a
          href="https://www.linkedin.com/in/farook-n-2bb2b5344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/farook_suntech_arshith?igsh=MW1mYW05MDAwb3JwbQ=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

    </div>

  </div>

  {/* PALLAVI */}

  <div
  className="leader-card"
  data-aos="fade-left"
    style={{
      display: "flex",
      flexDirection:
        window.innerWidth <= 768
          ? "column"
          : "row",
      alignItems: "center",
      gap: "40px"
    }}
  >

    <img
      src={pallavi}
      alt=""
      style={{
        width:
          window.innerWidth <= 768
            ? "100%"
            : "45%",
        height: "auto",
        borderRadius: "30px",
        objectFit: "cover"
      }}
    />

    <div
      style={{
        width:
          window.innerWidth <= 768
            ? "100%"
            : "55%"
      }}
    >

      <h3
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "38px"
              : "52px",
          lineHeight: "1.2"
        }}
      >
        Pallavi N
      </h3>

      <h4
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "24px"
              : "32px",
          lineHeight: "1.4"
        }}
      >
        Managing Director - Arshith Group
      </h4>

      <p
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "17px"
              : "20px",
          lineHeight: "1.9"
        }}
      >

        At Arshith Group, every initiative
        reflects our passion for quality,
        purpose and customer well-being.

        Our mission is to deliver trusted,
        thoughtful and sustainable experiences
        while creating strong and meaningful
        relationships that last for generations.

      </p>

      <div className="leader-links">

        <a
          href="https://www.linkedin.com/in/pallavi-n-4578033ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/npallavi_arshith?igsh=eGkzaWY0a2FzemEw"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

    </div>

  </div>

</section>
{/* ARSHITH FRESH VIDEO SECTION */}

<section className="fresh-video-section" data-aos="zoom-in">

  <div className="fresh-video-left">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="fresh-video"
    >

      <source
        src={companyvideo}
        type="video/mp4"
      />

    </video>

  </div>

  <div className="fresh-video-right">

    <span>
      Arshith Fresh
    </span>

    <h2>
      Freshness Powered By Innovation
    </h2>

    <p>

      Arshith Fresh is committed to delivering
      premium natural products with quality,
      trust and freshness at the heart of every experience.

      Through innovation, ecommerce excellence and customer-focused service,
      we continue building smarter and healthier shopping experiences.

    </p>

  </div>

</section>

      {/* VISION MISSION */}

     <section className="vision-section" data-aos="fade-up">

        <div className="vision-card" data-aos="zoom-in">

          <img src={vision} alt="" />

          <h2>
            Our Vision
          </h2>

          <p>

            To build a future-driven ecosystem
            powered by innovation, technology
            and meaningful customer experiences.

          </p>

        </div>

        <div className="vision-card">

          <img src={mission} alt="" />

          <h2>
            Our Mission
          </h2>

          <p>

            To deliver trusted solutions and
            sustainable growth through quality,
            transparency and innovation.

          </p>

        </div>

      </section>

      {/* VALUES */}

     <section className="ethics-section" data-aos="fade-right">
        <img src={ethics} alt="" />

        <div>

          <h2>
            Built On Trust & Responsibility
          </h2>

          <p>

            At Arshith Group, every decision
            is guided by integrity,
            transparency and responsibility.

          </p>

          <p>

            We believe strong businesses are built
            through trust, innovation and
            meaningful long-term relationships.

          </p>

        </div>

      </section>
{/* FAQS */}
<section className="faq-section" data-aos="fade-up">

  <h2>
    FAQ's
  </h2>

  <div className="faq-container">

   <div className="faq-card" data-aos="fade-up">

      <h3>
        What services does Arshith Group provide?
      </h3>

      <p>

        Arshith Group provides ecommerce,
        software development, IT consulting,
        backend support and digital transformation services.

      </p>

    </div>

   <div className="faq-card" data-aos="fade-up">

      <h3>
        What businesses are part of Arshith Group?
      </h3>

      <p>

        Arshith Group includes Arshith Infotech,
        Arshith Fresh and Suntech Solutions.

      </p>

    </div>

    <div className="faq-card" data-aos="fade-up">

      <h3>
        How can businesses collaborate with Arshith Group?
      </h3>

      <p>

        Businesses can connect through partnerships,
        technology solutions and digital services
        offered by the group.

      </p>

    </div>

   <div className="faq-card" data-aos="fade-up">

      <h3>
        Does Arshith Group provide internship opportunities?
      </h3>

      <p>

        Yes, we provide internships and career
        opportunities for students and professionals.

      </p>

    </div>

  </div>

</section>
{/* REVIEWS */}

<section className="review-section" data-aos="zoom-in">

  <h2>
    What Our Customers Say
  </h2>

  <div className="review-grid">

    <div className="review-card" data-aos="zoom-in">

      <p>

        “Arshith Group delivers excellent
        digital solutions with professionalism,
        innovation and great customer support.”

      </p>

      <h3>
        — Business Client
      </h3>

    </div>

    <div className="review-card">

      <p>

        “The experience with Suntech Solutions
        was smooth, reliable and highly professional.
        Their services truly helped our business grow.”

      </p>

      <h3>
        — Startup Founder
      </h3>

    </div>

    <div className="review-card">

      <p>

        “Arshith Group combines trust,
        quality and technology in a way
        that creates real value for customers.”

      </p>

      <h3>
        — Customer Review
      </h3>

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

export default About;