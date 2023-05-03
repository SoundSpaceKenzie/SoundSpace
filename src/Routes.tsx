import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { RegisterPage } from './pages/RegisterPage';
import { DashBoard } from './pages/DashBoard';

const Rout = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/dashboard' element={<DashBoard />} />
  </Routes>
);

export default Rout;
