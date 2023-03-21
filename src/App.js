import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Process from "./components/Process/Process";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="top__container"></div>
      <Form />
      <Process />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
