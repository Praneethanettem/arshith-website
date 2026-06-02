import logo from "../assets/logo/arshithlogo.png";

function Footer() {
  return (
<footer className="footer">
  <div className="footer-grid">

    {/* ROW 1: Arshith Group - centered */}
    <div>
      <h2>Arshith Group</h2>
      <p>
        Arshith Group is committed to innovation,
        sustainability and excellence across multiple
        industries including E-Commerce, Technology
        and Digital Services.
      </p>
      <div className="social-links">
        <a href="https://www.instagram.com/farook_suntech_arshith" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/arshith-fresh-india-pvt-ltd/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="#"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/farook-n-2bb2b5344" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>
    </div>

    {/* ROW 2: About Us + Businesses side by side (wrapped) */}
    <div className="footer-row-2">

      {/* About Us */}
      <div className="footer-links">
        <h3>About Us</h3>
        <Link to="/about#companies">CEO Office</Link>
        <Link to="/about#leadership">Leadership</Link>
        <Link to="/about#journey">Our Journey</Link>
        <Link to="/about#awards">Awards</Link>
      </div>

      {/* Businesses */}
      <div className="footer-links">
        <h3>Businesses</h3>
        <p>E-Commerce</p>
        <p>Business Consulting</p>
        <p>Digital Marketing</p>
        <p>Software Development</p>
      </div>

    </div>

    {/* ROW 3: Connect */}
    <div className="footer-links">
      <h3>Connect</h3>
      <Link to="/about">About Us</Link>
      <Link to="/latestupdates">News</Link>
      <Link to="/">Business</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact Us</Link>
    </div>

  </div>
<div className="footer-made">
  Made with <span>♥</span> by Arshith Group Team
</div>
  <div className="footer-bottom">
    © 2026 Arshith Group. Building Innovation Across Industries.
  </div>
</footer>
  );
}

export default Footer;