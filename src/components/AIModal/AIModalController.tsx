import axios from 'axios';
import { extractLogic } from '../../services/extractLogic';
import { OPENAI_TOKEN } from '../../util/Constants';


export const putQuestion = async (question: string): Promise<string> => {
   const openAIToken = OPENAI_TOKEN
   const id_user = "test"
   try {
      const openaiResponse = await axios.post(
         'https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/putQuestion',
         { question, openAIToken },
         { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(openaiResponse)
      const valueResponse = JSON.parse(String(openaiResponse.data.body))
      console.log(valueResponse)

      const topics = valueResponse.topics
      console.log(topics)

      const DynamoDBresponse = await axios.get(
         `https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/extraer_contenido?id_user=${id_user}`, { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(DynamoDBresponse)

      const content = extractLogic(topics.replace(/\.$/, "").split(", "), DynamoDBresponse.data.raw_content)
      console.log("Contenido final: " + content)

      const response = await axios.post(
         'https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/respuestaIA',
         { question, content, openAIToken },
         { headers: { 'Content-Type': 'application/json' } }
      )
      const IAresponse = JSON.parse(String(response.data.body))

      console.log("Respuesta IA: " + IAresponse)
      console.log(IAresponse)

      return IAresponse.IAresponse

   } catch (error) {
      console.error(error);
      return 'No se ha podido realizar la pregunta';
   }
};