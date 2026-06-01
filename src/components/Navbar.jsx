import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arshithlogo from "../assets/logo/arshithlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [careersOpen, setCareersOpen]   = useState(false);
  const [isMobile, setIsMobile]         = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setBusinessOpen(false);
    setCareersOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" onClick={closeAll}>
          <img src={arshithlogo} alt="Arshith Group Logo" />
        </Link>
      </div>

      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{
            display:"flex", flexDirection:"column",
            justifyContent:"space-between",
            width:"28px", height:"20px",
            background:"none", border:"none",
            cursor:"pointer", padding:"0", zIndex:1001,
          }}
        >
          <span style={{
            display:"block", width:"100%", height:"3px",
            background:"#333", borderRadius:"3px",
            transition:"all 0.3s ease",
            transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
          }}/>
          <span style={{
            display:"block", width:"100%", height:"3px",
            background:"#333", borderRadius:"3px",
            transition:"all 0.3s ease",
            opacity: menuOpen ? 0 : 1,
          }}/>
          <span style={{
            display:"block", width:"100%", height:"3px",
            background:"#333", borderRadius:"3px",
            transition:"all 0.3s ease",
            transform: menuOpen ? "translateY(-9px) rotate(-45deg)" : "none",
          }}/>
        </button>
      )}

      <div className={`nav-links${menuOpen ? " mobile-open" : ""}`}>


        <Link to="/" onClick={closeAll}>Home</Link>
        <Link to="/about" onClick={closeAll}>About Us</Link>

        <div className={`dropdown${businessOpen ? " open" : ""}`}>
          <button className="dropdown-btn"
           onClick={() => {
  setBusinessOpen(!businessOpen);
  setCareersOpen(false);
}} >
            Businesses ▾
          </button>
          <div className="dropdown-content">
            <a href="https://arshithfresh.com/" target="_blank" rel="noreferrer" onClick={closeAll}>E-Commerce</a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>Digital Marketing</a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>Software Development</a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>IT Consulting</a>
            <a href="https://suntechorganization.com/" target="_blank" rel="noreferrer" onClick={closeAll}>Backend Support</a>
          </div>
        </div>

        <div className={`dropdown${careersOpen ? " open" : ""}`}>
          <button className="dropdown-btn"
           onClick={() => {
  setCareersOpen(!careersOpen);
  setBusinessOpen(false);
}} >
            Careers ▾
          </button>
          <div className="dropdown-content">
            <a href="/careers#internships" onClick={closeAll}>Internships</a>
            <a href="/careers#jobs" onClick={closeAll}>Job Opportunities</a>
            <a href="/careers#culture" onClick={closeAll}>Work Culture</a>
          </div>
        </div>

        <Link to="/latestupdates" onClick={closeAll}>News</Link>
        <Link to="/contact" onClick={closeAll}>Contact Us</Link>

      </div>
    </nav>
  );
}

export default Navbar;

