import { BrowserRouter } from "react-router-dom";
import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import About from "./components/main/About";
import Intro from "./components/main/Intro";
import Portfolio from "./components/main/Portfolio";
import Visual from "./components/main/Visual";
import "./scss/style.scss";
import 'animate.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <Visual />
        <About />
        <Intro />
        <Portfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;
