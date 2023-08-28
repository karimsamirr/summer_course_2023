import logo from './logo.svg';
import './App.css';
import  Nav from "./component/nav";
import  About from "./component/about";
import  Skills from "./component/skills";
import  Portflio from "./component/portfilio";
import  Fotter from "./component/footer";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom"
import Home from './component2/home';
import Help from './component2/help';
import Aboutnod from './component2/help';
import Contact from './component2/help';
import Cart from './component2/help';
function App() {
  return (
    <>
    <div className="App">
      {/* <Nav />
      <About />
      <Skills />
      <Portflio />
      <Fotter />
      */}
      
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/About" element={<Aboutnod />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home />
      <Help /> */}
    </div>
    </>
  );
}

export default App;
