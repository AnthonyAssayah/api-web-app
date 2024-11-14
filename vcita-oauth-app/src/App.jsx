// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/oauth" element={<Callback/>} />
      </Routes>
    </Router>
  );
}

export default App;
