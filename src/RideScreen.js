import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './RideScreen.css'
function RideScreen({ridesData}) {
   
  return (
    <div className='ridescreen'>
    <div className='ridescreen__container'>
            <h1>Rides Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ride ID</th>
                        <th>Total KMs</th>
                        <th>Total Time</th>
                        <th>Day</th>
                        <th>Total Charges</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    {ridesData.map(ride => (
                        <tr key={ride.ride_id}>
                            <td>{ride.ride_id}</td>
                            <td>{ride.total_kms}</td>
                            <td>{ride.total_time}</td>
                            <td>{ride.day}</td>
                            <td>{ride.total_charges}₹</td>
                            <td>{ride.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
  )
}

export default RideScreen