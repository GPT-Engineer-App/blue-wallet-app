import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Ewallet from "./pages/Ewallet.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ewallet" element={<Ewallet />} />
      </Routes>
    </Router>
  );
}

export default App;
