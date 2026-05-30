import logo from "../assets/logo/arshithlogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img src={logo} alt="logo" className="footer-logo" />

          <p>
            Arshith Group is committed to innovation, technology and
            sustainable business growth.
          </p>
        </div>

        <div>
          <h3>About</h3>
          <p>About Us</p>
          <p>Leadership</p>
          <p>Our Journey</p>
        </div>

        <div>
          <h3>Businesses</h3>
          <p>IT Consulting</p>
          <p>Digital Marketing</p>
          <p>Software Development</p>
        </div>

        <div>
          <h3>Connect</h3>
          <p>Careers</p>
          <p>News</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Arshith Group. Building Innovation Across Industries.
      </div>
    </footer>
  );
}

export default Footer;