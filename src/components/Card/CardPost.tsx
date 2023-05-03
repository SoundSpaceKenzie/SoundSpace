import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { useSearchParams } from "react-router-dom";
import { IUser } from "../../providers/User/@types";
interface IProps {
  url: string;
  description: string;
  idPost: number;
  
}



export const CardPost = ({ url, idPost, description }: IProps) => {
  // const {Users} = useContext(UserContext)

  // const [user, setUser ] = useState <IUser[]> ()
  // useEffect(() =>{
  //      setUser(Users.filter(element =>{
  //       return element.id === idPost
  //      }))
  // }, [])



  
  
  return(
    <li>
      <div>
        {/* <img src={user.avatar} alt="Usuário" />
        <p>{name}</p> */}
        
      </div>

      <div>
        {url}
        Card/Spotify
      </div>
        

      <p>{description}</p>
      
      
    </li>

  )
}

