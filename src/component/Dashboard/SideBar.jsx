import React from "react";
import "./SideBar.css";
import "bootstrap/dist/css/bootstrap.css";
import admin from '../../img/HR-admin.png'
import { Link} from "react-router-dom";
import Attendance from "../Attendance/Attendance";
// import {LineStyle, TrendingUp} from '@material-ui/icons';
// import { NavLink ,useLocation} from 'react-router-dom';
// import Attendance from '../Attendance/Attendance';

export default function SideBar() {
  function hello() {
    console.log("clicked");
  }
  return (
    <div className="sidebar sidebarContainer p-fixed w-20">
      <div className="sidebar-wrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> DashBoard</h3>
          <ul className="sidebarList">
            <div class="trs">
              <p>
                <a className="btn admin" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  HR Admin
                </a>
              </p>
              <div className="collapse info" id="collapseExample">
                <button className="attandence">Attandence</button>
              </div>
              {/* <Link to="/Attendance">ATTENDENCE</Link> */}
              <div className="collapse info" id="collapseExample">
                <button className="attandence">Employees Document</button>
              </div>
              <div className="collapse info" id="collapseExample">
                <button className="attandence">Payrolls</button>
              </div>
              <div className="collapse info" id="collapseExample">
                <button className="attandence">Complaints</button>
              </div>
              <div className="collapse info" id="collapseExample">
                <button className="attandence">Events</button>
              </div>
              <div className="collapse info" id="collapseExample">
                <button className="attandence">New Hiring</button>
              </div>
            </div>
            <div>
              <p>
                <a className="btn admin" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                  HR Admin
                </a>
              </p>
              <div className="collapse info" id="collapseExample1">
                <button className="attandence">Attandence</button>
              </div>
            </div>


            {/* <li className='sidebarListItem active'>
            <LineStyle className='sidebarIcon'/>
            HR-Admin
            </li> 
            <li className='sidebarListItem'>
            <TrendingUp className='sidebarIcon'/>
            {/* <NavLink to='/attendance'> Attendance </NavLink> */}
            {/* </li>

            <li className='sidebarListItem'>
            <TrendingUp className='sidebarIcon'/>
            Employees Document
            </li>
            <li className='sidebarListItem'>
            <TrendingUp className='sidebarIcon'/>
            complaint
            </li>
            <li className='sidebarListItem'>
            <TrendingUp className='sidebarIcon'/>
            Events
            </li>   <li className='sidebarListItem'>
            <TrendingUp className='sidebarIcon'/>
           New Haring
            </li> */}
          </ul>
        </div >
      </div >
    </div >
  );
}
