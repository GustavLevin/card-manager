import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Homepage from './components/Homepage';
import AddCard from './components/AddCard';
import CardDetail from './components/CardDetail';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import './styles/styles.css';  

function App() {
  const themeMode = useSelector((state) => state.theme.mode); 

  return (
    <div className={`app ${themeMode}`}> 
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
