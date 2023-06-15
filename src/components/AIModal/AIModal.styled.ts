import styled from 'styled-components';

export const ModalWrapper = styled.div`
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

export const ModalTitle = styled.h2`
  color: #424242;
  text-align: center;
`;

export const ModalInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #808080;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 2px rgba(92, 92, 92, 1);
  }
`;

export const ExampleQuestionTag = styled.p`
  display: inline-block;
  background-color: #9b9b9b;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  font-size: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 5px;

   &:hover {
    background-color: #cac9c9;
    color: #424242;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const EnviarButton = styled.button`
  padding: 8px;
  background-color: #7e7e7e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  width: 80px; 

  &:hover {
    background-color: #b4caad;
    color: #424242;
  }
`;

export const CancelarButton = styled.button`
  padding: 8px;
  background-color: #b1b1b1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  width: 80px; 

  &:hover {
    background-color: #d4aeae;
    color: #424242;
  }
`;

export const IAResponseWrapper = styled.div`
  margin-top: 20px;
  background: #f2f2f2;
  padding: 15px;
  border-radius: 4px;
`;

export const IAResponseContent = styled.p`
  color: #555555;
  font-size: small;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;


export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SVG = styled.svg`
  fill: #555555; 
  width: 24px;
  height: 24px;
  align-items: center;
`;


export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
