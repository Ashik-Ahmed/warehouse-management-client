import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Navbar from './components/Shared/Navbar/Navbar';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';



function App() {



  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/add' element={<AddItems></AddItems>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/inventory/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>


    </div>
  );
}

export default App;
