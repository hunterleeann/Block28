import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { Routes, Route, Link } from "react-router-dom";
import React from "react";
//import { BrowserRouter } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  return (
    <>
      <React.StrictMode>
        <Router>
          <div id="container">
            <h1>Hello React Router!</h1>
            <div id="navbar">
              <Link to="/">Home</Link>
              <Link to="/Blue">Blue</Link>
              <Link to="/Red">Red</Link>
            </div>
            <div id="main-section">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blue" element={<Blue />} />
                <Route path="/Red" element={<Red />} />
              </Routes>
            </div>
          </div>
        </Router>
      </React.StrictMode>
      .
      {/*<React.StrictMode>
         <Router>
           <App />
         </Router>
       </React.StrictMode>*/}
    </>
  );
}

export default App;
