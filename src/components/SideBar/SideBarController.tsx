import axios from 'axios';
import { Entry } from '../../models/interfaces/Entry';

export const fetchEntrys = async (id_user: string): Promise<Entry[]> => {
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

export const deleteEntry = async (entry: Entry): Promise<void> => {
   try {
      const response = await axios.delete(
         `https://wye7oh6h0i.execute-api.eu-north-1.amazonaws.com/test/deleteEntry?id=${encodeURIComponent(entry.id)}&id_user=${encodeURIComponent(entry.id_user)}`,
         { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
         console.log('Entrada eliminada con éxito:', response);
      } else {
         console.error('Error al eliminar la entrada:', response);
      }
   } catch (error) {
      console.error(error)
   }
}