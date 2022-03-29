import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './StyleDashboard.css'

export default function DashBoard() {
  return (
  <>
  <div className='navContainer'>
  <div className='navigation align-center d-flex justify-between'>  
      <div className='logo'>Cloud-hr</div>
      
      <div className='login d-flex align-center'>
        <div>login user</div>
        <div className='loginUser'><img src="" alt="" /></div>
      </div>
  </div>
  </div>
  </>
  )
}
