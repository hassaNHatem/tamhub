
function ChartComponent({icon , chartName , chart}) {
  return (
   
    <div className="chart-component">
        <p>{icon}</p>
        <h4>{chartName}</h4>
        <p>{chart}</p>
  
    </div>
  );
}

export default ChartComponent;
