import styled from 'styled-components'

export const ReaderWrapper = styled.div`
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

export const Title = styled.h2`
  /* Estilos personalizados para el título */
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;

export const Summary = styled.p`
  /* Estilos personalizados para el resumen */
  margin-bottom: 20px;
  font-size: 18px;
  color: #c0c0c0;
`;

export const Content = styled.p`
  /* Estilos personalizados para el contenido */
  font-size: 16px;
  color: #8d8d8d;
`;

export const Fecha = styled.p`
  /* Estilos personalizados para el contenido */
  font-size: 14px;
  text-align: end;
  color: #504d4d;
`;