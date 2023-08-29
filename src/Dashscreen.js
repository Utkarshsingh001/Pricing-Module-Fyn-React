import React from 'react'
import './Dashscreen.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyLineChart from './Linegraph';


function Dashscreen({grossrevenue ,totalrides,aov,ridesData}) {
    const [dashboardData, setDashboardData] = useState({});
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/dashboard-data/');
            setDashboardData(response.data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    useEffect(() => {
      // Fetch data immediately on mount
      fetchData();
    
    
      // Polling interval (e.g., every 10 seconds)
      const pollingInterval = setInterval(fetchData, 10000);
    
      // Clear interval on component unmount
      return () => clearInterval(pollingInterval);
    }, []);
    
  return (
    <div className='dashscreen'>
        <div className='dashscreen__container'>
            <h1>Welcome To the Business Operations</h1>
            <div className='header__values' style={{display:'flex',marginBottom:30,justifyContent:'space-evenly',marginRight:200,marginTop:40}}>
                <div className='header__valuesGR'>
                    <h4>Gross Revenue</h4>
                    <h1>₹{grossrevenue.toFixed(2)}</h1>
                    <h6>+215% from last month</h6>
                </div>
                <hr/>
                <div className='header__valuesAOV'>
                <h4>Avg. Order Value</h4>
                <h1>₹{(aov/totalrides).toFixed(2)}</h1>
                <h6>+215% from last month</h6>
                </div>
                <hr/>
                <div className='header__valuesTO'>
                <h4>Total Rides</h4>
                <h1>{totalrides}</h1>
                <h6>+215% from last month</h6>
                </div>
                <hr/>
                </div>
                {/* DataBase Populate */}
                <div>


                <MyLineChart ridesData ={ridesData}/>
            <h1>Dashboard</h1>

            <table>
  <thead>
    <tr>
      <th>DBP Price:</th>
      <th>DBP KM:</th>
      <th>DAP:</th>
      <th>Waiting Charge:</th>
      <th>Waiting Time:</th>
      <th>Status:</th>
      <th>Weekdays:</th>
      <th>TMF:</th>
      <th>User Modified By:</th>
      <th>Timestamp:</th>
    </tr>
  </thead>
  <tbody>
  {Object.values(dashboardData).map(item => (
    <tr key={item.mod_id}>
      <td>{item.dbp_price}</td>
      <td>{item.dbp_km}</td>
      <td>{item.dap}</td>
      <td>{item.waiting_charge}</td>
      <td>{item.waiting_time}</td>
      <td>{item.status ? 'Active' : 'Inactive'}</td>
      <td>{item.weekdays.join(', ')}</td>
      <td>{item.TMF.map((tmfItem, index) => (
    <div key={index}>
      Hour: {Object.keys(tmfItem)[0]}, Factor: {tmfItem[Object.keys(tmfItem)[0]]}
    </div>
  ))}</td>
      <td>{item.usermodifiedby}</td>
      <td>{item.timestamp}</td>
    </tr>
  ))
}
  </tbody>
</table>

        </div>
        </div>
        
    </div>
  )
}

export default Dashscreen