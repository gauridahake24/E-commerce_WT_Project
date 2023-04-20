import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  // const service_item = service_data.map((item) => {
  //   return <About key={About.id} item = {item}/>
  // })

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
