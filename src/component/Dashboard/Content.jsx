import React from 'react'
import './Content.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import attendance from '../../img/attendance.png'
import document from '../../img/document.png'
import Employee from '../../img/employee.png'





export default function Content() {
  return (
    <div className='contentContainer'>
        <div className='boxe-1 d-flex justify-evenly'>
            <div className='contentcard1'>
                <div className='contentIcon'>
                    <img src={attendance} alt="" />
                </div>
                <div className='cententHeading'><h2>Attendance</h2></div>
                <div className='contentDetails'><p> Attendance Management keeps track of your employee hours. It is the system you use to document the time your employees work and the time they take off.</p></div>
            </div>
            <div className='contentcard1'>
                <div className='contentIcon'>
                <img src={document} alt="" />

                </div>
                <div className='contentHeading' ><h2 >Employee document</h2></div>
                <div className='contentDetails'><p>Employee documentation describes the history of the relationship between an employee and the company- for better or worse.</p> </div>
            </div>
            <div className='contentcard1'>
                <div className='contentIcon'>
                <img src={Employee} alt="" />

                </div>
                <div className='cententHeading'><h2>Employees Data</h2></div>
                <div className='contentDetails'><p> All information collected by your company about its employees.</p>  </div>
            </div>
        </div>
        <div className='boxes'>
        <div className='boxe-1 d-flex justify-evenly'>
            <div className='contentcard1'>
                <div className='contentIcon'>
                    <img src={attendance} alt="" />
                </div>
                <div className='cententHeading'><h2>Complaint</h2></div>
                <div className='contentDetails'><p> Attendance Management keeps track of your employee hours. It is the system you use to document the time your employees work and the time they take off.</p></div>
            </div>
            <div className='contentcard1'>
                <div className='contentIcon'>
                <img src={document} alt="" />

                </div>
                <div className='contentHeading' ><h2 >Employee document</h2></div>
                <div className='contentDetails'><p>Employee documentation describes the history of the relationship between an employee and the company- for better or worse.</p> </div>
            </div>
            <div className='contentcard1'>
                <div className='contentIcon'>
                <img src={Employee} alt="" />

                </div>
                <div className='cententHeading'><h2>Employees Data</h2></div>
                <div className='contentDetails'><p> All information collected by your company about its employees.</p>  </div>
            </div>
        </div>
        </div>
    </div>
  )
}
