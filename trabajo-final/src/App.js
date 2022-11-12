import "./App.css";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/estrellado.jpg')]">
        <Header />
        <Games />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
