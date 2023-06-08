import { type FC } from 'react'
import { LoginIconContainer, Title, NavBarContainer } from './NavBar.styled'
import { FaUser } from 'react-icons/fa' // Importa el icono FaUser de FontAwesome

interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => (
   <NavBarContainer data-testid="NavBar">
      <Title>Diaria</Title>
      <LoginIconContainer onClick={() => { /* Aquí va función para iniciar sesión */ }}>
         <FaUser name="login" size={24} />
      </LoginIconContainer>
   </NavBarContainer>
)

export default NavBar
