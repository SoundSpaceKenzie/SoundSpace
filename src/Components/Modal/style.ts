import styled from 'styled-components';

export const ModalStyled = styled.div`
  border: 3px solid var(--color-secundary);
  border-radius: 4px;
  padding: 20px;

  width: 375px;
  height: 442px;

  .modal__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .header__form {
    display: flex;
    justify-content: space-between;

    padding-bottom: 15px;
  }

  .title__form {
    font-size: 20px;
    font-weight: 600;
  }

  .close__button {
    background-color: transparent;
    font-size: 19px;
    font-weight: 700;

    cursor: pointer;
  }

  label {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    background-color: var(--grey-0);

    width: 100%;
    height: 44px;

    padding-left: 10px;

    border-radius: 5px;
  }

  select {
    background-color: var(--grey-0);

    width: 100%;
    height: 44px;

    padding-left: 10px;

    font-size: 14px;

    border-radius: 5px;
  }

  option {
    font-size: 16px;
  }

  textarea {
    background-color: var(--grey-0);

    width: 100%;
    height: 44px;

    padding-left: 10px;
    padding-top: 10px;

    border-radius: 5px;
  }

  .button__post{
    background-color: var(--color-primary);
    color: var(--grey-0);

    font-size: 14px;
    font-weight: 600;

    height: 44px;

    border-radius: 5px;
  }
`;