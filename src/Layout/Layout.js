import './layout.css';
import person from '../person.png'
import { Link } from 'react-router-dom';
import {lens , pell , logo , dashboard , car , sittings , logout, miniLogo} from './svgs'
function Layout({setUser , pageName , setSearchInput}) {
  return (
   <div className='layout-wrapper'>
   <div className='nav'>
    <div className='searchbar'>
    <p className='lens'>{lens}</p>
    <input placeholder='Search or type' disabled={pageName!=='cars'} onChange={(e)=>{setSearchInput(e.target.value)}}></input>
    </div>
    <div className='profile'>
        <p>{pell}</p>
        <img src={person}/>
    </div>
   </div>
   <div className='sidebar'>
      <h1>{window.innerWidth>770?logo:miniLogo}</h1>
      <div className='menu-items'>
      <Link to={'/dashboard'}><div className={window.location.href.includes('dashboard')||window.location.href[window.location.href.length-1]==='/'?'active':''}>{dashboard}<h2 > Dashboard</h2></div></Link>
      <Link to={'/cars'}><div className={window.location.href.includes('cars')?'active':''}>{car}<h2> Cars</h2></div></Link>
      </div>
      <div className='sidebar-footer'>
        <div>{sittings}<h2> Settings</h2></div>
        <div onClick={()=>{
          localStorage.clear()
          setUser('')
        }}>{logout}<h2> Log out</h2></div>
      </div>
   </div>
   
   </div>
  );
}

export default Layout;
