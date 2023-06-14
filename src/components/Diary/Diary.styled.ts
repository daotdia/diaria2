import styled from 'styled-components'

export const DiariButton = styled.button<{disabled:boolean}>`
  position: absolute; /* Hace que el botón sea flotante */
  display: flex;
  align-items: center;
  bottom: 46px; /* Posición en la esquina inferior derecha */
  right: 46px;
  padding: 12px;
  background-color: #424242;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  visibility: hidden;

   ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      background-color: #d4d4d4;
      color: #424242;
    }
  `}
`

export const DiaryWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;


  &:hover ${DiariButton},
  &:focus-within ${DiariButton} {
    opacity: 1;
    visibility: visible;
  }
`

export const EditorWrapper = styled.textarea`
  flex: 1;
  border: 1px solid transparent;
  padding: 10px;
  outline: none;
  background: none;
  color: inherit;
  font: inherit;
  resize: inherit;

  &:focus{
    box-shadow: 0 0 8px rgba(128, 128, 128, 0.5); 
    border: 1px solid #808080; /* Borde gris */
    border-radius: 8px;
  }
  &:hover { 
    &::placeholder {
        color: #999;
        font-size: med;
        font-style: italic;
    }
    box-shadow: 0 0 8px rgba(128, 128, 128, 0.5); 
    border: 1px solid #808080; /* Borde gris */
    border-radius: 8px;
  }

   &::placeholder {
    color: transparent;
  }
`

export const SpinnerDiari = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

