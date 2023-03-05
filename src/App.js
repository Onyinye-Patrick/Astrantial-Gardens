import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Features from "./components/Features";
import Collections from "./components/Collections";
import Arrivals from "./components/Arrivals";
import Footer from "./components/Footer";

function App() {
  return (
    <body >
      <div className="container">
      <Header/>
      <NavBar/>
      <Main/>
      <Features/>
      <Collections/>
      <Arrivals/>
      </div>
      <Footer/>
    </body>
  );
}

export default App;
