import {heart , person , iterative} from './svgs'
import car1 from '../car1.png'
function CarCard({car}) {
    return(
       <div className="car-card">
        <div className="heading">
            <h2>{car.name}</h2>
            {heart}
        </div>
        <p className='car-model'>{car.model}</p>
        <img src={car1} width={'233px'} height={'105px'}/>
        <div className='card-footer'>
            <div className='left-side'>
                <h4>{person}<span>{car.seats}</span></h4>
                <h4>{iterative}<span>{car.trass}</span></h4>
            </div>
           <p className='price'><span>${car.price}</span>/d</p>
        </div>
       </div>
    )
}
export default CarCard