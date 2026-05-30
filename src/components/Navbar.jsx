import { Link } from "react-router-dom";
import arshithlogo from "../assets/logo/arshithlogo.png";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">

  <img
    src={arshithlogo}
    alt="Arshith Group Logo"
  />

</div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About Us
        </Link>

        <div className="dropdown">

          <button className="dropdown-btn">
            Businesses ▾
          </button>

          <div className="dropdown-content">

            <a
              href="https://arshithfresh.com/"
              target="_blank"
              rel="noreferrer"
            >
              E-Commerce
            </a>

            <a
              href="https://suntechorganization.com/"
              target="_blank"
              rel="noreferrer"
            >
              Digital Marketing
            </a>

            <a
              href="https://suntechorganization.com/"
              target="_blank"
              rel="noreferrer"
            >
              Software Development
            </a>

            <a
              href="https://suntechorganization.com/"
              target="_blank"
              rel="noreferrer"
            >
              IT Consulting
            </a>

            <a
              href="https://suntechorganization.com/"
              target="_blank"
              rel="noreferrer"
            >
              Backend Support
            </a>

          </div>

        </div>

        <div className="dropdown">

          <button className="dropdown-btn">
            Careers ▾
          </button>

          <div className="dropdown-content">

            <a href="/careers#internships">
  Internships
</a>

<a href="/careers#jobs">
  Job Opportunities
</a>

<a href="/careers#culture">
  Work Culture
</a>

          </div>

        </div>

        <Link to="/latestupdates">
          News
        </Link>

        <Link to="/contact">
          Contact Us
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;