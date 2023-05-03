export const CardPost = ({name, profileImage, imagem, description, comments }) => {
  return(
    <div>
      <div>
        <img src={imagem} alt=""  />
        <p>{name} {profileImage}</p>
        
      </div>

      <div>
        <img src={imagem} alt="" />
      </div>

      <div>{description}</div>
      <div>{comments}</div>
      
    </div>
  )
}


