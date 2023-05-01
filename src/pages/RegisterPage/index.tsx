import { FormRegister } from '../../components/Form/Form';

import Logo from '../../assets/imgs/logoSpaceSound.svg';

export const RegisterPage = () => {
  return (
    <main>
      <div>
        <div>
          <img src={Logo} alt='logoSpaceSound' />
        </div>
        <div>
          <header>
            <h1>Cadastro</h1>
          </header>
          <FormRegister />
        </div>
      </div>
    </main>
  );
};
