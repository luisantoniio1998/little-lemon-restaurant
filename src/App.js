import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import BookingConfirmation from "./components/Booking/BookingConfirmation/BookingConfirmation";
import Homepage from "./pages/Homepage";
import Booking from "./pages/BookingPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/confirmed" element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
