import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
