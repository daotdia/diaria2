// NavBar.jsx
import { FC, useState } from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';
import AskModal from '../AIModal/AIModal';
import { NavBarContainer, Title, IconContainer } from './NavBar.styled';

interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => {

   const [modalIsOpen, setModalIsOpen] = useState(false);

   const openModal = () => {
      setModalIsOpen(true);
   };

   const closeModal = () => {
      setModalIsOpen(false);
   };

   return (
      <NavBarContainer data-testid="NavBar">
         <Title>Diaria</Title>
         <IconContainer onClick={openModal}>
            <FaRobot name="IA" size={30} />
         </IconContainer>
         <AskModal isOpen={modalIsOpen} onRequestClose={closeModal} />
         <IconContainer onClick={() => { /* Aquí va función para iniciar sesión */ }}>
            <FaUser name="login" size={24} />
         </IconContainer>
      </NavBarContainer>
   );
};

export default NavBar

