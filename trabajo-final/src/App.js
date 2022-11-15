import "./App.css";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Header from "./components/Header";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Premios from "./components/Premios";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/estrellado.jpg')]  scroll-smooth">
        <Header />
        <Home />
        <Premios />
        <Games />
        <Nosotros />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
