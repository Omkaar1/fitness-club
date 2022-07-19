import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import "./App.css";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
