import logo from './logo.svg';
import './App.css';
import Profile from "./components/profile"
import Projects from "./components/projects"
import Certificates from './components/certificates';
import Tools from './components/tools';
import Skills from './components/skills';
function App() {
  return (
    <div className="App">
      <Profile/>
      <Projects/>
      <Certificates/>
      <Skills/>
      <Tools/>
    </div>
  );
}

export default App;
