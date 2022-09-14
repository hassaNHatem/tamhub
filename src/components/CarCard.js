import {heart , person , iterative} from './svgs'
import car1 from '../car1.png'
function CarCard() {
    return(
       <div className="car-card">
        <div className="heading">
            <h2>Mini Cooper</h2>
            {heart}
        </div>
        <p className='car-model'>Mini2</p>
        <img src={car1} width={'233px'} height={'105px'}/>
        <div className='card-footer'>
            <div className='left-side'>
                <h4>{person}<span>4</span></h4>
                <h4>{iterative}<span>Manual</span></h4>
            </div>
           <p className='price'><span>$400</span>/d</p>
        </div>
       </div>
    )
}
export default CarCard