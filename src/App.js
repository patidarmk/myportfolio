import "./App.css";
import Project from "./components/Project";
import Navbar from "./components/navbar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="App">
          <Profile />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
