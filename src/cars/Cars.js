import { useEffect, useState } from 'react';
import CarsGrid from '../components/CarsGrid';
import './cars.css';
import {squares , filter , arrow} from './svgs'
function Cars({cars}) {
  const [gear , setGear] = useState('all gears')
  const [company , setCompany] = useState('all')
  const [filteredCars , setFilteredCars] = useState(cars)
  let carsCompanies = []
  cars.map(el=>{
    carsCompanies.push(el.name)
  })
  const set = new Set(carsCompanies);
  let uniqueCompanies = [...set]
  useEffect(()=>{
    setFilteredCars(cars)
  },[cars])
  useEffect(()=>{
    applyfilters(gear , company)
  },[gear , company])
  function applyfilters(gear , company){
    if(gear==='all gears'&& company==='all'){
      setFilteredCars(cars)
    }else if(gear==='all gears'&& company!=='all'){
      let filteredArr = cars.filter(el=>{
        return el.name===company
      })
      setFilteredCars(filteredArr)
    }else if(gear!=='all gears'&& company==='all'){
      let filteredArr = cars.filter(el=>{
        return el.trass===gear
      })
      setFilteredCars(filteredArr)
    }else{
      let filteredArr = cars.filter(el=>{
        return el.trass===gear&&el.name===company
      })
      setFilteredCars(filteredArr)
    }
  }
  console.log(filteredCars)
  return (
    <div className="cars-wrapper">
    <h1 className='heading'>Booking</h1>
    <div className='filters'>
      <div className='dropdowns'>
        <div className='select-wrapper'>
         
        <select onChange={(e)=>{setGear(e.target.value)}} value={gear}>
          <option value={'all gears'}>All Gears</option>
          <option value={'manual'}>manual</option>
          <option value={'Automatic'}>Automatic</option>
        </select>
        <p>{arrow}</p>
        </div>
        <div className='select-wrapper'>
        <select onChange={(e)=>{setCompany(e.target.value)}} value={company}>
          <option value={'all'}>All</option>
          {uniqueCompanies.map(el=>{
            return <option value={el}>{el}</option>
          })}
        </select>
        <p>{arrow}</p>
        </div>
       
      </div>
      <div className='right-side'>
        <h4 style={{'height':'37px'}}>{squares}</h4>
        <h4 style={{'height':'30px'}}>{filter}</h4>
      </div>
    </div>
    <CarsGrid cars={filteredCars} />
    </div>
  );
}

export default Cars;
