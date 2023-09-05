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
import CartComponent from './component2/cart';
import NavBar from './component2/navbar';
import Card from './component2/ProductCard';
import  Favourite from './component2/redux/favouriteSlice';
import Moviedetails from './component2/Moviedetails';


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
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/details/:id" element={<Moviedetails />} />
        <Route path="/About" element={<Aboutnod />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourite" element={<Favourite />} />

      
      </Routes>
      {/* <Home />
      <Help /> */}
    </div>
    </>
  );
}

export default App;
