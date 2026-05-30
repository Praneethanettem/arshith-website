
import "../styles/main.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";

// HERO IMAGES
import hero1 from "../assets/hero/heroo1.webp";
import hero2 from "../assets/hero/heroo2.jpg";
import hero3 from "../assets/hero/hero3updated.jpg";

// INTERNSHIP IMAGES
import frontend from "../assets/internships/frontend.jpeg";
import backend from "../assets/internships/backend.jpg";
import uiux from "../assets/internships/uiux.jpg";
import marketing from "../assets/internships/marketing.webp";

// JOB IMAGES
import reactdev from "../assets/jobs/reactdev.jpg";
import fullstack from "../assets/jobs/fullstack.webp";

import marketingexec from "../assets/jobs/marketingexec.jpg";

import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

import reacticon from "../assets/internships/reacticon.webp";
import htmlicon from "../assets/internships/htmlicon.jpg";
import cssicon from "../assets/internships/cssicon.jpg";
import javascripticon from "../assets/internships/javascript icon.png";
import githubicon from "../assets/internships/github icon.avif";
import vscodeicon from "../assets/internships/vscode icon.png";
import certificate from "../assets/internships/certificate.png";


import businessdev from "../assets/jobs/businessdev.webp";

// POSTER
import internshipposter from "../assets/posters/intership_poster.webp";

