import { Navigate } from 'react-router-dom';

interface IProtectRoute {
  type: string;
  children: JSX.Element;
}

const ProtectedRoute = ({ type, children }: IProtectRoute) => {
  const token = localStorage.getItem('@SoundSpace:Token');
  // if (type === 'dashboard' && !token) {
  //   return <Navigate to='/' replace />;
  // }
  // if ((type === 'login' || type === 'register') && token) {
  //   return <Navigate to='/dashboard' replace />;
  // }

  return children;
};

export default ProtectedRoute;
