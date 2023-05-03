import { useContext, useEffect } from "react"
import { PostContext } from "../../providers/Post/PostContex"
import { CardPost } from "../Card/CardPost"

export const ListPost = () =>{
 const { posts } = useContext(PostContext)
 
  useEffect(() => { {posts.map(post => console.log(post))} })
  return(
      <ul>
        { posts.map(post => (
         <CardPost idPost={post.useId} key={post.id} url={post.link} description={post.description} />
        ))}
      </ul>
  )

}