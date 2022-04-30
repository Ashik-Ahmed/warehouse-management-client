import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Navbar from './components/Shared/Navbar/Navbar';



function App() {



  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>


    </div>
  );
}

export default App;
