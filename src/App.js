import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import LeftPanel from "./components/LeftPanel/leftPanel";
import Main from "./components/Main/main";
import Indicator from "./components/Indicators/indicators";



function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="container ">
        <div className="row">
          <div className="col-3">
            <LeftPanel />
          </div>
          <div className="col-9">
            <Main />
            <div className="gradient">
            <Indicator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
