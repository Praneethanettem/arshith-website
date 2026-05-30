import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/internshipdetails.css";

import hero1 from "../assets/hero/heroo1.webp";
import hero2 from "../assets/hero/heroo2.jpg";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaFileAlt,
  FaChartLine,
  FaLaptopCode,
  FaCode,
  FaCloud,
  FaUsers
} from "react-icons/fa";

import careergrowth from "../assets/internships/careergrowth.webp";

import studentsworking from "../assets/internships/studentsworking.jpg";

import reactdev from "../assets/jobs/reactdev.jpg";

import frontend from "../assets/internships/frontend.jpeg";

import youngdevelopers from "../assets/internships/youngdevelopers.jpg";
import paymentqr from "../assets/news/paymentqr.png";


function InternshipDetails() {

  useEffect(() => {

    if (window.location.hash) {

      const id = window.location.hash.replace("#", "");

      const element = document.getElementById(id);

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth"
          });

        }, 200);

      }

    }

  }, []);

  const [formData, setFormData] = useState({

    fullname: "",
    email: "",
    phone: "",
    role: "",
    duration: "",
    qualification: "",
    status: "",
    message: ""

  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });
    
  };
  const handleFileChange = (e) => {

  setResume(e.target.files[0]);

};

  const handleSubmit = async (e) => {

  e.preventDefault();

  const data = new FormData();

  data.append("fullname", formData.fullname);

  data.append("email", formData.email);

  data.append("phone", formData.phone);

  data.append("role", formData.role);

  data.append("duration", formData.duration);

  data.append("qualification", formData.qualification);

  data.append("status", formData.status);

  data.append("message", formData.message);

  if (resume) {

    data.append("resume", resume);

  }

  try {

    const response = await fetch(
      "http://localhost:5000/apply",
      {

        method: "POST",

        body: data

      }
    );

    const result = await response.text();

    alert(result);

    console.log(result);

  }

  catch (error) {

    console.log(error);

    alert("Application Failed");

  }

};

  return (

    <>
      <Navbar />
      {/* ================= HERO SECTION ================= */}

      <section className="details-hero-section">

        <img
          src={frontend}
          alt=""
          className="details-hero-bg"
        />

        <div className="details-hero-overlay">

          <div className="details-hero-content">

            <h1>
             Build Your Career With Us
            </h1>

            <p>
              Gain real-time industry exposure,
              practical frontend development
              experience and career-focused
              learning through guided
              professional training.
            </p>

            <div className="details-hero-buttons">
<a href="#internship-form">
  Apply For Internship →
</a>

       <Link to="/careers">
  Back To Internship →
</Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="intro-section">

        <div className="intro-image-slider">

  <img
    src={hero1}
    alt=""
    className="intro-slide"
  />

  <img
    src={careergrowth}
    alt=""
    className="intro-slide"
  />

  <img
    src={studentsworking}
    alt=""
    className="intro-slide"
  />

</div>

        <div className="intro-content">

          <h2>
            Introduction & Program Overview
          </h2>

          <p>
            Arshith Fresh India Pvt. Ltd.
            & Suntech Solutions are pleased
            to provide an internship program
            designed to deliver practical
            exposure and industry-relevant
            frontend development skills.
          </p>

          <p>
            This internship program focuses
            on undergraduate students,
            especially 3rd Year B.Tech
            students who are looking to
            improve practical skills,
            industry exposure and placement
            readiness.
          </p>

        </div>

      </section>


      {/* ================= OBJECTIVES ================= */}

      <section className="objective-section">
<div className="objective-bg-slider">

  <img
    src={hero1}
    alt=""
    className="objective-bg-img"
  />

  <img
    src={hero2}
    alt=""
    className="objective-bg-img"
  />

</div>
        <div className="section-heading">

          <h2>
            Program Objectives
          </h2>

        </div>

        <div className="objective-grid">

          <div className="objective-card">
            <h3>01</h3>
            <h4>Hands-on Experience</h4>
            <p>
              Real-time project exposure.
            </p>
          </div>

          <div className="objective-card">
            <h3>02</h3>
            <h4>Industry Skills</h4>
            <p>
              Modern IT skill development.
            </p>
          </div>

          <div className="objective-card">
            <h3>03</h3>
            <h4>Problem Solving</h4>
            <p>
              Analytical thinking enhancement.
            </p>
          </div>

          <div className="objective-card">
            <h3>04</h3>
            <h4>Career Preparation</h4>
            <p>
              Placement readiness training.
            </p>
          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}
{/* ================= HIGHLIGHTS ================= */}

