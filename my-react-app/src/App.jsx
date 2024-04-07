import "./App.css";
import Companies from "./Components/Companies/Companies";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient"></div>
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
      </div>
    </>
  );
}

export default App;
