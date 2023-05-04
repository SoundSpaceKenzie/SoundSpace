

import { useState } from 'react';
import { Header } from '../../Components/Header/index';
import { ListPost } from '../../Components/ListPost/index';
import { StyledDashboard } from './style';
import { UserTitle } from '../../Components/UserTitle';
import Modal from '../../Components/Modal/modal';
import { Footer } from '../../Components/Footer';




export const DashBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StyledDashboard>
      <Header />
      <main>

        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <button onClick={() => setModalOpen(true)}> abrir modal </button>
        <UserTitle />

        <main>
          <ListPost />
        </main>

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
          <li>
            <button> Criar Post </button>
            <span>Buscar</span>
          </li>
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
      <Footer setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </StyledDashboard>
  );
};
