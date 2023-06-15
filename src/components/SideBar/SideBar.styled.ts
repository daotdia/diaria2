import styled from 'styled-components'

export const SideBarContainer = styled.div`
  min-width: 220px;
  max-width: 320px;
  max-height: 93vh;
  background-color: #808080;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  > :first-child {
    margin-top: 0px; /* Margen superior solo para el primer elemento */
  }
`

export const ListItem = styled.div<{ isEven: boolean, isActual:boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 12px;
  padding: 0.25em;
  cursor: pointer;
  background-color: ${
    props => props.isActual ? '#686868' : (props.isEven ? '#454545' : '#505050')
  };

  &:hover {
    background-color: #404040;
  }
`

export const ItemContent= styled.div`
  display: flex;
  align-items: center;
`

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`
export const ItemName = styled.div`
  font-size: 0.75em;
  padding: 0.5em 0em;
`

export const Divaux = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
`

export const ItemDate = styled.span`
  font-size: 0.73em;
  color: #a1a1a1;
  margin-left: 8px;
`;
