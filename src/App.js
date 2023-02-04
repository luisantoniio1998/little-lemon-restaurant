import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Nav from "./components/Nav";
import Specials from "./components/Specials";
import Chicago from "./components/Chicago";
import Reservation from "./components/Reservation";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CallToAction />} />
        <Route path="/droga" element={<CallToAction />} />
      </Routes>
      <Reservation />
      <Specials />
      <Testimonials />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;
