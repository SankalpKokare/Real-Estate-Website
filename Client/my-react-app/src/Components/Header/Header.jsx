import "./Header.css";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <div className="flexCenter h-menu">
          <NavLink to="/properties">Properties</NavLink>
          <a href="mailto:sankalp@somemail.com">Contact</a>
          {/* Login Button */}
          <button className="button">Login</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
