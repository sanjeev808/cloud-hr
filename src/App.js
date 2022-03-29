
import Content from './component/Dashboard/Content';
import DashBoard from './component/Dashboard/DashBoard';
import SideBar from './component/Dashboard/SideBar';
import './App.css';
function App() {
  return (
  <>
<DashBoard/>
   <div className='d-flex '>
     <SideBar/>
     <Content/>
   </div>
  </>
  );
}

export default App;
