
function Earnings({number  ,logo , type, bgColor , fontColor , msg}) {
  return (
    <div className="earnings-container" style={{'backgroundColor':bgColor}}>
    <div className="earnings">
    <div className="earned">
        You <br></br>have<br></br> earned<br></br><span style={{'color':fontColor}}>{number}</span> <br></br> {type}!  
    </div>
    <div className="logo">{logo}</div>
    </div>
    <p style={{'color':fontColor}}>{msg}</p>
    </div>

  );
}

export default Earnings;
