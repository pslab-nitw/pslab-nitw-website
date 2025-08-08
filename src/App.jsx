import { useRef, useState } from "react";
import "./App.css";
import Alumni from "./components/Alumni/Alumni";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Members from "./components/Members/Members";
import NavBar from "./components/NavigationBar/NavBar";
import Projects from "./components/Projects/Projects";
import Publications from "./components/Publications/Publications";
import Research from "./components/Research/Research";
function App() {
  const [tabNo, setTabNo] = useState(0);
  const tabsRef = useRef([]);

  function handleTabClick(index) {
    if (tabsRef.current[tabNo]) {
      tabsRef.current[tabNo].style.animationName = "fadeOut";
    }

    setTimeout(() => {
      if (tabsRef.current[index]) {
        tabsRef.current[index].style.animationName = "fadeIn";
      }
      if (tabsRef.current[tabNo]) {
        tabsRef.current[tabNo].style.animationName = "";
      }
      setTabNo(index);
    }, 500);
  }

  function renderComponent() {
    const components = [
      <Home />,
      <Members />,
      <Research handleClick={handleTabClick} />,
      <Publications />,
      <Projects />,
      <Alumni />,
      <Gallery />,
      <Contact />,
    ];

    return components.map((Component, index) => (
      <div
        key={index}
        className={"tabs"}
        ref={(el) => (tabsRef.current[index] = el)}
        style={{ display: index === tabNo ? "block" : "none" }}
      >
        {Component}
      </div>
    ));
  }

  return (
    <div>
      <NavBar handleItemClick={handleTabClick} tabno={tabNo} />
      {renderComponent()}
      <Footer />
    </div>
  );
}

export default App;
