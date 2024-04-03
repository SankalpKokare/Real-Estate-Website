import "./App.css";
import Companies from "./Components/Companies/Companies";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

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
      </div>
    </>
  );
}

export default App;
