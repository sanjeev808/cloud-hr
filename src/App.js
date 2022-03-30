import React from 'react';
import Content from './component/Dashboard/Content';
import DashBoard from './component/Dashboard/DashBoard';
import SideBar from './component/Dashboard/SideBar';
import './App.css';
import PayRolls from './component/payrolls/PayRolls';



function App() {
  return (
  <>
<DashBoard/>
   <div className='d-flex '>
     {/* <SideBar/> */}
     {/* <Content/> */}
     <PayRolls/>
   </div>
  </>
  );
}

export default App;