function Careers() {
  const [formData, setFormData] = useState({

  fullname: "",
  email: "",
  phone: "",
  role: "",
  message: ""

});
const location = useLocation();

useEffect(() => {

  if (location.hash) {

    const el = document.querySelector(location.hash);

    if (el) {

      el.scrollIntoView({
        behavior: "smooth"
      });

    }

  }

}, [location]);

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
  data.append("message", formData.message);
  data.append("resume", resume);

  try {

    const response = await axios.post(

      "http://localhost:5000/apply",

      data

    );

    alert(response.data);

  } catch (error) {

    console.log(error);

    alert("Submission Failed");

  }

};

  return (

    <>

      <Navbar />


<section className="careers-hero">

  <div className="hero-slider">

    <img
      src={hero1}
      className="hero-slide"
      alt=""
    />

    <img
      src={hero2}
      className="hero-slide"
      alt=""
    />

    <img
      src={hero3}
      className="hero-slide"
      alt=""
    />

    <img
      src={frontend}
      className="hero-slide"
      alt=""
    />

  </div>

  <div className="careers-overlay">

    <div className="hero-content">

      <div className="hero-badge">

        🚀 Front-End Developer Internship Program

      </div>

      <h1>

  Front-End Developer
  <span>
    Internship Program
  </span>

</h1>

      <p>

        Build modern responsive interfaces,
        work on real-time projects and
        experience industry-standard frontend
        development workflows through
        practical internship training.

      </p>

      <div className="hero-buttons">

        <Link to="/internship-details#internship-form">
  Apply Now →
</Link>

        <a
  href="/internship-details"
  className="details-btn"
>
  View Internship Details →
</a>

      </div>

    </div>

    {/* FLOATING ICONS */}

    <div className="floating-icons">

      <div className="tech-icon">

        <img
          src={reacticon}
          alt=""
        />

      </div>

      <div className="tech-icon">

        <img
          src={htmlicon}
          alt=""
        />

      </div>

      <div className="tech-icon">

        <img
          src={cssicon}
          alt=""
        />

      </div>

      <div className="tech-icon">

        <img
          src={javascripticon}
          alt=""
        />

      </div>

      <div className="tech-icon">

        <img
          src={githubicon}
          alt=""
        />

      </div>

      <div className="tech-icon">

        <img
          src={vscodeicon}
          alt=""
        />

      </div>

    </div>

  </div>

</section>
<div className="career-scroll">

  <div className="career-track">

    Internship Applications Open •
    Front-End Internship Program •
    Real-Time Project Experience •
    Industry-Level Training •
    Responsive UI Development •
    Portfolio Building •
    Internship Certification •
    Apply Today •
    Limited Seats Available •

  </div>

</div>


      {/* PROGRAMS */}

      {/* PROFESSIONAL LEARNING EXPERIENCE */}

<section className="overview-section">

  <div className="overview-heading">

    <h2>
      Professional Learning Experience
    </h2>

    <p>

      A structured internship program designed
      to help students gain practical frontend
      development skills through real-time
      implementation and guided learning.

    </p>

  </div>

  <div className="overview-grid">

    {/* CARD 1 */}

    <div className="overview-card">

      <span>
        01
      </span>

      <h3>
        Who Can Join
      </h3>

      <p>

        Ideal for freshers, students,
        aspiring developers and learners
        who want hands-on frontend
        development experience with
        real project exposure.

      </p>

    </div>

    {/* CARD 2 */}

    <div className="overview-card">

      <span>
        02
      </span>

      <h3>
        Program Workflow
      </h3>

      <p>

        Participants will complete UI tasks,
        responsive layouts, frontend challenges
        and guided implementations that reflect
        actual company-level workflows.

      </p>

    </div>

    {/* CARD 3 */}

    <div className="overview-card">

      <span>
        03
      </span>

      <h3>
        Practical Learning
      </h3>

      <p>

        The internship focuses on real
        implementation, clean coding
        practices, responsiveness,
        collaboration and portfolio-oriented
        frontend development.

      </p>

    </div>

  </div>

</section>

      {/* INTERNSHIPS */}

     {/* ================= WHAT YOU WILL GAIN ================= */}

<section className="gain-section">

  <div className="gain-heading">

    <h2>
      Career Growth & Skill Development
    </h2>

    <p>

      Gain practical experience, industry exposure
      and modern frontend development skills
      through guided real-time internship learning.

    </p>

  </div>

  <div className="gain-grid">

    {/* CARD 1 */}

    <div className="gain-card">

      <img
        src={frontend}
        alt=""
      />

      <div className="gain-content">

        <h3>
          Strong UI Skills
        </h3>

        <p>

          Learn to create responsive layouts,
          attractive interfaces and modern
          frontend experiences using
          industry-level implementation practices.

        </p>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="gain-card">

      <img
        src={backend}
        alt=""
      />

      <div className="gain-content">

        <h3>
          Real-Time Projects
        </h3>

        <p>

          Build practical frontend projects,
          responsive sections and portfolio-ready
          implementations through hands-on learning.

        </p>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="gain-card">

      <img
        src={businessdev}
        alt=""
      />

      <div className="gain-content">

        <h3>
          Industry Workflow
        </h3>

        <p>

          Understand how frontend teams work,
          collaborate and develop scalable
          user-focused applications in
          professional environments.

        </p>

      </div>

    </div>

  </div>

</section>

      {/* EXPERIENCE */}

      {/* ================= TOOLS & TECHNOLOGIES ================= */}

<section className="tech-section">

  <div className="tech-heading">

    <h2>
      Tools & Technologies
    </h2>

    <p>

      Learn modern frontend technologies,
      development tools and real-world
      implementation workflows used in
      professional industry projects.

    </p>

  </div>

  <div className="tech-grid">

    {/* HTML */}

    <div className="tech-card">

      <img
        src={htmlicon}
        alt=""
      />

      <h3>
        HTML5
      </h3>

      <span>
        Structure & Semantic Web Design
      </span>

    </div>

    {/* CSS */}

    <div className="tech-card">

      <img
        src={cssicon}
        alt=""
      />

      <h3>
        CSS3
      </h3>

      <span>
        Responsive Layouts & Styling
      </span>

    </div>

    {/* JS */}

    <div className="tech-card">

      <img
        src={javascripticon}
        alt=""
      />

      <h3>
        JavaScript
      </h3>

      <span>
        Interactive Frontend Functionality
      </span>

    </div>

    {/* REACT */}

    <div className="tech-card">

      <img
        src={reacticon}
        alt=""
      />

      <h3>
        React JS
      </h3>

      <span>
        Component-Based UI Development
      </span>

    </div>

    {/* GITHUB */}

    <div className="tech-card">

      <img
        src={githubicon}
        alt=""
      />

      <h3>
        GitHub
      </h3>

      <span>
        Project Hosting & Collaboration
      </span>

    </div>

    {/* VS CODE */}

    <div className="tech-card">

      <img
        src={vscodeicon}
        alt=""
      />

      <h3>
        VS Code
      </h3>

      <span>
        Professional Development Environment
      </span>

    </div>

    {/* EXTRA */}

    <div className="tech-card extra-tech">

      <img
        src={reacticon}
        alt=""
      />

      <h3>
        UI Components
      </h3>

      <span>
        Modern Interface Building Techniques
      </span>

    </div>

    <div className="tech-card extra-tech">

      <img
        src={githubicon}
        alt=""
      />

      <h3>
        Team Workflow
      </h3>

      <span>
        Industry-Level Development Process
      </span>

    </div>

  </div>

</section>

      {/* JOBS */}

    {/* ================= INTERNSHIP PLANS ================= */}

<section className="plans-section">

  <div className="plans-heading">

    <h2>
      Internship Duration Plans
    </h2>

    <p>

      Choose the internship program that
      matches your learning goals,
      practical experience level and
      career development journey.

    </p>

  </div>

  <div className="plans-grid">

    {/* 3 MONTHS */}
  <div className="plan-card">

      <div className="plan-badge">
        3 Months
      </div>

      <img
        src={frontend}
        alt=""
      />

      <div className="plan-content">

  <h5>
    Most Popular – Paid Program
  </h5>

  <p>

    In this program, students will work
    on multiple UI components,
    receive reviews and build responsive
    pages while gaining deeper
    practical frontend experience.

  </p>

  <ul>

    <li>
      ✔ Work on real-time projects
    </li>

    <li>
      ✔ Build responsive pages
    </li>

    <li>
      ✔ Portfolio development
    </li>

    <li>
      ✔ Practical implementation
    </li>

  </ul>

  <h6>
    Note :
  </h6>

  <span className="placement-note">
    No Placement Included
  </span>

  <h4>
    Registration Fee Only : ₹1,250
  </h4>

  <div className="plan-buttons">

  <Link to="/internship-details#internship-form">
  Apply For Internship →
</Link>

  <a
  href="/internship-details"
  className="know-more-btn"
>
  Know More →
</a>

</div>
</div>

    </div>


    {/* 6 MONTHS */}

    <div className="plan-card advanced-plan">

      <div className="plan-badge">
        6 Months
      </div>

      <img
        src={reactdev}
        alt=""
      />

      <div className="plan-content">

  <h5>
    Advanced – Paid Program
  </h5>

  <p>

    This internship is designed for
    undergraduate students including
    Degree and B.Tech students
    who are looking for advanced
    frontend practical exposure.

  </p>

  <ul>

    <li>
      ✔ Real-time project development
    </li>

    <li>
      ✔ Industry-standard training
    </li>

    <li>
      ✔ High-level practical exposure
    </li>

    <li>
      ✔ Team collaboration workflow
    </li>

    <li>
      ✔ Portfolio + deployment
    </li>

  </ul>

  <h6>
    Placement Opportunity :
  </h6>

  <span className="placement-note">

    Students who successfully complete
    the 6-month internship program
    will become eligible for future
    recruitment opportunities
    conducted by our organizations.

  </span>

  <h4>
    Registration Fee Only : ₹1,999
  </h4>

  <div className="plan-buttons">

 <Link to="/internship-details#internship-form">
  Apply For Internship →
</Link>

  <a
  href="/internship-details"
  className="know-more-btn"
>
  Know More →
</a>

</div>

</div>

    </div>

  </div>

</section>

{/* ================= BENEFITS SECTION ================= */}

<section className="benefits-section">

  <div className="benefits-heading">

    <h2>
      Benefits, Certification & Opportunities
    </h2>

    <p>

      Students participating in this
      internship program will gain
      structured learning exposure,
      practical implementation skills
      and professional frontend
      development experience.

    </p>

  </div>

  <div className="benefits-wrapper">

    {/* LEFT SIDE */}

    <div className="benefits-left">

      <h3>
        Student Benefits
      </h3>

      <div className="benefit-item">
        ✔ Gain real-time industry experience
      </div>

      <div className="benefit-item">
        ✔ Work on live frontend projects
      </div>

      <div className="benefit-item">
        ✔ Learn in-demand technologies
      </div>

      <div className="benefit-item">
        ✔ Improve confidence & teamwork
      </div>

      <div className="benefit-item">
        ✔ Build strong technical portfolio
      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="benefits-right">

      <img
        src={certificate}
        alt=""
      />

      <div className="certificate-content">

        <h3>
          Certification
        </h3>

        <p>

          Internship Completion Certificate
          will be awarded based on:

        </p>

        <ul>

          <li>
            ✔ Duration of internship
          </li>

          <li>
            ✔ Performance & participation
          </li>

          <li>
            ✔ Successful project completion
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

      {/* MORE OPPORTUNITIES */}

      <section className="more-opportunities workspace-bg">

        <div className="more-content">

  <span className="opportunity-tag">
    Career Growth • Innovation • Future Ready
  </span>

  <h2>
    Looking For More Opportunities?
  </h2>

  <p>

    Explore our growing ecosystem of
    internships, career opportunities and
    industry-driven experiences designed
    to help students and professionals
    build practical skills for the future.

  </p>

  <div className="more-highlight">

    <p>

      Discover implementation-focused learning,
      collaborative workspace culture and
      real-time project exposure with
      Arshith Group companies.

    </p>

  </div>

  <a
    href="https://arshithfresh.com/"
    target="_blank"
    rel="noreferrer"
  >

    Check Arshith Fresh

  </a>

</div>

      </section>

      {/* POSTER SECTION */}
{/* ================= CAREER OPPORTUNITIES SECTION ================= */}

<section className="career-opportunity-section">

  {/* LEFT IMAGE */}

  <div className="career-opportunity-image">

    <img
      src={internshipposter}
      alt=""
    />

  </div>

  {/* RIGHT CONTENT */}

  <div className="career-opportunity-content">

    <h2>
      Launch Your Career Journey
    </h2>

    <p>

      Transform your frontend learning
      into real industry exposure through
      guided projects, portfolio development
      and practical implementation workflows.

    </p>

    <div className="opportunity-points">

      <div className="opportunity-box">
        ✔ Real-time frontend exposure
      </div>

      <div className="opportunity-box">
        ✔ Industry-level learning
      </div>

      <div className="opportunity-box">
        ✔ Team collaboration experience
      </div>

      <div className="opportunity-box">
        ✔ Career-oriented portfolio building
      </div>

      <div className="opportunity-box">
        ✔ Internship completion certification
      </div>

      <div className="opportunity-box">
        ✔ Practical implementation experience
      </div>

    </div>

  </div>

</section>

      {/* TIMELINE */}

      <section className="process-section">

        <div className="section-title">

          <h2>
            Your Journey Starts Here
          </h2>

        </div>

        <div className="timeline">

          <div className="timeline-step">

            <div className="timeline-circle">
              1
            </div>

            <h3>
              Apply
            </h3>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-step">

            <div className="timeline-circle">
              2
            </div>

            <h3>
              Review
            </h3>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-step">

            <div className="timeline-circle">
              3
            </div>

            <h3>
              Interaction
            </h3>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-step">

            <div className="timeline-circle">
              4
            </div>

            <h3>
              Selection
            </h3>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-step">

            <div className="timeline-circle">
              5
            </div>

            <h3>
              Welcome
            </h3>

          </div>

        </div>

      </section>
      {/* ================= FINAL CTA SECTION ================= */}

<section className="final-cta-section">

  <img
    src={reactdev}
    alt=""
    className="final-cta-bg"
  />

  <div className="final-cta-overlay">

    <div className="final-cta-content">

      <h2>
        Start Your Front-End
        Career Journey Today
      </h2>

      <p>

        Join our internship program and gain
        real industry-level frontend development
        experience through practical projects,
        portfolio building and guided learning.

      </p>

      <div className="final-cta-buttons">

        <Link to="/internship-details#internship-form">
  Apply For Internship →
</Link>

        <a
          href="/internship-details"
          className="details-btn"
        >
          View Internship Details →
        </a>

      </div>

    </div>

  </div>

</section>

    

      {/* CULTURE */}

      <section
        className="culture-section"
        id="culture"
      >

        <div className="section-title">

          <h2>
            Life At Arshith Group
          </h2>

          <p>
            Innovation grows through teamwork and practical learning.
          </p>

        </div>

        <div className="culture-grid">

          <div className="culture-box">

            <h3>
              Innovation
            </h3>

            <p>

              Creative thinking and
              implementation-focused learning.

            </p>

          </div>

          <div className="culture-box">

            <h3>
              Collaboration
            </h3>

            <p>

              Build teamwork,
              communication and workflow skills.

            </p>

          </div>

          <div className="culture-box">

            <h3>
              Professional Growth
            </h3>

            <p>

              Improve practical skills
              through real-world exposure.

            </p>

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

export default Careers;