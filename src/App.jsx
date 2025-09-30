import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Categorie from "./pages/Categories/categorieType/Categorie";
import Footer from "./components/Footer";
import Services from "./pages/Home/Services";
import Login from "./pages/login/Login";

function App() {
  return (
    <><BrowserRouter >
      <Info/>
      <Header />

      {/* Routes */}

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/categorie" element={<Categorie/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login/>} />
        


      </Routes>

      <Footer />
    </BrowserRouter></>
  ) 
}

export default App;
