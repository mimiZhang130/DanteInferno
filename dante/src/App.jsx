import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";

// components
import Home from "./components/Home";
import Canto from "./components/Canto";
import Map from "./components/Map";

// data
import cantos from "./assets/cantos.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {cantos.map((canto, index) => (
          <Route key={index} path={"/canto/" + canto.book + "-" + canto.number} element={<Canto info_path={canto.book + canto.number}/>}/>
        ))}
        <Route path="/map" element={<Map cantos={cantos}/>}/>
      </Routes>
    </Router>
  )
}

export default App
