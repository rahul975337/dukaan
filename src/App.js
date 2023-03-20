import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Process from "./components/Process/Process";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="top__container"></div>
      <div className="content"></div>
      <Process />
      {/* try our free profucts */}
      
      <Footer />
    </div>
  );
}

export default App;
