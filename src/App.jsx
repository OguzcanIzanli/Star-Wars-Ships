import "./App.css";
import Homepage from "./pages/Homepage";
import Ship from "./pages/Ship";
import { Routes, Route } from "react-router-dom";
import { ShipProvider } from "./context/ShipContext";

function App() {
  return (
    <ShipProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ship" element={<Ship />} />
      </Routes>
    </ShipProvider>
  );
}

export default App;