<section className="highlights-section">

  <div className="section-heading">

    <h2>
      Program Highlights
    </h2>

  </div>

  <div className="highlights-grid">

    {/* CARD 1 */}

    <div className="highlight-card">

      <img
        src={frontend}
        alt=""
      />

      <div className="highlight-content">

        <h3>
          ★ Real-Time Projects
        </h3>

        <p>
          Industry-level development exposure.
        </p>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="highlight-card">

      <img
        src={studentsworking}
        alt=""
      />

      <div className="highlight-content">

        <h3>
          ★ Client Interaction
        </h3>

        <p>
          Exposure to global communication.
        </p>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="highlight-card">

      <img
        src={careergrowth}
        alt=""
      />

      <div className="highlight-content">

        <h3>
          ★ Mentorship
        </h3>

        <p>
          Expert professional guidance.
        </p>

      </div>

    </div>

    {/* CARD 4 */}

    <div className="highlight-card">

      <img
        src={reactdev}
        alt=""
      />

      <div className="highlight-content">

        <h3>
          ★ Industry Workflow
        </h3>

        <p>
          SDLC-based project execution.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ================= DURATION ================= */}

      <section className="duration-section">

        <div className="duration-card">

          <h2>
            Internship Duration
          </h2>

          <h3>
            6 Months Internship Program
          </h3>

          <p>
            The internship program is designed
            to provide in-depth learning,
            project exposure and industry-level
            practical implementation experience.
          </p>
<a
  href="#internship-form"
  className="duration-apply-btn"
>
  Apply For Internship →
</a>
        </div>

      </section>


      {/* ================= LEARNING MODULES ================= */}

      <section className="modules-section">

        <div className="section-heading">

          <h2>
            Learning Modules & Technical Skills
          </h2>

        </div>

        <div className="modules-grid">

  {/* CARD 1 */}

  <div className="module-card">

    <div className="module-top">

      <div className="module-icon">
        <FaFileAlt />
      </div>

      <h3>1</h3>

    </div>

    <h4>
      Project Requirement Documentation
    </h4>

    <p>
      Client requirement understanding,
      documentation and reporting.
    </p>

  </div>

  {/* CARD 2 */}

  <div className="module-card">

    <div className="module-top">

      <div className="module-icon">
        <FaChartLine />
      </div>

      <h3>2</h3>

    </div>

    <h4>
      Project Quotation & Analysis
    </h4>

    <p>
      Cost estimation and system planning.
    </p>

  </div>

  {/* CARD 3 */}

  <div className="module-card">

    <div className="module-top">

      <div className="module-icon">
        <FaLaptopCode />
      </div>

      <h3>3</h3>

    </div>

    <h4>
      Project Implementation
    </h4>

    <p>
      Development, testing and deployment.
    </p>

  </div>

  {/* CARD 4 */}

  <div className="module-card">

    <div className="module-top">

      <div className="module-icon">
        <FaCode />
      </div>

      <h3>4</h3>

    </div>

    <h4>
      Technical Skills Coverage
    </h4>

    <p>
      HTML, CSS, JavaScript, React,
      Python, Flask and more.
    </p>

  </div>

  {/* CARD 5 */}

  <div className="module-card">

    <div className="module-top">

      <div className="module-icon">
        <FaCloud />
      </div>

      <h3>5</h3>

    </div>

    <h4>
      UI/UX & Cloud Exposure
    </h4>

    <p>
      Figma, Canva, AWS basics and
      deployment.
    </p>

  </div>

  {/* CARD 6 */}

  <div className="module-card">

    <div className="module-top">

      <div className="module-icon">
        <FaUsers />
      </div>

      <h3>6</h3>

    </div>

    <h4>
      Soft Skills Development
    </h4>

    <p>
      Communication, teamwork and
      presentation.
    </p>

  </div>

