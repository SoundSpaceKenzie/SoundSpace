import styled from 'styled-components';

export const StyleLoginPage = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #1a001d;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 3rem 2.5rem;

  img {
    width: 157px;
    height: 117px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-secundary);
    text-align: center;
  }
  h2 {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    color: var(--grey-0);
  }
`;
