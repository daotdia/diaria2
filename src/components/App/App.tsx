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

   const { actualEntry, addEntrys } = useContext(DiaryContext);

   useEffect(() => {
      const fetchData = async () => {
         try {
            await fetchEntrys("test")
               .then((items) => {
                  addEntrys(items)
               })
         } catch (error) {
            console.error(error);
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
