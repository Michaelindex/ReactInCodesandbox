import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ul className="lista">
        <li>Aprendendo React</li>
        <li>Componentes</li>
      </ul>
    </div>
  );
}
