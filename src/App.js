import { Route, Routes } from "react-router-dom";
import i18n from "./i18n";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesLayout from "./pages/Services";
import Services from "./pages/Services/Services";
import Railing from "./pages/Services/Railing";
import Shelf from "./pages/Services/Shelf";
import Door from "./pages/Services/Door";
import Pipe from "./pages/Services/Pipe";

function App() {
  i18n.changeLanguage("en");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesLayout />}>
          <Route index={true} element={<Services />} />
          <Route path="shelf" element={<Shelf />} />
          <Route path="door" element={<Door />} />
          <Route path="railing" element={<Railing />} />
          <Route path="pipe" element={<Pipe />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
