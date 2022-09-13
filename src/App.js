import './App.css';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Cars from './cars/Cars';
import SideBar from './sidebar/SideBar';

function App() {
  return (
    <div className="App">
     <Login/>
     <SideBar/>
     <Dashboard/>
     <Cars/>
    </div>
  );
}

export default App;
