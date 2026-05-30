import "../styles/main.css";
import React from "react";

import "../styles/internshipdetails.css";

import news1 from "../assets/news/news1.jpeg";
import news2 from "../assets/news/news2.jpeg";
import news3 from "../assets/news/news3.jpeg";
import news4 from "../assets/news/news4.jpeg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import newshero from "../assets/news/newshero.jpg";

import latestupdate from "../assets/news/latestupdate (2).jpeg";
import sreyashiring from "../assets/news/Sreyas hiring.jpeg";
import nagarjunahiring from "../assets/news/Nagarjuna hiring.jpeg";
import kluhiring from "../assets/news/KLU hiring.jpeg";


import gallery1 from "../assets/news/gallery1.jpeg";
import gallery2 from "../assets/news/gallery2.jpeg";
import gallery3 from "../assets/news/gallery3.jpeg";
import gallery4 from "../assets/news/gallery4.jpeg";
import gallery5 from "../assets/news/gallery5.jpeg";
import gallery6 from "../assets/news/gallery6.jpeg";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

function LatestUpdates() {

  const newsData = [

  {
    image: news1,

    title:
    "A Defining Moment For Future Growth",

    desc:
    "Arshith Group continues to empower future innovators through leadership-driven initiatives and impactful industry interactions."
  },

  {
    image: news2,

    title:
    "Empowering Minds For Tomorrow’s Leadership",

    desc:
    "Interactive sessions and collaborative programs inspire students and professionals to build innovation and leadership skills."
  },

  {
    image: news3,

    title:
    "Commitment Towards Innovation & Collaboration",

    desc:
    "Strategic initiatives and partnerships continue to strengthen Arshith Group’s vision for growth and business transformation."
  },

  {
    image: news4,

    title:
    "Building Stronger Industry Connections",

    desc:
    "Through meaningful collaborations and future-focused discussions, Arshith Group continues to create impactful opportunities."
  },

  {
    image: latestupdate,

    title:
    "A Defining Moment for Future Growth and Direction",

    desc:
    "Arshith Group continues expanding its vision through innovation, strategic leadership and impactful digital transformation initiatives."
  },

  {
    image: sreyashiring,

    title:
    "Sreyas Institute Campus Hiring Drive",

    desc:
    "Arshith Group hired talented and innovative students from Sreyas Institute to empower future-ready technology and business solutions."
  },

  {
    image: nagarjunahiring,

    title:
    "Nagarjuna College Recruitment Initiative",

    desc:
    "Young professionals and skilled graduates were selected through Arshith Group’s collaborative hiring and internship opportunities."
  },

  {
    image: kluhiring,

    title:
    "KLU Talent Acquisition Program",

    desc:
    "Arshith Group welcomed emerging talent from KLU College to strengthen innovation, leadership and industry-focused development."
  }

];

  return (

    <>
    <Navbar />

      <div className="scroll-progress"></div>

      {/* HERO */}

      <section
  className="news-hero"
  style={{
    backgroundImage: `url(${newshero})`
  }}
>

        <div className="news-overlay">

          <h1>
            Latest Updates & Highlights
          </h1>

          <p>

            Stay connected with the latest
            achievements, collaborations,
            events and activities from Arshith Group.

          </p>

        </div>

      </section>

      {/* TICKER */}

<div className="news-ticker">

  <div className="news-track">

    <span>🚀 Leadership Events</span>

    <span>💼 Innovation Programs</span>

    <span>📢 Internship Drives</span>

    <span>🤝 Business Collaborations</span>

    <span>🎯 Industry Workshops</span>

    {/* Duplicate again for smooth infinite scroll */}

    <span>🚀 Leadership Events</span>

    <span>💼 Innovation Programs</span>

    <span>📢 Internship Drives</span>

    <span>🤝 Business Collaborations</span>

    <span>🎯 Industry Workshops</span>

  </div>

</div>

      {/* NEWS CARDS */}

      <section className="news-section">

        <h2>
          Featured Highlights
        </h2>

        <div className="news-grid">

          {

            newsData.map((item,index)=>(

              <div
                className="news-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt=""
                />

                <div className="news-content">

                  <span>
                    May 2026
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                </div>

              </div>

            ))

          }

        </div>

      </section>
<section className="gallery-section">
  <h2>Event Gallery</h2>

  <div className="gallery-scroll">

    <img src={gallery1} alt="" />
    <img src={gallery2} alt="" />
    <img src={gallery3} alt="" />
    <img src={gallery4} alt="" />
    <img src={gallery5} alt="" />
    <img src={gallery6} alt="" />

    <img src={kluhiring} alt="" />
    <img src={latestupdate} alt="" />
    <img src={nagarjunahiring} alt="" />
    <img src={sreyashiring} alt="" />

    <img src={news1} alt="" />
    <img src={news2} alt="" />
    <img src={news3} alt="" />
    <img src={news4} alt="" />

  </div>
</section>
      {/* FUTURE */}

      <section className="future-section">

        <h2>
          What’s Next At Arshith Group?
        </h2>

        <p>

          Arshith Group continues to expand through
          innovation, technology and collaborative
          initiatives focused on creating meaningful
          opportunities for businesses and communities.

        </p>

      </section>

      {/* SUBSCRIBE */}

      <section className="subscribe-section">

        <h2>
          Stay Updated With Arshith Group
        </h2>

        <div className="subscribe-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

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

export default LatestUpdates;