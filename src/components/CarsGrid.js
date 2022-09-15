import CarCard from "./CarCard"

function CarsGrid({cars , searchInput}) {
    return(
        <div className="cars-grid">
            {cars.filter(el=>{
                return el.name.toLowerCase().includes(searchInput.toLowerCase())
            }).map(el=>{
                return <CarCard car={el}></CarCard>
            })}
           
        </div>
    )
}
export default CarsGrid