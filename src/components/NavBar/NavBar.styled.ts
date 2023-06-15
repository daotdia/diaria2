import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #5555;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 28px;

  &:hover {
      color: #888888; 
      transform: scale(1.1); /* Aumenta un poco el tamaño */
    }
`
