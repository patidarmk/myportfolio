import "./navbar.css";
import logoimage from "../assets/logo.png";

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <img className="logo" src={logoimage} alt="logo" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="//github.io/patidarmk">Github</a>
        <a href="#">Work Details</a>
        <a href="#">Projects</a>
        <a href="#">contact me</a>
        <button
          className="nav-link-resume-btn"
          href=""
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
