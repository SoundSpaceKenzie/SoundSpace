import { IProps } from "../../Components/Modal/modal";
import { Styledfooter } from './style';
import { BsPlusSquare } from 'react-icons/bs'



export const Footer = ({modalOpen, setModalOpen}: IProps) => {



  return (
    <Styledfooter>
      <button onClick={() => setModalOpen(true)}> <BsPlusSquare /> </button>
      <img src='' alt='' />
      <img src='' alt='' />
      <img src='' alt='' />
    </Styledfooter>
  );
};
