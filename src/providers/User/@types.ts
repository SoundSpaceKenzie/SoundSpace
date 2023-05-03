import { TLoginValues } from '../../schemas/UserSchemas';

export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IUserContext {
  UserLogin: (data: TLoginValues) => Promise<void>;
  User: IUser;
}

export interface IUser {
  email: string;
  name: string;
  avatar: string;
  id: number;
}

export interface IDataLoginRequest {
  data: {
    accessToken: string;
    user: IUser;
  };
}
