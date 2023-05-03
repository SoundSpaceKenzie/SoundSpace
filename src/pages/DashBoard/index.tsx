import { Header } from '../../components/Header';
import { UserTitle } from '../../components/UserTitle';
import { StyledDashboard } from './style';

export const DashBoard = () => {
  return (
    <StyledDashboard>
      <Header />
      <main>
        <UserTitle />
        <h1>Feed</h1>
        <ul>
          <li>
            <img src='' alt='' />
            <p>Nome: Pessoa</p>
            <div>
              Posts
              <img src='' alt='' />
              <img src='' alt='' />
              <p>Nome: Descrição</p>
              <link rel='stylesheet' href='' />
            </div>
          </li>
        </ul>
      </main>

      <aside>
        <ul>
          <li>Criar Post</li>
          <li>Buscar</li>
        </ul>
      </aside>
      <aside>
        <h3>Sugestões</h3>
        <ul>
          <li>
            <span>Nome da Pessoa</span>
            <button>Seguir</button>
          </li>
          <li>
            <span>Nome da Pessoa</span>
            <button>Seguir</button>
          </li>
        </ul>
      </aside>
      <footer></footer>
    </StyledDashboard>
  );
};
