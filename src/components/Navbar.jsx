import { useState } from "react";
import { Link } from "react-router-dom";
import arshithlogo from "../assets/logo/arshithlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  // Close everything
  const closeAll = () => {
    setMenuOpen(false);
    setBusinessOpen(false);
    setCareersOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={arshithlogo} alt="Arshith Group Logo" />
      </div>

      {/* HAMBURGER BUTTON - only visible on mobile via CSS */}
      <button
        className={`hamburger-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        {/* Close X button - only shows inside mobile menu */}
        <button className="mobile-close-btn" onClick={closeAll}>
          &times;
        </button>

        <Link to="/" onClick={closeAll}>
          Home
        </Link>

        <Link to="/about" onClick={closeAll}>
          About Us
        </Link>

        {/* BUSINESSES DROPDOWN */}
        <div className={`dropdown ${businessOpen ? "open" : ""}`}>
          <button
            className="dropdown-btn"
            onClick={() => setBusinessOpen(!businessOpen)}
          >
            Businesses ▾
          </button>
          <div className="dropdown-content">
            <a href="https://arshithfresh.com/" target="_blank" rel="noreferrer" onClick={closeAll}>
              E-Commerce
            </a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>
              Digital Marketing
            </a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>
              Software Development
            </a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>
              IT Consulting
            </a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>
              Backend Support
            </a>
          </div>
        </div>

        {/* CAREERS DROPDOWN */}
        <div className={`dropdown ${careersOpen ? "open" : ""}`}>
          <button
            className="dropdown-btn"
            onClick={() => setCareersOpen(!careersOpen)}
          >
            Careers ▾
          </button>
          <div className="dropdown-content">
            <a href="/careers#internships" onClick={closeAll}>
              Internships
            </a>
            <a href="/careers#jobs" onClick={closeAll}>
              Job Opportunities
            </a>
            <a href="/careers#culture" onClick={closeAll}>
              Work Culture
            </a>
          </div>
        </div>

        <Link to="/latestupdates" onClick={closeAll}>
          News
        </Link>

        <Link to="/contact" onClick={closeAll}>
          Contact Us
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
