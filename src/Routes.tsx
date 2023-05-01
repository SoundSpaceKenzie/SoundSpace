import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

const Rout = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<h2>Register</h2>} />
    <Route path='/dashboard' element={<h2>Dashboard</h2>} />
  </Routes>
);

export default Rout;
