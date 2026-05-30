import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LatestUpdates from "./pages/LatestUpdates";
import Careers from "./pages/Careers";
import InternshipDetails from "./pages/InternshipDetails";

import BackToTop from "./components/BackToTop";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contact />} />
       <Route
  path="/internship-details"
  element={<InternshipDetails />}
/>
  

        <Route
          path="/latestupdates"
          element={<LatestUpdates />}
        />
    
      </Routes>
  <BackToTop />
    </BrowserRouter>

  );
}

export default App;