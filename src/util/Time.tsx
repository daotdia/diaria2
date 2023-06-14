import { format } from 'date-fns';
import es from 'date-fns/locale/es';

interface myDate {
   date: string
   hour: string
}

export const formatDate = (dateMs: string): myDate => {
   const date = new Date(Number(dateMs)); // Convertir el timestamp a un objeto Date.
   const formattedDate = format(date, 'dd/MM/yy', { locale: es });
   const formattedTime = format(date, '(HH:mm)', { locale: es });

   return { date: formattedDate, hour: formattedTime }
} 