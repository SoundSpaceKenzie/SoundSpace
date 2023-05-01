import { createContext, useState } from 'react';
import axios from 'axios';
import { IUser, IUserContextProps } from './@types';

export const UserContext = createContext({});

export const UserProvider = ({ children }: IUserContextProps) => {
  const [User, setUser] = useState<IUser>();
  const [token, setToken] = useState<string>('');

  const UserLogin = async (data: object) => {
    const GetUser = axios
      .post('https://soundspaceapi.onrender.com/login', data)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <UserContext.Provider value={{ setUser, UserLogin }}>
      {children}
    </UserContext.Provider>
  );
};
