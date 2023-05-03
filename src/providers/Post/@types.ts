export interface IPostProps {
  children: React.ReactNode;
}

export interface IPostContext {
  posts: IPost[];
}

export interface IData {
  data: [IPost];
}

export interface IPost {
  description: string;
  id: number;
  like: [ILike];
  link: string;
  type: string;
  name: string;
  user: IUser;
  userId: number;
}

export interface ILike {
  useID: number;
}

interface IUser {
  name: string;
  avatar: string;
}
