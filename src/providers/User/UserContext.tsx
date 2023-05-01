import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserContextProps } from './@types';

export const UserContext = createContext({});

export const UserProvider = ({ children }: IUserContextProps) => {
  const [User, setUser] = useState();

  const UserLogin = async () => {
    console.log('test');
  };

  return (
    <UserContext.Provider value={{ setUser, UserLogin }}>
      {children}
    </UserContext.Provider>
  );
};
