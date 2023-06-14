import { useContext, type FC, useEffect } from 'react'
import { AppWrapper, ContentWrapper } from './App.styled'
import NavBar from '../NavBar/NavBar.lazy'
import SideBar from '../SideBar/SideBar.lazy'
import Diary from '../Diary/Diary.lazy'
import { DiaryContext } from '../../contexts/DiaryContext'
import Reader from '../Reader/Reader'
import { fetchEntrys } from '../SideBar/SideBarController'

interface AppProps { }

const App: FC<AppProps> = () => {

   const { actualEntry, addEntrys, setIsFetching } = useContext(DiaryContext);

   useEffect(() => {
      setIsFetching(true)
      const fetchData = async () => {
         try {
            await fetchEntrys("test")
               .then((items) => {
                  const sortItems = items.sort((a, b) => new Date(Number(b.fecha)).getTime() - new Date(Number(a.fecha)).getTime());
                  addEntrys(sortItems)
               })
            setIsFetching(false)
         } catch (error) {
            console.error(error);
            setIsFetching(false)
         }
      };

      fetchData(); // Llamada a la función asincrónica dentro del useEffect

   }, []);
   return (
      <AppWrapper data-testid="App">
         <NavBar></NavBar>
         <ContentWrapper>
            <SideBar></SideBar>
            {actualEntry ? <Reader /> : <Diary />}
         </ContentWrapper>
      </AppWrapper>
   )
}

export default App
