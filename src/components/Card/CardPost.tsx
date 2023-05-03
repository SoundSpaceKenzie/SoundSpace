interface IProps {
  url: string;
  description: string;
  
}



export const CardPost = ({ url, description }: IProps) => {
  return(
    <li>
      <div>
        {/* <img src={} alt="Usuário" />
        <p>{name}</p>
         */}
      </div>

      <div>
        {url}
        Card/Spotify
      </div>
        

      <p>{description}</p>
      
      
    </li>

  )
}

