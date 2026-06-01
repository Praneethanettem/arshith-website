
import { useState, useEffect } from "react";

import freshbanner from "../assets/herobanners/freshbanner.png";
import infotechbanner from "../assets/herobanners/infotechbanner.png";
import suntechbanner from "../assets/herobanners/suntechbanner.jpg";

import arshithfresh from "../assets/business/arshithfresh.jpeg";
import arshithinfotech from "../assets/business/arshithinfotech.png";
import suntech from "../assets/business/suntechsolutions.png";

import ecommerce from "../assets/services/ecommerce.jpeg";

import digitalmarketing from "../assets/services/digitalmarketing.webp";

import softwaredevelopment from "../assets/services/softwaredevelopment.jpg";

import itconsulting from "../assets/services/itconsulting.jpg";

import backendsupport from "../assets/services/backendsupport.webp";

import multiseller from "../assets/services/multiseller.png";

import ceo from "../assets/founders/farook.jpeg";
import trust from "../assets/trust/trust.png";
import innovation from "../assets/trust/innovation.png";
import sustainability from "../assets/trust/sustainability.jpg";
import growth from "../assets/trust/growth.webp";
import technology from "../assets/trust/technologyicon.jpg";

import studentsworking from "../assets/internships/studentsworking.jpg";

import collaboration from "../assets/posters/collaboration.jpg";

import businessmeetings from "../assets/posters/business meetings.jpg";

import awardceremony from "../assets/posters/award ceremony.jpeg";

import companyevents from "../assets/posters/company events.jpeg";


import news1 from "../assets/news/news1.jpeg";
import news2 from "../assets/news/news2.jpeg";
import nagarjunahiring from "../assets/news/Nagarjuna hiring.jpeg";
import news4 from "../assets/news/news4.jpeg";
import latestupdate from "../assets/news/latestupdate (2).jpeg";

import Navbar from "../components/Navbar";


import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
const homeNews = [

  {
    image: news1,
    title:
    "A Defining Moment For Future Growth"
  },

  {
    image: news2,
    title:
    "Empowering Minds For Tomorrow’s Leadership" 
  },

  {
  image: nagarjunahiring,
  title:
  "Nagarjuna College Recruitment Initiative" 
},

  {
    image: news4,
    title:
    "Building Stronger Industry Connections" 
  },

  {
    image: latestupdate,
    title:
    "A Defining Moment for Future Growth and Direction"
  }

];
 const slides = [

  {
    image: freshbanner,

    tag: "Arshith Fresh",

    title:
    "Fresh Products Delivered With Quality & Trust",

    desc:
    "Premium natural products, cold pressed oils and ecommerce experiences crafted for modern households.",

    button1: "Explore Fresh",

    button2: "Learn More",

    button1Link:
    "https://arshithfresh.com/",

    button2Link:
    "/about",

    external: true
  },

  {
    image: infotechbanner,

    tag: "Arshith Infotech",

    title:
    "Innovative IT Solutions For Modern Businesses",

    desc:
    "Transforming industries through software development, digital solutions and scalable technologies.",

    button1: "Explore Services",

    button2: "Learn More",

    button1Link:
    "https://arshithgroup.com/",

    button2Link:
    "/about",

    external: true
  },

  {
    image: suntechbanner,

    tag: "Suntech Solutions",

    title:
    "Driving Growth Through Smart Technology",

    desc:
    "Empowering businesses with consulting, backend support and future-ready digital transformation services.",

    button1: "Discover More",

    button2: "Learn More",

    button1Link:
    "https://suntechorganization.com/",

    button2Link:
    "/about",

    external: true
  }

];
const [currentSlide, setCurrentSlide] = useState(0);

const [currentCompanyImage, setCurrentCompanyImage] = useState(0);

