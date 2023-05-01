import LoginForm from '../../components/Form/LoginForm/LoginForm';
import Logo from '../../assets/imgs/logoSpaceSound.svg';
import { StyleLoginPage } from './style';

const Login = () => {
  return (
    <StyleLoginPage>
      <img src={Logo} alt='Logo SoundSpace' />
      <p>
        “Conecte-se com a sua música, compartilhe com o mundo e seja a estrela
        do seu próprio show”
      </p>
      <h2>Login</h2>
      <LoginForm />
    </StyleLoginPage>
  );
};

export default Login;
