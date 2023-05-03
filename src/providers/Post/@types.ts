export interface IPostProps{
  children: React.ReactNode
}

export interface IPostContext{
  posts: IPost[]
}




export interface IData{
  data: [IPost]

}

export interface IPost{
  description: string;
  id: number;
  like: [ILike];
  link: string;
  type: string;
  name: string;
  useId: number;
}

export interface ILike {
  useID: number;

}