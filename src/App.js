import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './Components/Heading';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (

    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      {/*<ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/adduser'>Add USer</a></li>
        <li><a href='/edituser'>Edit User</a></li>
  </ul>*/}
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/adduser' element={<AddUser />} />
            <Route path='/edituser/1' element={<EditUser />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}
export default App;
