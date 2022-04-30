import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Navbar from './components/Shared/Navbar/Navbar';



function App() {



  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/add' element={<AddItems></AddItems>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='myItems' element={<MyItems></MyItems>}></Route>
      </Routes>


    </div>
  );
}

export default App;