</div>

      </section>


      {/* ================= IMPORTANT NOTE ================= */}

      <section
  className="important-note-section"

  style={{
    backgroundImage:
    `linear-gradient(
      rgba(0,0,0,0.45),
      rgba(0,0,0,0.42)
    ),
    url(${youngdevelopers})`
  }}
>
<div className="floating-words">

  <span>Placement</span>

  <span>Career Growth</span>

  <span>Hiring</span>

  <span>Future Ready</span>

  <span>Success</span>

  <span>Opportunities</span>

  <span>Internship</span>

</div>
        <div className="important-note-card">

          <h2>
            Important Note
          </h2>

          <p>
            Only students who successfully
            complete this 6-month internship
            program will become eligible
            to participate in future campus
            recruitment opportunities conducted
            by our organizations.
          </p>

        </div>

      </section>


      {/* ================= REGISTRATION ================= */}

      <section className="registration-section">

        <div className="registration-card">

          <h2>
            Registration Details
          </h2>

          <h3>
            ₹1,999/-
          </h3>

          <p>
            One-time Registration Fee
          </p>

          <ul>

            <li>
              ✔ Training & mentorship
            </li>

            <li>
              ✔ Real-time projects
            </li>

            <li>
              ✔ Technical support
            </li>

            <li>
              ✔ Interview preparation
            </li>

            <li>
              ✔ Placement-oriented training
            </li>

          </ul>

          <div className="payment-details">

            <p>
              UPI ID : nfarookafi@oksbi
            </p>
            <p>
              GPay : 9493836029
            </p>

            <p>
              Holder Name : Farook N
            </p>
            
             <img
    src={paymentqr}
    alt=""
    className="payment-qr"
  />
          </div>

        </div>

      </section>
{/* APPLY FORM */}

<section
  className="career-form-section"
  id="internship-form"
>

  <div className="section-title">

    <h2>
      Apply With Us
    </h2>

    <p>
      Start your professional journey with Arshith Group.
    </p>

  </div>

  <form
  className="career-form"
  onSubmit={handleSubmit}
>

    {/* FULL NAME */}

    <input
      type="text"
      placeholder="Full Name"
      name="fullname"
      onChange={handleChange}
    />

    {/* EMAIL */}

    <input
      type="email"
      placeholder="Email Address"
      name="email"
      onChange={handleChange}
    />

    {/* PHONE */}

    <input
      type="text"
      placeholder="Phone Number"
      name="phone"
      onChange={handleChange}
    />

    {/* ROLE */}

    <select
      name="role"
      onChange={handleChange}
    >

      <option value="">
  Select Interested Role
</option>




<option value="Backend Development">
  Backend Development
</option>
<option value="Frontend Development">
  Frontend Development
</option>
<option value="UI/UX Design">
  UI/UX Design
</option>

<option value="Digital Marketing">
  Digital Marketing
</option>

    </select>

    {/* INTERNSHIP DURATION */}

    <select
      name="duration"
      onChange={handleChange}
    >

      <option>
        Select Internship Duration
      </option>

     <option value="3 Months Internship">
  3 Months Internship
</option>

<option value="6 Months Internship">
  6 Months Internship
</option>

    </select>

    {/* QUALIFICATION */}

    <input
      type="text"
      placeholder="College / Qualification"
      name="qualification"
      onChange={handleChange}
    />

    {/* STATUS */}

    <select
      name="status"
      onChange={handleChange}
    >

     <option value="">
  Current Status
</option>

<option value="Fresher">
  Fresher
</option>

<option value="Graduate">
  Graduate
</option>

    </select>

    {/* RESUME */}

    <label>
      Upload Resume
    </label>

    <input
      type="file"
      onChange={handleFileChange}
    />

    {/* MESSAGE */}

    <textarea
      placeholder="Tell us about yourself..."
      name="message"
      onChange={handleChange}
    ></textarea>

    {/* BUTTON */}

    <button type="submit">
      Submit Application
    </button>

  </form>

</section>

      {/* ================= FINAL QUOTE ================= */}

      <section className="quote-section">

        <div className="quote-overlay">

          <h2>
            “Great developers are not born —
            they are built through real experience.”
          </h2>

      <a href="#internship-form">
  Apply For Internship →
</a>
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

export default InternshipDetails;