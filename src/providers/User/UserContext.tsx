import { createContext, useState } from 'react';
import {
  IUser,
  IUserContext,
  IUserContextProps,
  IDataLoginRequest,
} from './@types';
import Api from '../../services/Api';
import { TLoginValues } from '../../schemas/UserSchemas';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [User, setUser] = useState<IUser>(Object);

  const UserLogin = async (dataForm: TLoginValues) => {
    try {
      const { data }: IDataLoginRequest = await Api.post(
        'https://soundspaceapi.onrender.com/login',
        dataForm
      );
      setUser(data.user);
      localStorage.setItem('@SoundSpace:Token', data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ UserLogin, User }}>
      {children}
    </UserContext.Provider>
  );
};
