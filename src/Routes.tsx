import { Routes, Route } from 'react-router-dom';

const Rout = () => (
  <Routes>
    <Route path='/' element={<h2>Login</h2>} />
    <Route path='/register' element={<h2>Register</h2>} />
    <Route path='/dashboard' element={<h2>Dashboard</h2>} />
  </Routes>
);

export default Rout;
