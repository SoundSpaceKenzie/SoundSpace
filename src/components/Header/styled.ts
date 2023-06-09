import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  padding: 10px;
  width: 100%;
  height: 80px;

  background-color: #1a001d;
  color: white;
  .Resp-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1024px;
    .logo {
      max-height: 75px;
    }
    .right-side {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 15px;
      .UserIcon {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
      .ExitBtn {
        width: 35px;
        height: 35px;
      }
    }
  }
`;
