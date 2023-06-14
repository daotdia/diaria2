import { useContext, type FC } from 'react'
import { SideBarContainer, ListItem, ItemIcon, ItemName, ItemDate, Divaux, ItemContent } from './SideBar.styled'
import { FaBook, FaSpinner, FaTrash } from 'react-icons/fa'
import { DiaryContext } from '../../contexts/DiaryContext'
import { Entry } from '../../models/interfaces/Entry'
import { formatDate } from '../../util/Time'
import { ClipLoader } from 'react-spinners'
import { SpinnerWrapper } from '../AIModal/AIModal.styled'
import { deleteEntry } from './SideBarController'
import { id } from 'date-fns/locale'


interface SideBarProps { }

const SideBar: FC<SideBarProps> = () => {
   const { newEntryLoading, entries, isFetching } = useContext(DiaryContext)

   const items: Entry[] | [] = entries

   const { actualEntry, addActualEntry, replaceEntrys } = useContext(DiaryContext);

   return (
      <SideBarContainer>
         {newEntryLoading && (
            <ListItem isEven={items.length % 2 === 0} isActual={false}>
               <ItemIcon><FaSpinner /></ItemIcon>
               <ItemName>Guardando...</ItemName>
            </ListItem>
         )}
         {isFetching &&
            <SpinnerWrapper>
               <ClipLoader color="#606163" loading={isFetching} size={75} />
            </SpinnerWrapper>
         }
         {items.map((item: Entry, index) => {

            const date = formatDate(item.fecha)

            return (
               <ListItem
                  key={index}
                  isEven={index % 2 === 0}
                  isActual={actualEntry ? actualEntry.id === item.id : false}
                  onClick={() => { addActualEntry(item) }}
               >
                  <ItemContent>
                     <ItemIcon>
                        {
                           actualEntry?.id === item.id ?
                              <div onClick={(event) => {
                                 event.stopPropagation()
                                 addActualEntry(null)
                                 const newEntries = items.filter((it: Entry) => it.id !== actualEntry.id)
                                 replaceEntrys(newEntries)
                                 deleteEntry(item)
                              }}>
                                 <FaTrash color="#c57272" />
                              </div>
                              :
                              <FaBook />
                        }
                     </ItemIcon>
                     <ItemName>{item.title}</ItemName>
                  </ItemContent>
                  <Divaux>
                     <ItemDate>
                        <ItemDate>{date.date}</ItemDate>
                        <br />
                        <ItemDate>{date.hour}</ItemDate>
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
