import { useContext, type FC, useState, useEffect } from 'react'
import { SideBarContainer, ListItem, ItemIcon, ItemName, ItemDate, Divaux, ItemContent } from './SideBar.styled'
import { FaBook, FaSpinner } from 'react-icons/fa'
import { DiaryContext } from '../../contexts/DiaryContext'
import { Entry } from '../../models/interfaces/Entry'
import { fetchEntrys } from './SideBarController'
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

interface SideBarProps { }

const SideBar: FC<SideBarProps> = () => {
   const { newEntryLoading, entries } = useContext(DiaryContext)

   const items: Entry[] | [] = entries

   const { addActualEntry } = useContext(DiaryContext);

   return (
      <SideBarContainer>
         {newEntryLoading && (
            <ListItem isEven={items.length % 2 === 0}>
               <ItemIcon><FaSpinner /></ItemIcon>
               <ItemName>Guardando...</ItemName>
            </ListItem>
         )}
         {items.map((item, index) => {
            const date = new Date(Number(item.fecha)); // Convertir el timestamp a un objeto Date.
            const formattedDate = format(date, 'dd/MM/yy', { locale: es });
            const formattedTime = format(date, '(HH:mm)', { locale: es });
            return (
               <ListItem key={index} isEven={index % 2 === 0} onClick={() => { addActualEntry(item) }}>
                  <ItemContent>
                     <ItemIcon><FaBook /></ItemIcon>
                     <ItemName>{item.title}</ItemName>
                  </ItemContent>
                  <Divaux>
                     <ItemDate>
                        <ItemDate>{formattedDate}</ItemDate>
                        <br />
                        <ItemDate>{formattedTime}</ItemDate>
                     </ItemDate>
                  </Divaux>
               </ListItem>
            )

         }
         )}
      </SideBarContainer>
   )
}

export default SideBar
