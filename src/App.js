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
import Aboutnod from './component2/about';
import Contact from './component2/contact';
import Cart from './component2/cart';
import NavBar from './component2/navbar';
import Card from './component2/ProductCard';


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
      <NavBar />
   

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/help" element={<Help />} />
        <Route path='/Card' element={ <Card />}/>
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
