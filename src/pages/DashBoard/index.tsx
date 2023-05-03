import { useState } from 'react';
import Modal from '../../Components/Modal/modal';
import { Header } from '../../components/Header';
import { UserTitle } from '../../components/UserTitle';
import { StyledDashboard } from './style';
import { Footer } from '../../components/Footer';

export const DashBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StyledDashboard>
      <Header />
      <main>
        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <button onClick={() => setModalOpen(true)}> abrir modal </button>
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
      <Footer />
    </StyledDashboard>
  );
};
