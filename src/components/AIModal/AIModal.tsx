import { useState } from 'react';
import Modal from 'react-modal';
import { ModalWrapper, ModalTitle, ModalInput, ButtonWrapper, ExampleQuestionTag, EnviarButton, CancelarButton, IAResponseContent, IAResponseWrapper, SVG, LogoContainer, LogoWrapper, SpinnerWrapper } from './AIModal.styled';
import { putQuestion } from './AIModalController';
import ClipLoader from 'react-spinners/ClipLoader';

const AskModal = ({ isOpen, onRequestClose }) => {
   const [question, setQuestion] = useState("")
   const [iaResponse, setIaResponse] = useState(null)
   const [loading, setLoading] = useState(false)
   const [enviado, setEnviado] = useState(false)


   const exampleQuestions = [
      "¿Cuando me fui a cenar con mis amigos? ",
      "¿Crees que voy por el buen camino para conseguir mi objetivo?",
      "Cuenta cuantas veces he comentado lo feliz que estoy",
      '¿Cuales han sido mis sentimientos?'
      // Agrega todas las preguntas de ejemplo que desees
   ];

   const handleQuestionChange = (e) => {
      setQuestion(e.target.value);
   };

   const handleQuestionSubmit = async () => {
      setEnviado(true)
      setLoading(true)
      console.log(question)
      const response = await putQuestion(question)
      setIaResponse(response)
      setLoading(false)
   };

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         contentLabel="Ask Modal"
         style={{
            content: {
               width: '50%',
               margin: '10% auto',
               background: '#e6e6e6',
               position: 'relative',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center'
            }
         }}
      >
         <ModalWrapper>
            <ModalTitle>Pregúntame</ModalTitle>
            <ModalInput
               type="text"
               placeholder="¿Qué quieres saber sobre ti?"
               value={question}
               onChange={handleQuestionChange}
               disabled={loading}
            />
            <div>
               {exampleQuestions.map((q, i) => <ExampleQuestionTag key={i} onClick={() => setQuestion(q)}>{q}</ExampleQuestionTag>)}
            </div>
            {enviado && (
               <IAResponseWrapper>
                  <LogoWrapper>
                     <LogoContainer>
                        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                           <path d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z" />
                        </SVG>
                     </LogoContainer>
                  </LogoWrapper>
                  <IAResponseContent>
                     {
                        loading ?
                           <SpinnerWrapper>
                              <ClipLoader color="#606163" loading={loading} size={75} />
                           </SpinnerWrapper>
                           :
                           <IAResponseContent>{iaResponse}</IAResponseContent>
                     }
                  </IAResponseContent>
               </IAResponseWrapper>
            )}
            <ButtonWrapper>
               <CancelarButton onClick={onRequestClose} disabled={loading}>Cancelar</CancelarButton>
               <EnviarButton onClick={handleQuestionSubmit} disabled={loading}>Enviar</EnviarButton>
            </ButtonWrapper>
         </ModalWrapper>
      </Modal>
   );
};

export default AskModal;
