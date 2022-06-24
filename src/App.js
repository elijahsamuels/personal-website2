import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Greeting from "./components/Greeting";
import About from "./components/About";
import Music from "./components/Music";
import Calendar from "./components/music/Calendar";
import Transcriptions from "./components/music/Transcriptions";
import Audio from "./components/music/Audio";
import Video from "./components/music/Video";
import Code from "./components/Code";
import Projects from "./components/code/Projects";
import Skills from "./components/code/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import { Navbar2 as Navbar } from "./components/Navbar2";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header className="Navbar">
        <Navbar />
      </header>

      <header className="App-header">
        <Routes>
          <Route path="/" />
          <Route path="about" element={<About />} />
          <Route path="music" element={<Music />}>
            <Route path="calendar" element={<Calendar />} />
            <Route path="transcriptions" element={<Transcriptions />} />
            <Route path="audio" element={<Audio />} />
            <Route path="video" element={<Video />} />
          </Route>
          <Route path="code" element={<Code />} >
						<Route path="projects" element={<Projects />} />
						<Route path="skills" element={<Skills />} />
					</Route>
          <Route path="contact" element={<Contact />} />
        </Routes>

        <header className="Footer">
          <Footer />
        </header>
      </header>
    </div>
  );
}

export default App;
