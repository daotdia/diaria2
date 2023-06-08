import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../models/interfaces/Entry';
import { entryToJson, jsonToEntry } from '../../services/parsers';

export const handleSave = async (entry: Entry): Promise<Entry> => {
   const openAIToken = "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"
   try {
      entry.id = uuidv4()
      if (!entry.id_user || !(entry.id_user.length > 0)) {
         //entry.id_user = uuidv4()
         entry.id_user = "test"
      }
      console.log(entry.content)
      const openaiResponse = await axios.post(
         'https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/obtener_resumen_titulo',
         { entry, openAIToken },
         { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(openaiResponse)
      const valueResponse = JSON.parse(String(openaiResponse.data.body))
      const summary = valueResponse.summary.replace(/\n/g, "").replace(/["]/g, "")
      const title = valueResponse.title.replace(/\n/g, "").replace(/[."]/g, "")
      entry.summary = summary
      entry.title = title

      await axios.post(
         'https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/titular_resumen',
         entryToJson(entry),
         {
            headers: { 'Content-Type': 'application/json' }
         }
      )
      console.log(entry)
      return entry
   } catch (error) {
      console.error(error);
      return null;
   }
};
