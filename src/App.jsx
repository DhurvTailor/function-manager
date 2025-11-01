import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Infohead";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Categorie from "./pages/Categories/categorieType/Categorie";
import Footer from "./components/Footer";
import Services from "./pages/Home/Services";
import Login from "./pages/login/Login";
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import Products from "./pages/Admin/Products";
import Settings from "./pages/Admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Dashboard />} />
          <Route path="analytics" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Info />
            <Header />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Info />
            <Header />
            <Gallery />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Info />
            <Header />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Info />
            <Header />
            <About />
            <Footer />
          </>
        } />
        <Route path="/categorie" element={
          <>
            <Info />
            <Header />
            <Categorie />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Info />
            <Header />
            <Services />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <Info />
            <Header />
            <Login />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
