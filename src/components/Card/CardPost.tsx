<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { useSearchParams } from "react-router-dom";
import { IUser } from "../../providers/User/@types";
import { Spotify } from "react-spotify-embed";
import ReactPlayer from "react-player";
import { FiHeart } from 'react-icons/fi'
import { BiCommentDetail } from 'react-icons/bi'


=======
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers/User/UserContext';
import { useSearchParams } from 'react-router-dom';
import { IUser } from '../../providers/User/@types';
import { Spotify } from 'react-spotify-embed';
>>>>>>> a2e1d4696b996f06995734cb2b4df8e95fac5b46
interface IProps {
  url: string;
  description: string;
  name: string;
  avatar: string;
}

export const CardPost = ({ name, avatar, url, description }: IProps) => {
  return (
    <li>
      <div>
        <img src={avatar} alt='Usuário' />
        <p>{name}</p>
      </div>

<<<<<<< HEAD
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

=======
      <div>
        {/* {url}
        <Spotify link={url}></Spotify> */}
      </div>

      <p>{description}</p>
    </li>
  );
};
>>>>>>> a2e1d4696b996f06995734cb2b4df8e95fac5b46
