import "./App.css";

import React from "react";
import { Route, Routes } from "react-router";

import Sidebar from "../components/Sidebar";
import CatsPage from "../pages/CatsPage";

function App() {
  return (
    <div id='main'>
      <Sidebar>
        <Routes>
          <Route path='/' element={<CatsPage />} />
          <Route path='/:id' element={<CatsPage />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