useEffect(() => {
  const companyInterval = setInterval(() => {
    setCurrentCompanyImage((prev) =>
      prev === companyImages.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(companyInterval);
}, []);

/* ADD THIS BELOW */

useEffect(() => {
  const slideInterval = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(slideInterval);
}, []);
 const services = [
  {
    title: "E-Commerce",
    image: ecommerce,
    desc: "Modern ecommerce platforms and scalable digital marketplaces.", 
    link: "https://arshithfresh.com/"
  },
  {
    title: "Digital Marketing",
    image: digitalmarketing,
    desc: "Brand growth strategies through smart digital campaigns.",
    link: "https://suntechorganization.com/"
  },
  {
    title: "Software Development",
    image: softwaredevelopment,
    desc: "Custom software solutions built for modern businesses.",
    link: "https://suntechorganization.com/"
  },
  {
    title: "IT Consulting",
    image: itconsulting,
    desc: "Professional consulting services for business transformation.",
    link: "https://suntechorganization.com/"
  },
  {
    title: "Backend Support",
    image: backendsupport,
    desc: "Reliable backend systems and technical support services.",
    link: "https://suntechorganization.com/"
  },
  {
    title: "Multi Seller Platform",
    image: multiseller,
    desc: "Smart multi seller ecosystems for growing businesses.",
    link: "https://arshithfresh.com/"
  }
];

const companyImages = [

  studentsworking,

  businessmeetings,

  collaboration

];
  return (

    <>
     <Navbar />
    <div className="scroll-progress"></div>


      {/* HERO */}
    <section
  className="hero-section"
  data-aos="fade-up"
  style={{
    backgroundImage:
    `url(${slides[currentSlide].image})`
  }}
>

  <div className="hero-overlay">
   <button
  className="hero-arrow right-arrow"
  onClick={() =>
    setCurrentSlide(
      currentSlide === slides.length - 1
        ? 0
        : currentSlide + 1
    )
  }
>
  ❯
</button>

<button
  className="hero-arrow right-arrow"
  onClick={() =>
    setCurrentSlide(
      currentSlide === slides.length - 1
        ? 0
        : currentSlide + 1
    )
  }
>
  ❯
</button>
    <span className="hero-tag">
      {slides[currentSlide].tag}
    </span>

    <h1>
      {slides[currentSlide].title}
    </h1>

    <p>
      {slides[currentSlide].desc}
    </p>

    <div className="hero-buttons">
     {currentSlide === 0 && (

  <div className="organic-stamp">

    <span>100%</span>

    ORGANIC

  </div>

)}
  {

    slides[currentSlide].external ? (

      <a
        href={slides[currentSlide].button1Link}
        target="_blank"
        rel="noreferrer"
        className="primary-btn"
      >

        {slides[currentSlide].button1}

      </a>

    ) : (

      <Link
        to={slides[currentSlide].button1Link}
        className="primary-btn"
      >

        {slides[currentSlide].button1}

      </Link>

    )

  }

  <Link
    to={slides[currentSlide].button2Link}
    className="secondary-btn"
  >

    {slides[currentSlide].button2}

  </Link>

</div>

  </div>

</section>
    <section
  className="modern-company-section"
  data-aos="fade-right"
>

  <div className="company-intro-image">

    <img
  src={companyImages[currentCompanyImage]}
  alt=""
/>

  </div>

  <div className="company-intro-content">

    <span>
      Since 2019
    </span>

    <h2>
      Building Innovation Across Industries
    </h2>

    <p>
      Arshith Group is a growing business organization delivering
      innovative IT services, technology solutions and IT consulting
      across multiple industries.
    </p>

  </div>

</section>

      {/* ECOSYSTEM */}
{/* ECOSYSTEM */}

<section
  id="ecosystem"
  className="business-ecosystem fade-up-section"
  data-aos="fade-up"
>

  <h2>
    Our Arshith Group Ecosystem
  </h2>

  <p className="section-subtitle">s

    Building strong digital ecosystems through innovation,
    technology and scalable business solutions.

  </p>

  <div className="ecosystem-grid">

    {/* CARD 1 */}

    <a
      href="https://arshithfresh.com/"
      target="_blank"
      rel="noreferrer"
      className="eco-card"
    >

      <div className="eco-image">

        <img
          src={arshithfresh}
          alt="Arshith Fresh"
        />

      </div>

      <div className="eco-content">

        <h3>
          Arshith Fresh →
        </h3>

        <h4>
          E-commerce Fresh Products
        </h4>

        <p>
          Delivering premium natural products,
          cold pressed oils and ecommerce experiences.
        </p>

      </div>

    </a>

    {/* CARD 2 */}

    <a
      href="#"
      className="eco-card"
data-aos="zoom-in"
    >

      <div className="eco-image">

        <img
          src={arshithinfotech}
          alt="Arshith Infotech"
        />

      </div>

      <div className="eco-content">

        <h3>
          Arshith Infotech →
        </h3>

        <h4>
          IT Services & Solutions
        </h4>

        <p>
          Smart software systems and scalable
          technology solutions for businesses.
        </p>

      </div>

    </a>

    {/* CARD 3 */}

    <a
      href="https://suntechorganization.com/"
      target="_blank"
      rel="noreferrer"
      className="eco-card"
    >

      <div className="eco-image">

        <img
          src={suntech}
          alt="Suntech Solutions"
        />

      </div>

      <div className="eco-content">

        <h3>
          Suntech Solutions →
        </h3>

        <h4>
          Technology & IT Solutions
        </h4>

        <p>
          Advanced consulting, backend support
          and business transformation services.
        </p>

      </div>

    </a>

  </div>

</section>
{/* JOURNEY */}
<section
  className="journey-section"
  data-aos="fade-left"
>

  <img
    src={businessmeetings}
    alt=""
    className="journey-bg"
  />

  <div className="journey-left">

    <h2>
      Our Journey
    </h2>

    <p className="journey-text">

     From a growing technology initiative
to a multi-service business ecosystem,
our journey represents innovation,
business excellence and continuous growth.

    </p>

  </div>

  <div className="journey-grid">

   <div
  className="journey-card"
  data-aos="fade-up"
>

      <h3>
        2019
      </h3>

      <p>
        Started as Suntech Organization
        with a vision to provide innovative
        business and technology solutions.
      </p>

    </div>

    <div className="journey-card">

      <h3>
        2021
      </h3>

      <p>
        Expanded IT services including
        consulting, digital services and
        backend business solutions.
      </p>

    </div>

    <div className="journey-card">

      <h3>
        2024
      </h3>

      <p>
        Expanded Arshith Fresh E-Commerce
        services and strengthened digital
        business operations.
      </p>

    </div>

    <div className="journey-card">

      <h3>
        2025
      </h3>

      <p>
        Arshith Group was officially founded
        with a stronger vision towards
        innovation, technology and growth.
      </p>

    </div>

  </div>

</section>
      {/* SERVICES */}

     <section
  className="services-section"
  data-aos="fade-up"
>
       

        <h2>
          ✨ Innovation In Action ✨ 
        </h2>

        <p className="section-subtitle">

        Delivering innovative digital services and business growth solutions across industries.

        </p>

        <div className="services-grid">

          {
            services.map((service,index)=>(

              <a
                href={service.link || "#"}
                target="_blank"
                rel="noreferrer"
               className="service-card"
data-aos="zoom-in"
                key={index}
              >

                <img
                  src={service.image}
                  alt=""
                />

                <div className="service-overlay">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.desc}
                  </p>

                </div>

              </a>

            ))
          }

        </div>

      </section>

     {/* VALUES */}

<section
  className="values-section"
  data-aos="fade-right"
>
  <h2>
      Our Core Foundations
  </h2>

  <p className="section-subtitle">

    Our foundation is built on innovation,
    technology, trust and sustainable growth
    that drive meaningful business transformation.

  </p>

  <div className="values-grid">

    <div
  className="value-card"
  data-aos="zoom-in"
>

      <img src={innovation} alt="" />

      <h3>
        Innovation
      </h3>

    </div>

    <div className="value-card">

      <img src={technology} alt="" />

      <h3>
        Technology
      </h3>

    </div>

    <div className="value-card">

      <img src={growth} alt="" />

      <h3>
        Growth
      </h3>

    </div>

    <div className="value-card">

      <img src={trust} alt="" />

      <h3>
        Trust
      </h3>

    </div>

    <div className="value-card">

      <img src={sustainability} alt="" />

      <h3>
        Sustainability
      </h3>

    </div>

  </div>

</section>


{/* WHY CHOOSE US */}

<section
  className="why-section"
  data-aos="fade-up"
>

  <div className="why-header">

    <span>
      Why Choose Us
    </span>

    <h2>
      Why Choose Arshith Group
    </h2>

    <p>
      We combine innovation, technology and trusted business
      strategies to create scalable digital solutions for
      industries and future-ready businesses.
    </p>

  </div>

  <div className="why-grid">

    <div
  className="why-card"
  data-aos="zoom-in"
>

  <img
    src={digitalmarketing}
    alt="Innovation"
  />

  <h3>Innovation Driven</h3>

  <p>
    We deliver modern digital solutions with innovative strategies and future-focused technologies.
  </p>

</div>

    <div className="why-card">

  <img
    src={businessmeetings}
    alt="Partnerships"
  />

  <h3>Trusted Partnerships</h3>

  <p>
    Building long-term relationships through transparency, trust and customer satisfaction.
  </p>

</div>

    <div className="why-card">

  <img
    src={softwaredevelopment}
    alt="Expertise"
  />

  <h3>Industry Expertise</h3>

  <p>
    Delivering expertise across IT services, ecommerce and digital transformation.
  </p>

</div>

    <div className="why-card">

  <img
    src={collaboration}
    alt="Growth"
  />

  <h3>Scalable Growth</h3>

  <p>
    Helping businesses grow with scalable systems, smart technology and sustainable strategies.
  </p>

</div>

  </div>

</section>
{/* CEO */}

<section
  className="ceo-section"
  data-aos="fade-right"
>

  <div className="ceo-container">

    <div className="ceo-image">

      <img src={ceo} alt="CEO" />

    </div>

    <div className="ceo-content">

      <span className="ceo-tag">
        Message From Our CEO
      </span>

      <h2>
        Farook N
      </h2>

      <h4>
        Chief Executive Officer
      </h4>

      <p>

        Growth is not just about business,
        it is about creating value, empowering people
        and building opportunities for future generations.

        Through Arshith Group, our vision is to create
        sustainable businesses driven by innovation,
        trust, technology and meaningful impact.

      </p>

      <div className="founder-links">

        <a
          href="https://www.linkedin.com/in/farook-n-2bb2b5344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="linkedin-btn"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/farook_suntech_arshith?igsh=MW1mYW05MDAwb3JwbQ=="
          target="_blank"
          rel="noreferrer"
          className="insta-btn"
        >
          Instagram
        </a>

      </div>

    </div>

  </div>

</section>
  
{/* IMPACT */}

{/* IMPACT */}

<section className="impact-section">

  <div
  className="impact-card"
  data-aos="zoom-in"
>

    <div className="impact-number">
      7+
    </div>

    <h3>
      Years Building Innovation
    </h3>

  </div>

 <div
  className="impact-card"
  data-aos="zoom-in"
>

    <div className="impact-number">
      10+
    </div>

    <h3>
      Strategic Business Solutions
    </h3>

  </div>

 <div
  className="impact-card"
  data-aos="zoom-in"
>

    <div className="impact-number">
      100+
    </div>

    <h3>
      Premium Products Delivered
    </h3>

  </div>

 <div
  className="impact-card"
  data-aos="zoom-in"
>

    <div className="impact-number">
      30K+
    </div>

    <h3>
      Trusted Customer Community
    </h3>

  </div>

</section>
{/* LATEST NEWS */}

<section className="home-news-section">

  <div className="home-news-header">

    <h2>
      Latest Updates
    </h2>

    <Link to="/latestupdates">

      <button>
        View All Posts
      </button>

    </Link>

  </div>

  <div className="home-news-scroll">

    {

      homeNews.map((item,index)=>(

        <div
          className="home-news-card"
data-aos="zoom-in"
          key={index}
        >

          <img
            src={item.image}
            alt=""
          />

          <div className="home-news-content">

            <span>
              May 2026
            </span>

            <h3>
              {item.title}
            </h3>

          </div>

        </div>

      ))

    }

  </div>

</section>
{/* AWARDS */}

<section
  className="awards-section"
  data-aos="fade-left"
>

  <h2>
    Awards & Recognition
  </h2>

  <p className="section-subtitle">

    Our dedication towards innovation,
    leadership and business excellence
    continues to earn recognition and appreciation.

  </p>

  <div className="awards-grid">

    <div
  className="award-card"
  data-aos="zoom-in"
>

      <img src={awardceremony} alt="" />

     <h3 className="award-title">
  Best Performance of the Company
</h3>

<div className="award-badge">
  Mar - 2024
</div>

<p className="award-location">

  Annual Summit - Chennai

</p>

    </div>

    <div className="award-card">

      <img src={companyevents} alt="" />

     <h3 className="award-title">
  Best Leadership Award
</h3>

<div className="award-badge">
   Mar - 2023
</div>

<p className="award-location">

  Annual Achievements Awards - Chennai

</p>

    </div>

  </div>

</section>

      {/* CONTACT */}

      <section
  className="contact-section"
  data-aos="fade-up"
>
        <div className="contact-circle contact-circle1"></div>
<div className="contact-circle contact-circle2"></div>
<div className="contact-circle contact-circle3"></div>

        <div className="contact-box">

          <h2>
  Let’s Shape The Future Together ❤️
</h2>

          <p className="contact-text">

             Connect with Arshith Group for partnerships,
  business growth and innovative digital solutions.


          </p>

          <form>

  <div className="input-box">

    <label>
      Full Name
    </label>

    <input
      type="text"
      placeholder="Enter your full name"
    />

  </div>

  <div className="input-box">

    <label>
      Email Address
    </label>

    <input
      type="email"
      placeholder="Enter your email"
    />

  </div>

  <div className="input-box">

    <label>
      Phone Number
    </label>

    <input
      type="text"
      placeholder="+91 9876543210"
    />

  </div>

  <div className="input-box">

    <label>
      Select Query
    </label>

    <select>

      <option>
        Careers
      </option>

      <option>
        Internships
      </option>

      <option>
        Business Queries
      </option>

      <option>
        Partnership
      </option>

    </select>

  </div>

  <div className="input-box full-width">

    <label>
      Message
    </label>

    <textarea
      placeholder="Write your message here..."
    ></textarea>

  </div>

  <button>
    Send Message →
  </button>

</form>
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

export default Home;