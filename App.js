import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import InputScreen from './screens/inputscreen';
import ResultScreen from './screens/outputscreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputScreen/>} />
        <Route path="/result" element={<ResultScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
