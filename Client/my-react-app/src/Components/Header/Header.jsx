import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <div className="flexCenter h-menu">
          <NavLink to="/properties">Properties</NavLink>
          <a href="mailto:sankalp@somemail.com">Contact</a>
          {/* Login Button */}
          {!isAuthenticated ? (
            <button className="button" onClick={loginWithRedirect}>
              Login
            </button>
          ) : (
            <div> User Profile </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
