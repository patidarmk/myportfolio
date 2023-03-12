import './App.css';
import { Experience } from './components/Experience/Experience';
import Project from './components/Experience/Projects';
import Navbar from "./components/navbar"
import Profile from './components/Profile';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Experience />
      <Project />
   
    </div>
    
  );
}

export default App;