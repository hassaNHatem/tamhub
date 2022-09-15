import CarCard from "./CarCard"

function CarsGrid({cars}) {
    return(
        <div className="cars-grid">
            {cars.map(el=>{
                return <CarCard car={el}></CarCard>
            })}
           
        </div>
    )
}
export default CarsGrid