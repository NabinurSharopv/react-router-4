import "./index.css"; 
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Info from "./Pages/Info";
import Layout from "./components/Layout";

const App = () => {
  return (
  <>  
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="info" element={<Info />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
