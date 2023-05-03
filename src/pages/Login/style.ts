import styled from 'styled-components';

export const StyleLoginPage = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #1a001d;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 2.5rem;

  .Login-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;

    img {
      width: 157px;
      height: 107px;
    }

    #Login-Container_title {
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

    p {
      margin-top: 17px;
      color: var(--grey-0);
      font-size: 14px;
    }

    .Login-Container_link {
      margin-top: 7px;
      font-size: 14px;
      color: var(--grey-0);
      border-bottom: 2px solid var(--grey-0);
    }
  }
`;
