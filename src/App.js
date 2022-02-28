import { BrowserRouter } from "react-router-dom";
import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import About from "./components/main/About";
import Intro from "./components/main/Intro";
import Visual from "./components/main/Visual";
import "./scss/style.scss";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <Visual />
        <About />
        <Intro />
      </div>
    </BrowserRouter>
  );
}

export default App;
