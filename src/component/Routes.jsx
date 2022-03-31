import { router } from "json-server";
import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Attendance from "./Attendance/Attendance";
import Content from "./Dashboard/Content";
import DashBoard from "./Dashboard/DashBoard";
import SideBar from "./Dashboard/SideBar";
import PayRolls from "./payrolls/PayRolls";
import SalarySlip from "./payrolls/SalarySlip";

export default function Routes() {
  return (
    <div>
      <DashBoard />
      <div style={{ display: "flex" }}>
        <SideBar />
        <BrowserRouter>
          <Router>
            <Route path="/" element={<Content />} />
            <Route path="/Attendance" element={<Attendance />}></Route>
            <Route exact path="/payrolls" element={<PayRolls />}/>
            <Route exact path="/payrolls/salaryslip" element={<SalarySlip />}/>
              <Route path="/payrolls/salaryslip/generate" element={<SalarySlip />} />
    
       
          </Router>
        </BrowserRouter>
      </div>
    </div>
  );
}
