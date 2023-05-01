import styled from "styled-components"

export const StyledButton = styled.button`
width:100%;
height:44px;
background-color: ${({backgroundC})=>backgroundC};
border: none;
border-radius: 5px;
color: ${({textColor})=>textColor};
font-weight: 600;
font-size:0.875em;
`