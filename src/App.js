import './App.css';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Cars from './cars/Cars';
import { useState  } from 'react';
import Layout from './Layout/Layout';
import "@fontsource/dm-sans";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  const [User , setUser] = useState()

  const user = localStorage.getItem('user')
  console.log(user)
  return (
    <div className="App">
      <Router>
      {user === null ? (
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Login setUser={setUser} />} />
          </Routes>
        ) : (
          <Routes>
      <Route path="/" element={ <><Layout/><Dashboard/></>} />
      <Route path="/dashboard" element={  <><Layout/><Dashboard/></>} />
      <Route path="/cars" element={  <><Layout/><Cars/></>} />
      </Routes>
      )}
      </Router>
    
    
    </div>
  );
}

export default App;
