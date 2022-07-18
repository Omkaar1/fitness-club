import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
