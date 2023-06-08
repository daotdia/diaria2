import axios from 'axios';
import { Entry } from '../../models/interfaces/Entry';

export const fetchEntrys = async (id_user: string): Promise<Entry[]> => {
   const openAIToken = "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"
   try {
      id_user = "test"
      const fetchResponse = await axios.get(
         `https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/fetchEntries?id_user=${id_user}`, { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(fetchResponse)
      const entries = fetchResponse.data.entries

      return entries
   } catch (error) {
      console.error(error);
      return [];
   }
};
