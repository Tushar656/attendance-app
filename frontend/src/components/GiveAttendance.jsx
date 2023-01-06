import React from 'react'
import './GiveAtd.css'

export default function GiveAttendance() {
    function checkInHandler(){
        const d = new Date();
        console.log(d.getTime());
    }
  return (
    <div className='GiveAtd'>
        <h4>Attendance</h4>
        <div className="inpSection">
            <h6 className="inphesd">Roll Number</h6>
            <input type="text" />
        </div>
        <div className="inpSection">
            <h6 className="inphesd">Name</h6>
            <input type="text" />
        </div>
        <div className="inpSection">
            <h6 className="inphesd">Time</h6>
            <input type="time" />
        </div>
        <div className="btnSection">
            <button className="chekin" onClick={checkInHandler}>Check In</button>
            <button className="chekout">Check Out</button>
        </div>
    </div>
  )
}
