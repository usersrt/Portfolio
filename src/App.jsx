import { useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Social from "./components/Social/Social";

function App() {
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="wrapper">
            <Navbar />
            <AboutMe />
            <Portfolio />
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
