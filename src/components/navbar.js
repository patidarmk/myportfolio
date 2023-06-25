import "./navbar.css";
import logoimage from "../assets/logo.png";
import resume from '../assets/resume.pdf'

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
        /* <a href="//github.com/patidarmk">Github</a> */
        /* <a href="#">Work Details</a> */
        <a href="#">Projects</a>
		<a href="#">About me</a>
        <a href="#">Contact</a>
		
        
      </div>
	  <a
          className="nav-link-resume-btn"
          href={resume} target="_blank" rel="noreferrer"
        >
          Resume
        </a>
    </div>
  );
}

export default Navbar;
