import ChartComponent from '../components/ChartComponent';
import Earnings from '../components/Earnings';
import Loan from '../components/Loan';
import Recommended from '../components/Recommended';
import './dashboard.css';
import { badges , rushing ,energyIcon , energyPie , range , fluidPie , fluid , tier , tierPie , breakPie } from './svgs';
import car1 from '../car1.png'
function Dashboard() {

  return (
   
    <div className="dashboard">
      <div className='charts-wrapper'>
        <ChartComponent icon = {energyIcon} chartName={'Energy'} chart={energyPie}></ChartComponent>
        <ChartComponent icon = {range} chartName={'Range'} chart={fluidPie}></ChartComponent>
        <ChartComponent icon = {fluid} chartName={'Break fluid'} chart = {breakPie}></ChartComponent>
        <ChartComponent icon = {tier} chartName={'Tier Wear'} chart = {tierPie}></ChartComponent>
      </div>
      
      <div className='middle-section'>
       <Loan/>
       <div className='earning-wrapper'><Earnings type={'Badges'}  number={'20'} logo={badges}  bgColor={'#0F2837'} fontColor={'#FF9619'} msg={'Hooray! Way to go Mohammed!'} />
        <Earnings number={'1500'}  logo={rushing} type={'Points'} bgColor={'#6E1946'} fontColor={'#FAC39B'} msg={'Reedem and claim your rewards!'} /></div>
      </div>
      <div className='lower-section'>
        <Recommended percent={'64'}  src={car1} name={'Mini Cooper'} miles={'132'} price={'32'} bgColor={'#E1DFA4'}/>
        <Recommended percent={'64'}  src={car1} name={'Mini Cooper'} miles={'132'} price={'32'} bgColor={'#E3ECF1'}/>
        <Recommended percent={'64'}  src={car1} name={'Mini Cooper'} miles={'132'} price={'32'} bgColor={'#F4E3E5'}/>

      </div>
  
    </div>
  );
}

export default Dashboard;
