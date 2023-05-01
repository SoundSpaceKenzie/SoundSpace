import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { RegisterPage } from './pages/RegisterPage';

const Rout = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/dashboard' element={<h2>Dashboard</h2>} />
  </Routes>
);

export default Rout;
