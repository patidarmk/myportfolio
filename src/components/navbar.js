import "./navbar.css"
import logoimage from '../assets/logo.png'

function Navbar(){
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
                <a href="//github.io/jo_geek" >Github</a>
                <a href="http://stackoverflow.com/users/4084003/" >Work Details</a>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" >Projects</a>
                <a href="https://codepen.io/jo_Geek/" >contact me</a>
                <button className="nav-link-resume-btn" href="https://jsfiddle.net/user/jo_Geek/" >Resume</button>
            </div>
            </div>
    )
}

export default Navbar;