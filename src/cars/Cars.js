import CarsGrid from '../components/CarsGrid';
import './cars.css';
import {squares , filter , arrow} from './svgs'
function Cars({cars}) {
  return (
    <div className="cars-wrapper">
    <h1 className='heading'>Booking</h1>
    <div className='filters'>
      <div className='dropdowns'>
        <div className='select-wrapper'>
        <select>
          <option>All</option>
          <option>new</option>
          <option>used</option>
        </select>
        <p>{arrow}</p>
        </div>
        <div className='select-wrapper'>
        <select>
          <option>All</option>
          <option>Toyota</option>
          <option>Pourche</option>
        </select>
        <p>{arrow}</p>
        </div>
       
      </div>
      <div className='right-side'>
        <h4 style={{'height':'37px'}}>{squares}</h4>
        <h4 style={{'height':'30px'}}>{filter}</h4>
      </div>
    </div>
    <CarsGrid cars={cars}/>
    </div>
  );
}

export default Cars;
