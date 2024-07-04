import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BillsPayment from "./pages/BillsPayment.jsx";
import Login from "./pages/Login.jsx"; // Import the new Login page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/billspayment" element={<BillsPayment />} />
        <Route path="/login" element={<Login />} /> {/* Add the new Login route */}
      </Routes>
    </Router>
  );
}

export default App;