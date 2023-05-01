import { StyledButton } from "./style"

export const Button = ({text, backgroundC, textColor})=>{
  return(
    <StyledButton backgroundC={backgroundC} textColor={textColor}>
      {text}
    </StyledButton>
  )
}