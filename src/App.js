import { BrowserRouter } from "react-router-dom";
import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import About from "./components/main/About";
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
      </div>
    </BrowserRouter>
  );
}

export default App;
