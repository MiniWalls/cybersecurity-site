import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import Basket from './Pages/Basket';
import Login from './Pages/Login';

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="px-2 mt-24">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
