import './App.css';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Cars from './cars/Cars';
import { useState , useEffect  } from 'react';
import Layout from './Layout/Layout';
import axios from 'axios';

import "@fontsource/dm-sans";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  const [User , setUser] = useState()
  const [users , setUsers] = useState([])
  const [cars , setCars] = useState([])
  const [searchInput , setSearchInput] = useState('')
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/hassaNHatem/mockdata/users').then(res=>{
      setUsers(res.data)
    })
    axios.get('https://my-json-server.typicode.com/hassaNHatem/mockdata/cars').then(res=>{
      setCars(res.data)
    })
  }, [])
  const user = localStorage.getItem('user')
  console.log(user)
  return (
    <div className="App">
      <Router>
      {user === null ? (
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Login setUser={setUser} users={users} />} />
          </Routes>
        ) : (
          <Routes>
      <Route path="/" element={ <><Layout pageName={'dashboard'} setUser={setUser}/><Dashboard/></>} />
      <Route path="/dashboard" element={  <><Layout setUser={setUser}/><Dashboard pageName={'dashboard'}/></>} />
      <Route path="/cars" element={  <><Layout setSearchInput={setSearchInput} setUser={setUser} pageName={'cars'}/><Cars searchInput={searchInput} cars={cars}/></>} />
      </Routes>
      )}
      </Router>
    
    
    </div>
  );
}

export default App;
