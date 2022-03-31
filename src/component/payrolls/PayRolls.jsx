import React, { useEffect, useState } from "react";
import "../payrolls/Payrolls.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function PayRolls() {
    const [user, setgetUser] = useState([])
    const [query, setQuery] = useState("")




    useEffect(() => {
        axios.get("http://localhost:3004/users").then((resp) => {

            setgetUser(resp.data)
            console.log(user);

        })
    }, [0])
  
 



    return (
        <div className="Payrolls">
            <div className="employee">

                <h3>Employee Salary</h3>
            </div>
            <form action="" className="payrolls-form">
                <div className="employee-name">
                    <input type="search" id="name" placeholder="Employee Name" 
                     onChange={event => {setQuery(event.target.value)}}/>
                </div>
                <div className="employee-role">
                    <select name="role" id="role">
                        <option value="">Select Roll</option>
                        <option value="">Employee </option>
                        <option value="">Manager</option>
                    </select>
                </div>
                <div className="leave-status">
                    <select name="status" id="status">
                        <option value="pending">Leave Status</option>
                        <option value="pending">Pending</option>
                        <option value="pending">Approved</option>
                        <option value="pending">Rejected</option>
                    </select>
                </div>
                <div className="from">
                    <input type="date" id="from" name="fromsalary" />
                </div>
                <br />
                <div className="to">
                    <input type="date" id="to" name="tosalaray" />
                </div>
                <div className="search">
                    <button className="btn btn-info">Search</button>
                </div>
            </form>
            <table className="table" id="myTable">
            
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Join Date</th>
                        <th scope="col">Role</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Payslip</th>
                    </tr>
                </thead>
                <tbody>
                  
                        {
                            user.filter((val)=>{
                                if(query == "")
                                {
                                    return val
                                }else if (val.name.toLowerCase().includes(query.toLowerCase())){
                                    return val
                                }
                            }).map((item,index) => {
                                return (<tr key={index} >
                                
                                   <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.joinDate}</td>
                                    <td>{item.role}</td>
                                    <td>{item.salary}</td>
                                   
                                    <td><NavLink className="btn btn-info" to="/payrolls/salaryslip/generate" ><button>Genertor Slip </button></NavLink></td> 
                                 
                                </tr>)
                            })}
                


                </tbody>
            </table>
        </div>
    );
}
