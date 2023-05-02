import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  IUser,
  IUserContext,
  IUserContextProps,
  IDataLoginRequest,
} from './@types';
import Api from '../../services/Api';
import { TLoginValues } from '../../schemas/UserSchemas';
import { AxiosError } from 'axios';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [User, setUser] = useState<IUser>(Object);

  const UserLogin = async (dataForm: TLoginValues) => {
    try {
      const { data }: IDataLoginRequest = await Api.post('/login', dataForm);
      setUser(data.user);
      localStorage.setItem('@SoundSpace:Token', data.accessToken);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        MessageError(String(err.response.data));
      }
    }
  };

  return (
    <UserContext.Provider value={{ UserLogin, User }}>
      {children}
    </UserContext.Provider>
  );
};

function MessageError(message: string) {
  if (message.includes('user')) {
    toast.error('Usuário não encontrado', {
      theme: 'dark',
      style: { backgroundColor: '#343B41', color: '#fff' },
    });
  } else if (message.includes('password')) {
    toast.error('Senha incorreta', {
      theme: 'dark',
      style: { backgroundColor: '#343B41', color: '#fff' },
    });
  }
}
