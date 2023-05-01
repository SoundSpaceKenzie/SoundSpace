import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectRoute/ProtectRoute';

const Rout = () => (
  <Routes>
    <Route
      path='/'
      element={
        <ProtectedRoute type='login'>
          <Login />
        </ProtectedRoute>
      }
    />
    <Route path='/register' element={<h2>Register</h2>} />
    <Route path='/dashboard' element={<h2>Dashboard</h2>} />
  </Routes>
);

export default Rout;
