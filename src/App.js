import React from "react";
import NavBar from "./components/layouts/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/layouts/Dashboard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
