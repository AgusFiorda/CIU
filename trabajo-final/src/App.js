import "./App.css";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/estrellado.jpg')]">
        <Header />
        <Home />
        <Games />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
