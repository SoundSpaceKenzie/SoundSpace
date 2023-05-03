

import { useState } from 'react';
import { Header } from '../../Components/Header/index';
import { ListPost } from '../../Components/ListPost/index';
import { StyledDashboard } from './style';
<<<<<<<<< Temporary merge branch 1
import { Footer } from '../../components/Footer';
=========
import { useState } from 'react';
>>>>>>>>> Temporary merge branch 2

export const DashBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StyledDashboard>
      <Header />
      <main>
<<<<<<<<< Temporary merge branch 1
        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <button onClick={() => setModalOpen(true)}> abrir modal </button>
        <UserTitle />
=========
        <main>
          <ListPost />
        </main>
>>>>>>>>> Temporary merge branch 2
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
