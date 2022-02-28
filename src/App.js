import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import Visual from "./components/main/Visual";
import "./scss/style.scss";


function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Visual />
    </div>
  );
}

export default App;
