import './App.css'
// import React from 'react'
// import logo from '../../../public/logo.jpeg'
import NavBar from '../../components/NavBar/NavBar'
import Home from './Home/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <NavBar /><br />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
