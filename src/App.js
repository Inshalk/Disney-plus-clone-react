import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/details' element={<Details />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>

      </Router>



    </div>
  );
}

export default App;
