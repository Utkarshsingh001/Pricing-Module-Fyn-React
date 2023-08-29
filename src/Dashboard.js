import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import Driver from './Driver'
import { Button } from '@mui/material'
import { actionTypes } from './reducer'
import Header from './Header'
import './Dashboard.css'
import Dashscreen from './Dashscreen'
import axios from 'axios';
import RideScreen from './RideScreen'
import LineGraph from './Linegraph'


function Dashboard() {

   //calculations 
   const [ridesData, setRidesData] = useState([]);
   const [grossrevenue, setGrossrevenue] = useState(0);
   const [totalrides, setTotalrides] = useState(0);
   const [aov, setAov] = useState(0);
 
   //calulations ending
 
//graph

//graph

  //active component place
  const [activeComponent, setActiveComponent] = useState('component1'); // Initial active component
  const switchToComponent1 = () => {
    setActiveComponent('component1');
};

const switchToComponent2 = () => {
    setActiveComponent('component2');
};

  const [state,dispatch] = useStateValue()
  
  const [{user}]= useStateValue()
 
  const fetchData = async () => {
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/rides-data/');
          setRidesData(response.data);
        
      } catch (error) {
          console.error('Error fetching dashboard data:', error);
      }
  };
  useEffect(() => {
    // Fetch data immediately on mount
    fetchData();
    // Polling interval (e.g., every 10 seconds)
    const pollingInterval = setInterval(fetchData, 3000);
  
    // Clear interval on component unmount
    return () => clearInterval(pollingInterval);
  }, []);

  useEffect(() => {
    // Calculate gross revenue, total rides, and AOV
    const newGrossRevenue = ridesData.reduce(
        (total, ride) => total + ride.total_charges,
        0
    );
    const newTotalRides = ridesData.length;
    const newAOV = newGrossRevenue / newTotalRides;

    setGrossrevenue(newGrossRevenue);
    setTotalrides(newTotalRides);
    setAov(newAOV);
}, [ridesData]);
 


  return (
  
  <div className='dashboard'>

           {/*Header*/} 
          <Header />
          {/* end Header*/}
    
          
          {/*sidebar*/}
    <div className='body'>
            <div className='sidebar'>
              <div className='sidebar__header'>
                <div className='sidebar__info'>
                <Button onClick={switchToComponent1}>Dashboard</Button>
                <Button onClick={switchToComponent2}>Rides</Button>
                </div>
              </div>
            </div>
      {/*sidebar ending*/}
      {/* dashscreen */}
      {activeComponent === 'component1' ? <Dashscreen ridesData={ridesData} grossrevenue={grossrevenue} totalrides={totalrides} aov={aov}/> : <RideScreen ridesData={ridesData} />}
      {/* dashscreen ending */}
    </div>
  </div>

  )
}

export default Dashboard