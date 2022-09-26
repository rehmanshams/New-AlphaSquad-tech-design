import logo from "./logo.svg";
import "./App.css";
import New from "../src/new"

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<New />} exact />
           
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
