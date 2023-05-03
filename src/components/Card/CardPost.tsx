import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { useSearchParams } from "react-router-dom";
import { IUser } from "../../providers/User/@types";
import { Spotify } from "react-spotify-embed";
import ReactPlayer from "react-player";
import { FiHeart } from 'react-icons/fi'
import { BiCommentDetail } from 'react-icons/bi'


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

      <div className="CardMedia">
        {url}
        <Spotify link="https://open.spotify.com/track/0gplL1WMoJ6iYaPgMCL0gX?si=7fc1c19e6c2e4208" width={300} height={255}></Spotify>
        <ReactPlayer className='react-player'url='https://music.youtube.com/watch?v=-eGM0IJc70Y&feature=share' width='100%' height='250px' controls='true'
      />
      </div>
        
     <div className="Icons" >
     <FiHeart /> <BiCommentDetail />
     </div>
     
      <p>{description}</p>

     
      
    </li>
     
  )
}

