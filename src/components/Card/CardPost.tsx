import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers/User/UserContext';
import { useSearchParams } from 'react-router-dom';
import { IUser } from '../../providers/User/@types';
import { Spotify } from 'react-spotify-embed';
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

      <div>
        {/* {url}
        <Spotify link={url}></Spotify> */}
      </div>

      <p>{description}</p>
    </li>
  );
};
